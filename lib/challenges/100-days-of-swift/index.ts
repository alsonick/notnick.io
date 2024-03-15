import { generateRandomId } from "../../generate-random-id";
import { Content } from "../../../types/challenge";
import { social } from "../../social-links";

export const ONE_HUNDRED_DAYS_OF_SWIFT: Content[] = [
  {
    id: generateRandomId(),
    description: "variables, simple data types, and string interpolation",
    previewPath: "",
    slug: "pog",
    completed: true,
    code: {
      icon: "xcode",
      image: {
        extension: "png",
      },
      link: `${social.github.link}/100-days-of-swift/blob/main/Day1/MyPlayground.playground/Contents.swift`,
    },
    preview: {
      available: false,
    },
    day: 1,
  },
];
