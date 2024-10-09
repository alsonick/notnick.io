import {
  ONE_HUNDRED_DAYS_OF_SWIFT_GOAL,
  ONE_HUNDRED_DAYS_OF_SWIFT_SLUG,
} from "./100-days-of-swift/constants";
import { ONE_HUNDRED_DAYS_OF_SWIFT } from "./100-days-of-swift";
import {
  ONE_HUNDRED_DAYS_OF_SWIFT_UI_GOAL,
  ONE_HUNDRED_DAYS_OF_SWIFT_UI_SLUG,
} from "./100-days-of-swift-ui/constants";
import { ONE_HUNDRED_DAYS_OF_SWIFT_UI } from "./100-days-of-swift-ui";

import { generateRandomId } from "../generate-random-id";
import { Challenge } from "../../types/challenge";
import { social } from "../social-links";

export const CHALLENGES: Challenge[] = [
  {
    id: generateRandomId(),
    keys: ["Day", "Topic", "Completed", "Preview"],
    name: "100 Days of Swift (HackingWithSwift)",
    statusKeys: ["Name", "Days Completed", "Days Left", "Goal"],
    content: ONE_HUNDRED_DAYS_OF_SWIFT,
    path: `/${ONE_HUNDRED_DAYS_OF_SWIFT_SLUG}`,
    slug: ONE_HUNDRED_DAYS_OF_SWIFT_SLUG,
    description:
      "This repository is a collection of all the projects and solutions from Paul Hudson's 100 days of Swift challenge.",
    usefulLinks: [
      `${social.github.link}/${ONE_HUNDRED_DAYS_OF_SWIFT_SLUG}`,
      "https://developer.apple.com/documentation",
      "https://www.hackingwithswift.com/100",
      "https://www.swift.org",
    ],
    completedDays: ONE_HUNDRED_DAYS_OF_SWIFT.length,
    note: "I won't complete any challenges that involve game development as I don't have any interest in that sector of iOS development.",
    daysLeft: ONE_HUNDRED_DAYS_OF_SWIFT_GOAL - ONE_HUNDRED_DAYS_OF_SWIFT.length,
    completed:
      ONE_HUNDRED_DAYS_OF_SWIFT.length === ONE_HUNDRED_DAYS_OF_SWIFT_GOAL,
    toggle: {
      text: "Download preview toggle?",
      value: true,
    },
    active: ONE_HUNDRED_DAYS_OF_SWIFT.length > 1,
    goal: ONE_HUNDRED_DAYS_OF_SWIFT_GOAL,
  },
  {
    id: generateRandomId(),
    keys: ["Day", "Topic", "Completed", "Preview"],
    name: "100 Days of SwiftUI (HackingWithSwift)",
    statusKeys: ["Name", "Days Completed", "Days Left", "Goal"],
    content: ONE_HUNDRED_DAYS_OF_SWIFT_UI,
    path: `/${ONE_HUNDRED_DAYS_OF_SWIFT_UI_SLUG}`,
    slug: ONE_HUNDRED_DAYS_OF_SWIFT_UI_SLUG,
    description:
      "This repository is a collection of all the projects and solutions from Paul Hudson's 100 days of SwiftUI challenge.",
    usefulLinks: [
      `${social.github.link}/${ONE_HUNDRED_DAYS_OF_SWIFT_UI_SLUG}`,
      "https://developer.apple.com/xcode/swiftui/",
      "https://www.hackingwithswift.com/100/swiftui",
      "https://www.swift.org",
    ],
    completedDays: ONE_HUNDRED_DAYS_OF_SWIFT_UI.length - 1,
    daysLeft:
      ONE_HUNDRED_DAYS_OF_SWIFT_UI_GOAL -
      ONE_HUNDRED_DAYS_OF_SWIFT_UI.length +
      1,
    completed:
      ONE_HUNDRED_DAYS_OF_SWIFT_UI.length === ONE_HUNDRED_DAYS_OF_SWIFT_UI_GOAL,
    toggle: {
      text: "Download preview toggle?",
      value: true,
    },
    active: ONE_HUNDRED_DAYS_OF_SWIFT_UI.length > 1,
    goal: ONE_HUNDRED_DAYS_OF_SWIFT_UI_GOAL,
  },
];
