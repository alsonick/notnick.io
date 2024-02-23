import { generateRandomId } from "./generate-random-id";
import { Nav } from "../types/nav";
import { page } from "./page";

export const ITEMS: Nav[] = [
  { id: generateRandomId(), text: "/", to: page.home.link, dropdown: "Home" },
  {
    id: generateRandomId(),
    text: "exp",
    to: page.experience.link,
    dropdown: "Experience",
  },
  {
    id: generateRandomId(),
    text: "note",
    to: page.note.link,
    dropdown: "Note",
  },
  {
    id: generateRandomId(),
    text: "blog",
    to: page.blog.link,
    dropdown: "Blog",
  },
];
