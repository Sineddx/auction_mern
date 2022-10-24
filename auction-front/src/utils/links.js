import { BiLogIn, BiRegistered, BiLogOut } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";
import { AiOutlineMessage, AiOutlinePlusCircle } from "react-icons/ai";

const links = [
  {
    id: 1,
    text: "Zaloguj",
    path: "/signin?login=true",
    icon: <BiLogIn />,
    hideIfUser: true,
    public: true,
  },
  {
    id: 2,
    text: "Zarejestruj",
    path: "/signin?login=false",
    icon: <BiRegistered />,
    hideIfUser: true,
    public: true,
  },
  {
    id: 3,
    text: "Dodaj  aukcję",
    path: "/add-auction",
    icon: <AiOutlinePlusCircle />,
    hideIfUser: false,
    public: false,
  },
  {
    id: 6,
    text: "Wiadomości",
    path: "/user/messages",
    icon: <AiOutlineMessage />,
    hideIfUser: false,
    public: false,
  },
  {
    id: 5,
    text: "Wyloguj",
    path: "/",
    icon: <BiLogOut />,
    hideIfUser: false,
    public: false,
  },
];

export default links;
