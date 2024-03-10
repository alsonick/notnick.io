import { generateRandomId } from "./generate-random-id";

export const CHALLENGE_KEYS = [
  { id: generateRandomId(), text: "Day" },
  { id: generateRandomId(), text: "Topic" },
  { id: generateRandomId(), text: "Completed" },
  { id: generateRandomId(), text: "Preview" },
];
