import { generateRandomId } from "./generate-random-id";
import { DISCORD_ID } from "./constants";
import { Social } from "../types/social";

export const SOCIALS: Social[] = [
  {
    id: generateRandomId(),
    title: "X (Previously Twitter)",
    username: "@heynickn",
    link: "https://twitter.com/heynickn",
  },
  {
    id: generateRandomId(),
    title: "Instagram",
    username: "heynickn",
    link: "https://www.instagram.com/heynickn/",
  },
  {
    id: generateRandomId(),
    title: "Snapchat",
    username: "notnick14",
    link: "https://www.snapchat.com/add/notnick14",
  },
  {
    id: generateRandomId(),
    title: "LinkedIn",
    username: "nicholas-n-5a9187195",
    link: "https://www.linkedin.com/in/nicholas-n-5a9187195/",
  },
  {
    id: generateRandomId(),
    title: "Reddit",
    username: "thisnotnicholas",
    link: "https://www.reddit.com/user/thisnotnicholas",
  },
  {
    id: generateRandomId(),
    title: "Twitch",
    username: "alsonick_",
    link: "https://www.twitch.tv/alsonick_",
  },
  {
    id: generateRandomId(),
    title: "Discord",
    username: "alsonick_",
    link: `https://discord.com/users/${DISCORD_ID}`,
  },
  {
    id: generateRandomId(),
    title: "Mastadon",
    username: "@alsonick@phpc.social",
    link: "https://phpc.social/@alsonick",
  },
  {
    id: generateRandomId(),
    title: "TikTok",
    username: "heynick010",
    link: "https://www.tiktok.com/@heynick010",
  },
  {
    id: generateRandomId(),
    title: "Stackoverflow",
    username: "user:17204801",
    link: "https://stackoverflow.com/users/17204801/nicholas",
  },
  {
    id: generateRandomId(),
    title: "YouTube",
    username: "@alsonick",
    link: "https://www.youtube.com/@alsonick",
  },
  {
    id: generateRandomId(),
    title: "Threads",
    username: "@heynickn",
    link: "https://threads.net/@heynickn",
  },
];
