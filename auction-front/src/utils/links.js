import { BiLogIn, BiRegistered } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";

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
    path: "/add-product",
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
];

export default links;
