import { ONE_HUNDRED_DAYS_OF_SWIFT } from "./100-days-of-swift";
import { generateRandomId } from "../generate-random-id";
import { Challenge } from "../../types/challenge";

export const CHALLENGES: Challenge[] = [
  {
    id: generateRandomId(),
    name: "100 Days of Swift (HackingWithSwift)",
    content: ONE_HUNDRED_DAYS_OF_SWIFT,
    path: "/100-days-of-swift",
    slug: "100-days-of-swift",
    description: "dkfjkggj",
    completedDays: 0,
    daysLeft: 100,
    goal: 100,
  },
];
