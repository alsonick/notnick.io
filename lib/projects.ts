import { generateRandomId } from "./generate-random-id";
import { Project } from "../types/project";

export const PROJECTS: Project[] = [
  {
    logo: "/project/branding/lyrics-tags-generator.png",
    name: "Lyrics Tags Generator",
    id: generateRandomId(),
    site: "tags.notnick.io",
    active: true,
    oss: false,
    desc: "A site to generate tags for music videos.",
  },
  {
    logo: "/project/branding/notnick-io.png",
    name: "Personal Site",
    id: generateRandomId(),
    site: "notnick.io",
    active: true,
    oss: true,
    desc: "You're on it now! This is my personal site.",
  },
  {
    logo: "/project/branding/vercel-swag-logo.jpg",
    name: "Vercel Swag",
    id: generateRandomId(),
    site: "vercel-swag.vercel.app",
    active: true,
    oss: true,
    desc: "A gallery collection site of vercel merchandise.",
  },
  {
    logo: "/project/branding/notnick-io.png",
    name: "Personal Gallery Site",
    id: generateRandomId(),
    site: "pics.notnick.io",
    link: "https://pics.notnick.io/",
    github: "https://github.com/alsonick/pics.notnick.io",
    active: true,
    oss: true,
    desc: "Think of it as my own Instagram website.",
  },
  {
    logo: "",
    name: "Lyrics Tags Generator Bot",
    id: generateRandomId(),
    site: "tags.notnick.io",
    link: "https://discord.com/oauth2/authorize?client_id=1338567480834265193&permissions=2147534848&integration_type=0&scope=bot",
    active: true,
    oss: false,
    desc: "Discord bot version of Lyrics Tags Generator.",
  },
];
