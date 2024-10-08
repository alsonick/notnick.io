import { ONE_HUNDRED_DAYS_OF_SWIFT_UI_SLUG } from "./constants";
import { generateRandomId } from "../../generate-random-id";
import { Content } from "../../../types/challenge";
import { social } from "../../social-links";

export const ONE_HUNDRED_DAYS_OF_SWIFT_UI: Content[] = [
  {
    id: generateRandomId(),
    description: "tips and advice before you start",
    slug: "100-days-of-swift-ui",
    completed: true,
    preview: {
      available: false,
    },
    day: 0,
  },
];
