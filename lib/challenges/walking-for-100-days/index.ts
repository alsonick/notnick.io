import { generateRandomId } from "../../generate-random-id";
import { Content } from "../../../types/challenge";

export const WALKING_FOR_100_DAYS: Content[] = [
  {
    id: generateRandomId(),
    description:
      "I feel quite tied but great nevertheless. My mind definitely feels much better as I was able detox my mind from any stress I was feeling. Can't wait for my walk tomorrow!",
    slug: "walking-for-100-days",
    completed: true,
    preview: {
      available: true,
      previewContent: {
        path: "Day",
        extension: "jpeg",
      },
    },
    day: 1,
  },
  {
    id: generateRandomId(),
    description:
      "Less steps but I was able to get out the house to for a little walk.",
    slug: "walking-for-100-days",
    completed: true,
    preview: {
      available: true,
      previewContent: {
        path: "Day",
        extension: "jpeg",
      },
    },
    day: 2,
  },
];
