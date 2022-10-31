import { useEffect, useState, useRef } from "react";
import { useAppContext } from "../../context/appContext";
import Wrapper from "./ChatBox.styled";
import InputEmoji from "react-input-emoji";
import moment from "moment";
import "moment/locale/pl";

const ChatBox = ({
  chat,
  currentUserId,
  setSendMessage,
  receiveMessage,
  sendMessageFunc,
}) => {
  const { getOtherUser, getMessages, sendMessage } = useAppContext();
  const defaultImage =
    "https://raw.githubusercontent.com/ZainRk/MERN-SocialMedia-ZAINKEEPSCODE/master/server/public/images/defaultProfile.png";
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll = useRef();

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
      setMessages([...messages, receiveMessage]);
    }
  }, [receiveMessage]);

  //fetching data for header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUserId);
    const getUserData = async () => {
      const data = await getOtherUser(userId);
      setUserData(data);
    };
    if (chat !== null) getUserData();
  }, [chat, currentUserId]);
  //fetching data for messages
  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getMessages(chat._id);
      setMessages(data);
    };

    if (chat !== null) fetchMessages();
  }, [chat]);
  
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };
  const handleSend = async (e) => {
    // if (e) {
    //   e.preventDefault();
    // }
    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: chat._id,
    };
    const receiverId = chat.members.find((id) => id !== currentUserId);

    sendMessageFunc({ ...message, receiverId });

    const data = await sendMessage(message);
    setMessages([...messages, data]);
    setNewMessage("");
  };
  return (
    <Wrapper>
      <div className="ChatBox-container">
        {chat ? (
          <>
            <div className="chat-header">
              <div className="follower">
                <div>
                  <div className="user-data">
                    <img
                      src={defaultImage}
                      alt="zdjęcie użytkownika"
                      className="followerImage"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="name" style={{ fontSize: "0.8rem" }}>
                      <span>
                        {userData?.name} {userData?.surname}
                      </span>
                    </div>
                  </div>
                </div>
                <hr
                  style={{ width: "100%", border: "0.1px solid #ececec" }}
                ></hr>
              </div>
            </div>
            <div className="chat-body">
              {messages?.map((message, index) => (
                <div
                  ref={scroll}
                  key={index}
                  className={
                    message.senderId === currentUserId
                      ? "message own"
                      : "message"
                  }
                >
                  <span>{message.text}</span>
                  <span>{moment(message.createdAt).fromNow()}</span>
                </div>
              ))}
            </div>
            <div className="chat-sender">
              <InputEmoji
                className="emoji-input"
                value={newMessage}
                onChange={handleChange}
                placeholder="Napisz coś.."
                onEnter={handleSend}
              />
              <div className="btn btn-send" onClick={handleSend}>
                Wyślij
              </div>
            </div>
          </>
        ) : (
          <span className="chatbox-empty-message">
            Kliknij na osobę do której chcesz napisać
          </span>
        )}
      </div>
    </Wrapper>
  );
};
export default ChatBox;
