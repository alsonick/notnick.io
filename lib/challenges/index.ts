import { ONE_HUNDRED_DAYS_OF_SWIFT } from "./100-days-of-swift";
import { generateRandomId } from "../generate-random-id";
import { Challenge } from "../../types/challenge";
import { social } from "../social-links";

export const CHALLENGES: Challenge[] = [
  {
    id: generateRandomId(),
    name: "100 Days of Swift (HackingWithSwift)",
    content: ONE_HUNDRED_DAYS_OF_SWIFT,
    path: "/100-days-of-swift",
    slug: "100-days-of-swift",
    description:
      "This repository is a collection of all the projects and solutions from Paul Hudson's 100 days of swift challenge.",
    usefulLinks: [
      `${social.github.link}/100-days-of-swift`,
      "https://developer.apple.com/documentation",
      "https://www.hackingwithswift.com/100",
      "https://www.swift.org",
    ],
    completedDays: 3,
    note: "I won't complete any challenges that involve game development as I don't have any interest in that sector of iOS development.",
    daysLeft: 97,
    goal: 100,
  },
];
