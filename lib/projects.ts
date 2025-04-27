import { Project } from "../types/project";
import { generateRandomId } from "./generate-random-id";

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
];
