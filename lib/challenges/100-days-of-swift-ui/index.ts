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
  {
    id: generateRandomId(),
    description: "Variables, constants, strings, and numbers",
    slug: "100-days-of-swift-ui",
    completed: true,
    code: {
      icon: "xcode",
      image: {
        extension: "png",
      },
      link: `${social.github.link}/${ONE_HUNDRED_DAYS_OF_SWIFT_UI_SLUG}/blob/main/Day1/MyPlayground.playground/Contents.swift`,
    },
    preview: {
      available: false,
    },
    day: 1,
  },
  {
    id: generateRandomId(),
    description: "Booleans, string interpolation, and checkpoint 1",
    slug: "100-days-of-swift-ui",
    completed: true,
    code: {
      icon: "xcode",
      image: {
        extension: "png",
      },
      link: `${social.github.link}/${ONE_HUNDRED_DAYS_OF_SWIFT_UI_SLUG}/blob/main/Day2/MyPlayground.playground/Contents.swift`,
    },
    preview: {
      available: false,
    },
    day: 2,
  },
  {
    id: generateRandomId(),
    description: "Arrays, dictionaries, sets, and enums",
    slug: "100-days-of-swift-ui",
    completed: true,
    code: {
      icon: "xcode",
      image: {
        extension: "png",
      },
      link: `${social.github.link}/${ONE_HUNDRED_DAYS_OF_SWIFT_UI_SLUG}/blob/main/Day3/MyPlayground.playground/Contents.swift`,
    },
    preview: {
      available: false,
    },
    day: 3,
  },
  {
    id: generateRandomId(),
    description: "Type annotations and checkpoint 2",
    slug: "100-days-of-swift-ui",
    completed: true,
    code: {
      icon: "xcode",
      image: {
        extension: "png",
      },
      link: `${social.github.link}/${ONE_HUNDRED_DAYS_OF_SWIFT_UI_SLUG}/blob/main/Day4/MyPlayground.playground/Contents.swift`,
    },
    preview: {
      available: false,
    },
    day: 4,
  },
];
