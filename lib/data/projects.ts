import { generateRandomId } from "../utils/generate-random-id";
import { Project } from "../../types/project";
import { AVATAR, AVATAR_FILE_EXTENSION, CDN } from "../constants";

export const PROJECTS: Project[] = [
  {
    logo: "/project/branding/lrc-generator.png",
    name: "LRC Generator",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "shadcn/ui"],
    id: generateRandomId(),
    site: "lrc.notnick.io",
    kind: "website",
    link: "https://lrc.notnick.io/",
    github: "https://github.com/alsonick/lrc.notnick.io",
    active: true,
    oss: true,
    desc: [
      "A browser-based tool for creating synced, timestamped lyric files in the LRC format.",
      "Lets you sync each line to the song in real time with a single key press.",
    ],
  },
  {
    logo: "/project/branding/lyrics-tags-generator.png",
    name: "Lyrics Tags Generator",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Gemini API"],
    id: generateRandomId(),
    site: "tags.notnick.io",
    kind: "website",
    link: "https://tags.notnick.io/",
    github: "https://github.com/alsonick/tags.notnick.io",
    active: true,
    oss: true,
    desc: [
      "Generates SEO-friendly YouTube metadata for lyric videos, including tags, titles, hashtags, and keywords.",
      "Comes with a free, documented public API that returns the same metadata for you to use in your own apps.",
    ],
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
    desc: [
      "A free iPhone app for setting a daily step goal and sticking to it, with only one goal change allowed per day.",
      "Shows trends for steps, distance, and calories, along with every goal you've hit.",
    ],
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
    desc: [
      "The site you're on right now, where I share my projects, experience, and writing.",
      "Designed and built from scratch, with a focus on accessibility.",
    ],
  },
];
