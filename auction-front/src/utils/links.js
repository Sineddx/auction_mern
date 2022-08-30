import { BiLogIn, BiRegistered, BiLogOut } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

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
    text: "Dodaj  Produkt",
    path: "/add-auction",
    icon: <MdContactSupport />,
    hideIfUser: false,
    public: false,
  },
  {
    id: 4,
    text: "Kontakt",
    path: "/contact",
    icon: <MdContactSupport />,
    hideIfUser: false,
    public: true,
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
