import dish1 from "../assets/d1.jpg";
import dish2 from "../assets/d2.jpg";
import dish3 from "../assets/d3.jpg";
import dish4 from "../assets/d4.png";
import dish5 from "../assets/d5.jpeg";
import dish6 from "../assets/d6.jpg";
import dish7 from "../assets/d7.jpg";
import dish8 from "../assets/d8.jpg";
import dish9 from "../assets/d9.jpg";
import dish10 from "../assets/d10.png";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Classic Chicken Shawarma",
    description: "Classic shawarma with authentic taste.",
  },
  {
    image: dish2,
    title: "Beef Shawarma",
    description: "Cooked with juicy fresh beef and bread of your choice.",
  },
  {
    image: dish3,
    title: "Lamb Shawarma",
    description: "Added flavours with lamb meat for shawarma lovers.",
  },
  {
    image: dish4,
    title: "Pita Shawarma",
    description: "Exception taste with the new bread and delicious taste.",
  },
  {
    image: dish5,
    title: "Spiced Up Shawarma",
    description: "For the spice lovers.",
  },
  {
    image: dish6,
    title: "Open Platter",
    description: "Eat the shawarma in an openly plated style.",
  },
  {
    image: dish7,
    title: "Egg Roll Shawarma",
    description: "Chicken with a roll of egg. Non-veg Delight",
  },
  {
    image: dish8,
    title: "Roti Shawarma",
    description: "Crispy flavours with a soft roti.",
  },
  {
    image: dish9,
    title: "Overloaded Shawarma",
    description: "Tender chicken with overloaded sauces.",
  },
  {
    image: dish10,
    title: "Non-Veg Delight",
    description:
      "With the presence of chicken, mutton and egg , needs no explaination.",
  },
];

export const ABOUT = {
  header: "Know us",
  content:
  "At our establishment, we are committed to serving you the best by prioritizing hygiene and quality in every shawarma we prepare. From sourcing the freshest ingredients to maintaining impeccable cleanliness throughout our kitchen, we ensure that every step of our process meets rigorous standards. Our skilled chefs craft each shawarma with care, guaranteeing a delicious and safe dining experience. Your satisfaction and health are our utmost priorities, reflected in every flavorful bite of our hygienically prepared shawarmas.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable tastebud experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Churchgate, Mumbai, 400020" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: shawarmasubway@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
