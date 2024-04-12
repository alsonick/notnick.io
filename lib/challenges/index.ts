import { ONE_HUNDRED_DAYS_OF_SWIFT } from "./100-days-of-swift";
import { WALKING_FOR_100_DAYS } from "./walking-for-100-days";
import { generateRandomId } from "../generate-random-id";
import { WAKING_UP_AT_5_AM } from "./waking-up-at-5am";
import { Challenge } from "../../types/challenge";
import { social } from "../social-links";

export const CHALLENGES: Challenge[] = [
  {
    id: generateRandomId(),
    keys: ["Day", "Topic", "Completed", "Preview"],
    name: "100 Days of Swift (HackingWithSwift)",
    statusKeys: ["Name", "Days Completed", "Days Left", "Goal"],
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
    completedDays: ONE_HUNDRED_DAYS_OF_SWIFT.length,
    note: "I won't complete any challenges that involve game development as I don't have any interest in that sector of iOS development.",
    daysLeft: 100 - ONE_HUNDRED_DAYS_OF_SWIFT.length,
    completed: false,
    active: true,
    goal: 100,
  },
  {
    id: generateRandomId(),
    keys: ["Day", "Thoughts", "Completed", "Proof"],
    name: "Walking for 100 Days",
    statusKeys: ["Title", "Days Completed", "Days Left", "Goal"],
    content: WALKING_FOR_100_DAYS,
    path: "/walking-for-100-days",
    slug: "walking-for-100-days",
    description: "Lately I've not been active so it's time to change that.",
    completedDays: WALKING_FOR_100_DAYS.length,
    daysLeft: 100 - WALKING_FOR_100_DAYS.length,
    completed: false,
    active: true,
    goal: 100,
  },
  {
    id: generateRandomId(),
    keys: ["Day", "Thoughts", "Completed", "Proof"],
    name: "Waking up at 5AM for 30 days",
    statusKeys: ["Title", "Days Completed", "Days Left", "Goal"],
    content: WAKING_UP_AT_5_AM,
    path: "/waking-up-at-5am",
    slug: "waking-up-at-5am",
    description: "Waking up at 5AM to make this a daily habit in my life.",
    usefulLinks: [
      "https://medium.com/mind-cafe/10-reasons-you-should-wake-up-at-5am-for-30-days-straight-6cb052ae54b9",
      "https://www.youtube.com/watch?v=4fsgqnat758",
    ],
    completedDays: WAKING_UP_AT_5_AM.length,
    note: "And yes, I'm actually waking up at 5AM instead of waking up and taking a screenshot on my phone lol.",
    daysLeft: 30 - WAKING_UP_AT_5_AM.length,
    completed: false,
    active: false,
    goal: 30,
  },
];
