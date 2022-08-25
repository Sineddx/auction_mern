import babyBoy from "../assets/images/categories/baby-boy.png";
import confetti from "../assets/images/categories/confetti.png";
import cosmetics from "../assets/images/categories/cosmetics.png";
import enterprise from "../assets/images/categories/enterprise.png";
import fashion from "../assets/images/categories/fashion.png";
import healthcare from "../assets/images/categories/healthcare.png";
import openBook from "../assets/images/categories/open-book.png";
import responsive from "../assets/images/categories/responsive.png";
import sedan from "../assets/images/categories/sedan.png";
import sports from "../assets/images/categories/sports.png";

export const categories = [
  {
    name: "Książki",
    path: "/search?searchCategory=Książki",
    icon: openBook,
  },
  {
    name: "Uroda",
    path: "/search?searchCategory=Uroda",
    icon: cosmetics,
  },
  {
    name: "Firma i usługi",
    path: "/search?searchCategory=Firma+i+usługi",
    icon: enterprise,
  },
  {
    name: "Dziecko",
    path: "/search?searchCategory=Dziecko",
    icon: babyBoy,
  },
  {
    name: "Zdrowie",
    path: "/search?searchCategory=Zdrowie",
    icon: healthcare,
  },
  {
    name: "Sport",
    path: "/search?searchCategory=Sport",
    icon: sports,
  },
  {
    name: "Motoryzacja",
    path: "/search?searchCategory=Motoryzacja",
    icon: sedan,
  },
  {
    name: "Moda",
    path: "/search?searchCategory=Moda",
    icon: fashion,
  },
  {
    name: "Kultura i rozrywka",
    path: "/search?searchCategory=Kultura+i+Rozrywka",
    icon: confetti,
  },
  {
    name: "Elektronika",
    path: "/search?searchCategory=Elektronika",
    icon: responsive,
  },
];
