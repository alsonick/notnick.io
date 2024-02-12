import { generateRandomId } from "../generate-random-id";
import { Challenge } from "../../types/challenge";

export const CHALLENGES: Challenge[] = [
  {
    id: generateRandomId(),
    name: "100 Days of Swift (HackingWithSwift)",
    path: "/100-days-of-swift",
    slug: "100-days-of-swift",
    description: "dkfjkggj",
    content: [],
  },
];
