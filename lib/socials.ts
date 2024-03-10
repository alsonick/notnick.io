import { generateRandomId } from "./generate-random-id";
import { Social } from "../types/social";
import { social } from "./social-links";

export const SOCIALS: Social[] = [
  {
    id: generateRandomId(),
    title: social.x.name,
    username: social.x.username,
    link: social.x.link,
  },
  {
    id: generateRandomId(),
    title: social.instagram.name,
    username: social.instagram.username,
    link: social.instagram.link,
  },
  {
    id: generateRandomId(),
    title: social.keybase.name,
    username: social.keybase.username,
    link: social.keybase.link,
  },
  {
    id: generateRandomId(),
    title: social.snapchat.name,
    username: social.snapchat.username,
    link: social.snapchat.link,
  },
  {
    id: generateRandomId(),
    title: social.github.name,
    username: social.github.username,
    link: social.github.link,
  },
  {
    id: generateRandomId(),
    title: social.linkedin.name,
    username: social.linkedin.username,
    link: social.linkedin.link,
  },
  {
    id: generateRandomId(),
    title: social.reddit.name,
    username: social.reddit.username,
    link: social.reddit.link,
  },
  {
    id: generateRandomId(),
    title: social.bluesky.name,
    username: social.bluesky.username,
    link: social.bluesky.link,
  },
  {
    id: generateRandomId(),
    title: social.twitch.name,
    username: social.twitch.username,
    link: social.twitch.link,
  },
  {
    id: generateRandomId(),
    title: social.discord.name,
    username: social.discord.username,
    link: social.discord.link,
  },
  {
    id: generateRandomId(),
    title: social.mastadon.name,
    username: social.mastadon.username,
    link: social.mastadon.link,
  },
  {
    id: generateRandomId(),
    title: social.tiktok.name,
    username: social.tiktok.username,
    link: social.tiktok.link,
  },
  {
    id: generateRandomId(),
    title: social.stackoverflow.name,
    username: social.stackoverflow.username,
    link: social.stackoverflow.link,
  },
  {
    id: generateRandomId(),
    title: social.youtube.name,
    username: social.youtube.username,
    link: social.youtube.link,
  },
  {
    id: generateRandomId(),
    title: social.threads.name,
    username: social.threads.username,
    link: social.threads.link,
  },
];
