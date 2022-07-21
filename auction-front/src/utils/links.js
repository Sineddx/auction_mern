import { BiLogIn, BiRegistered } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";

const links = [
  {
    id: 1,
    text: "Zaloguj",
    path: "/signin?login=true",
    icon: <BiLogIn />,
  },
  {
    id: 2,
    text: "Zarejestruj",
    path: "/signin?login=false",
    icon: <BiRegistered />,
  },
  {
    id: 3,
    text: "Kontakt",
    path: "/contact",
    icon: <MdContactSupport />,
  },
];

export default links;
