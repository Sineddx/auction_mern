import Wrapper from "../assets/wrappers/pages/Messages";
import { useAppContext } from "../context/appContext";
import { useEffect, useState, useRef } from "react";
import { Conversation, ChatBox } from "../components";
import { io } from "socket.io-client";
const Messages = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const { user, userChats } = useAppContext();
  const [sendMessageSocket, setSendMessageSocket] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const socket = useRef();
  useEffect(() => {
    const getChats = async () => {
      const data = await userChats(user.id);
      setChats(data);
      console.log(data);
    };
    getChats();
  }, [user.id]);

  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", user.id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  useEffect(() => {
    if (sendMessageSocket !== null) {
      socket.current.emit("send-message", sendMessageSocket);
    }
  }, [sendMessageSocket]);

  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      console.log(data);
      setReceiveMessage(data);
    });
  }, []);

  return (
    <Wrapper>
      <div className="Chat">
        {/* Left Side*/}
        <div className="Left-side-chat">
          <div className="Chat-container">
            <h2>Rozmowy</h2>
            <div className="Chat-list">
              {chats.map((chat) => (
                <div onClick={() => setCurrentChat(chat)}>
                  <Conversation data={chat} currentUserId={user.id} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="Right-side-chat">
          <ChatBox
            chat={currentChat}
            currentUserId={user.id}
            setSendMessage={setSendMessageSocket}
            receiveMessage={receiveMessage}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Messages;
