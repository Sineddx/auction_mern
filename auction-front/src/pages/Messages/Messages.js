import Wrapper from "./Messages.styled";
import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";
import { Conversation, ChatBox } from "../../components";

const Messages = () => {
  const { user, userChats, socket } = useAppContext();
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessageSocket, setSendMessageSocket] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getChats = async () => {
      const data = await userChats(user.id);
      setChats(data);
      if (data.length > 0) {
        setCurrentChat(data[0]);
      }
    };

    getChats();
  }, [user]);

  useEffect(() => {
    socket.emit("new-user-add", user.id);
    socket.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  const checkOnlineStatus = (chat) => {
    const chatMembers = chat.members.find((member) => member !== user.id);
    const online = onlineUsers.find((user) => user.userId === chatMembers);
    return online ? true : false;
  };

  useEffect(() => {
    if (sendMessageSocket !== null) {
      socket.emit("send-message", sendMessageSocket);
    }
  }, [sendMessageSocket]);

  useEffect(() => {
    socket.on("receive-message", (data) => {
      setReceiveMessage(data);
    });
  }, []);
  const clickHandler = () => {
    setToggle(!toggle);
  };
  return (
    <Wrapper toggle={toggle}>
      <div className="Chat">
        {/* Left Side*/}
        <div className="Left-side-chat">
          <div className="Chat-container">
            <h2>Rozmowy</h2>
            <div className="low-resolution" onClick={clickHandler}>
              ...
            </div>
            <div className="Chat-list">
              {chats.length > 0
                ? chats.map((chat, index) => (
                    <div key={index} onClick={() => setCurrentChat(chat)}>
                      <Conversation
                        data={chat}
                        currentUserId={user.id}
                        online={checkOnlineStatus(chat)}
                      />
                    </div>
                  ))
                : "Brak aktywnych rozmów"}
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
