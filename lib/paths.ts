import { generateRandomId } from "./generate-random-id";
import { Path } from "../types/path";
import { page } from "./page";

export const PATHS: Path[] = [
  {
    id: generateRandomId(),
    path: page.home.path,
    link: page.home.link,
  },
  {
    id: generateRandomId(),
    path: page.blog.path,
    link: page.blog.link,
  },
  {
    id: generateRandomId(),
    path: page.note.path,
    link: page.note.link,
  },
  {
    id: generateRandomId(),
    path: page.branding.path,
    link: page.branding.link,
  },
  {
    id: generateRandomId(),
    path: page.luffy.path,
    link: page.luffy.link,
  },
  {
    id: generateRandomId(),
    path: page.paths.path,
    link: page.paths.path,
  },
  {
    id: generateRandomId(),
    path: page.components.path,
    link: page.components.link,
  },
  {
    id: generateRandomId(),
    path: page.experience.path,
    link: page.experience.link,
  },
  {
    id: generateRandomId(),
    path: page.license.path,
    link: page.license.link,
  },
  {
    id: generateRandomId(),
    path: page.quote.path,
    link: page.quote.link,
  },
  {
    id: generateRandomId(),
    path: page.socials.path,
    link: page.socials.link,
  },
  {
    id: generateRandomId(),
    path: page.specs.path,
    link: page.specs.link,
  },
  {
    id: generateRandomId(),
    path: page.articles.path,
    link: page.articles.link,
  },
  {
    id: generateRandomId(),
    path: page.credit.path,
    link: page.credit.link,
  },
  {
    id: generateRandomId(),
    path: page.challenge.path,
    link: page.challenge.link,
  },
  {
    id: generateRandomId(),
    path: page.community.rules.path,
    link: page.community.rules.link,
  },
  {
    id: generateRandomId(),
    path: page.ragtime.path,
    link: page.ragtime.link,
  },
  {
    id: generateRandomId(),
    path: page.contributors.path,
    link: page.contributors.link,
  },
  {
    id: generateRandomId(),
    path: page.music.path,
    link: page.music.link,
  },
  {
    id: generateRandomId(),
    path: page.dev.path,
    link: page.dev.link,
  },
];
