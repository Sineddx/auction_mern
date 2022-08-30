import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/components/Conversations";

const Conversation = ({ data, currentUserId, online }) => {
  const defaultImage =
    "https://raw.githubusercontent.com/ZainRk/MERN-SocialMedia-ZAINKEEPSCODE/master/server/public/images/defaultProfile.png";
  const { getOtherUser } = useAppContext();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    const getUserData = async () => {
      const data = await getOtherUser(userId);
      setUserData(data);
    };
    getUserData();
  }, []);

  return (
    <Wrapper>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}
          <div className="user-data">
            <img
              src={defaultImage}
              className="followerImage"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="name" style={{ fontSize: "0.8rem" }}>
              <span>
                {userData?.name} {userData?.surname}
              </span>
              <span>{online ? "Dostępny" : "Niedostępny"}</span>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }}></hr>
    </Wrapper>
  );
};
export default Conversation;
