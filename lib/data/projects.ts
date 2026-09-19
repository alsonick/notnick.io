import { generateRandomId } from "../utils/generate-random-id";
import { Project } from "../../types/project";
import { AVATAR, AVATAR_FILE_EXTENSION, CDN } from "../constants";

export const PROJECTS: Project[] = [
  {
    logo: "/project/branding/lyrics-tags-generator.png",
    name: "Lyrics Tags Generator",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    id: generateRandomId(),
    site: "tags.notnick.io",
    kind: "website",
    link: "https://tags.notnick.io/",
    github: "https://github.com/alsonick/tags.notnick.io",
    active: true,
    oss: true,
    desc: "A YouTube utility metadata generator service that builds clean, formatted metadata for your lyric videos in seconds.",
  },
  {
    logo: "/project/branding/daily-walks.png",
    name: "DailyWalks",
    // TODO: closed source, so the stack could not be verified - fill this in.
    tech: ["Swift", "SwiftUI", "SwiftData", "HealthKit"],
    id: generateRandomId(),
    site: "dailywalks.notnick.io",
    kind: "app",
    active: true,
    oss: false,
    desc: "A simple healthcare app to track your daily walks, log your progress over time, and stay motivated to keep moving every day.",
  },
  {
    logo: `${CDN}/branding/${AVATAR}.${AVATAR_FILE_EXTENSION}`,
    name: "notnick.io",
    tech: ["TypeScript", "Next.js", "TailwindCSS", "Prisma"],
    id: generateRandomId(),
    site: "notnick.io",
    kind: "website",
    link: "https://notnick.io",
    github: "https://github.com/alsonick/notnick.io",
    active: true,
    oss: true,
    desc: "You're currently on it right now! This is my own personal site where I share my projects, writing, and a little about who I am.",
  },
  {
    logo: `${CDN}/branding/${AVATAR}.${AVATAR_FILE_EXTENSION}`,
    name: "pics.notnick.io",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    id: generateRandomId(),
    site: "pics.notnick.io",
    kind: "website",
    link: "https://pics.notnick.io/",
    github: "https://github.com/alsonick/pics.notnick.io",
    active: true,
    oss: true,
    desc: "A personal photo gallery to showcase my pictures, collecting my favourite shots and moments in one clean, simple space.",
  },
];
