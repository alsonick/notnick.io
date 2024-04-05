import { generateRandomId } from "../../generate-random-id";
import { Content } from "../../../types/challenge";

export const WALKING_FOR_100_DAYS: Content[] = [
  {
    id: generateRandomId(),
    description: "No thoughts available.",
    slug: "walking-for-100-days",
    completed: false,
    preview: {
      available: false,
    },
    day: 1,
  },
];
