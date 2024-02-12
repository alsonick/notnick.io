import { FiKey, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { generateRandomId } from "./generate-random-id";

export const LINKS = [
  {
    id: generateRandomId(),
    title: "Keybase",
    href: "https://keybase.io/nick241",
    icon: <FiKey />,
  },
  {
    id: generateRandomId(),
    title: "GitHub",
    href: "https://github.com/alsonick",
    icon: <FiGithub />,
  },
  {
    id: generateRandomId(),
    title: "Twitter",
    href: "https://twitter.com/heynickn",
    icon: <FiTwitter />,
  },
  {
    id: generateRandomId(),
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/nicholas-n-5a9187195/",
    icon: <FiLinkedin />,
  },
];
