import { generateRandomId } from "./generate-random-id";
import { SOCIAL_LINKS } from "./social-links";
import { Social } from "../types/social";

export const SOCIALS: Social[] = [
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.x.name,
    username: SOCIAL_LINKS.x.link,
    link: SOCIAL_LINKS.x.link,
  },
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.instagram.name,
    username: SOCIAL_LINKS.instagram.username,
    link: SOCIAL_LINKS.instagram.link,
  },
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.snapchat.name,
    username: SOCIAL_LINKS.snapchat.username,
    link: SOCIAL_LINKS.snapchat.link,
  },
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.github.name,
    username: SOCIAL_LINKS.github.username,
    link: SOCIAL_LINKS.github.link,
  },
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.linkedin.name,
    username: SOCIAL_LINKS.linkedin.username,
    link: SOCIAL_LINKS.linkedin.link,
  },
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.reddit.name,
    username: SOCIAL_LINKS.reddit.username,
    link: SOCIAL_LINKS.reddit.link,
  },
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.twitch.name,
    username: SOCIAL_LINKS.twitch.username,
    link: SOCIAL_LINKS.twitch.link,
  },
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.discord.name,
    username: SOCIAL_LINKS.discord.username,
    link: SOCIAL_LINKS.discord.link,
  },
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.mastadon.name,
    username: SOCIAL_LINKS.mastadon.username,
    link: SOCIAL_LINKS.mastadon.link,
  },
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.tiktok.name,
    username: SOCIAL_LINKS.tiktok.username,
    link: SOCIAL_LINKS.tiktok.link,
  },
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.stackoverflow.name,
    username: SOCIAL_LINKS.stackoverflow.username,
    link: SOCIAL_LINKS.stackoverflow.link,
  },
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.youtube.name,
    username: SOCIAL_LINKS.youtube.username,
    link: SOCIAL_LINKS.youtube.link,
  },
  {
    id: generateRandomId(),
    title: SOCIAL_LINKS.threads.name,
    username: SOCIAL_LINKS.threads.username,
    link: SOCIAL_LINKS.threads.link,
  },
];
