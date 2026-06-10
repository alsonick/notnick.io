import { FiKey, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { generateRandomId } from "./generate-random-id";
import { social } from "./social-links";

export const LINKS = [
  {
    id: generateRandomId(),
    title: social.keybase.name,
    href: social.keybase.link,
    icon: <FiKey />,
  },
  {
    id: generateRandomId(),
    title: social.github.name,
    href: social.github.link,
    icon: <FiGithub />,
  },
  {
    id: generateRandomId(),
    title: social.x.name,
    href: social.x.link,
    icon: <FaXTwitter />,
  },
  {
    id: generateRandomId(),
    title: social.linkedin.name,
    href: social.linkedin.link,
    icon: <FiLinkedin />,
  },
];
