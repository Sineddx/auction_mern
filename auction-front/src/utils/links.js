import { BiLogIn, BiRegistered } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";

const links = [
  {
    id: 1,
    text: "Zaloguj",
    path: "/signin?login=true",
    icon: <BiLogIn />,
    restricted: true,
  },
  {
    id: 2,
    text: "Zarejestruj",
    path: "/signin?login=false",
    icon: <BiRegistered />,
    restricted: true,
  },
  {
    id: 3,
    text: "Kontakt",
    path: "/contact",
    icon: <MdContactSupport />,
    restricted: false,
  },
];

export default links;
