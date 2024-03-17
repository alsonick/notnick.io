import { generateRandomId } from "../../generate-random-id";
import { Content } from "../../../types/challenge";
import { social } from "../../social-links";

export const ONE_HUNDRED_DAYS_OF_SWIFT: Content[] = [
  {
    id: generateRandomId(),
    description: "variables, simple data types, and string interpolation",
    slug: "100-days-of-swift",
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
  {
    id: generateRandomId(),
    description: "arrays, dictionaries, sets, and enums",
    slug: "100-days-of-swift",
    completed: true,
    code: {
      icon: "xcode",
      image: {
        extension: "png",
      },
      link: `${social.github.link}/100-days-of-swift/blob/main/Day2/MyPlayground.playground/Contents.swift`,
    },
    preview: {
      available: false,
    },
    day: 2,
  },
  {
    id: generateRandomId(),
    description: "operators and conditions",
    slug: "100-days-of-swift",
    completed: true,
    code: {
      icon: "xcode",
      image: {
        extension: "png",
      },
      link: `${social.github.link}/100-days-of-swift/blob/main/Day3/MyPlayground.playground/Contents.swift`,
    },
    preview: {
      available: false,
    },
    day: 3,
  },
];
