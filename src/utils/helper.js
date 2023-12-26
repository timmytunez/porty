import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  chat,
  cryptohub,
  Fintech,
  shoppy,

} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uril: "",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uril: "https://www.linkedin.com/in/akande-olawole-10a34a288/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uril: "https://github.com/timmytunez",
    color: "#fff",
  },
  {
    id: `whatsapp-${Date.now()}`,
    Icon: FaWhatsapp,
    uril: "https://web.facebook.com/profile.php?id=100093241536425",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`, 
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "E-commerce Shoppy",
    imgSrc: shoppy,
    gitURL: "https://github.com/timmytunez/my-store",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "cryptohub",
    imgSrc: cryptohub,
    gitURL: "https://github.com/timmytunez/crytohub",
  },
  // {
  //   id: `chatApp-${Date.now()}`,
  //   name: "chatApp",
  //   imgSrc: chat,
  //   gitURL: "https://github.com/timmytunez/chatapp",
  // },
  {
    id: `fintech-${Date.now()}`,
    name: "university website",
    imgSrc: Fintech,
    gitURL: "https://github.com/timmytunez/university-website",
  },

];
