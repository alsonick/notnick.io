import { generateRandomId } from "../../generate-random-id";
import { Content } from "../../../types/challenge";

export const WAKING_UP_AT_5_AM: Content[] = [
  {
    id: generateRandomId(),
    description: "No thoughts available.",
    slug: "waking-up-at-5am",
    completed: false,
    preview: {
      available: false,
    },
    day: 1,
  },
];
