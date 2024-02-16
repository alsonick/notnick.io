import { generateRandomId } from "../../generate-random-id";
import { Content } from "../../../types/challenge";

export const ONE_HUNDRED_DAYS_OF_SWIFT: Content[][] = [
  [
    {
      id: generateRandomId(),
      description: "variables, simple data types, and string interpolation",
      slug: "100-days-of-swift",
      previewPath: "",
      completed: false,
      preview: {
        available: false,
      },
      day: 1,
    },
  ],
];
