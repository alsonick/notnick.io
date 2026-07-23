import {
  CISCO_200_301_SLUG,
  CISCO_200_301_TITLE,
} from "./cisco-200-301/constants";
import { CISCO_200_301_MODULES } from "./cisco-200-301";
import { generateRandomId } from "../generate-random-id";
import { Course } from "../../types/learn";

const CISCO_200_301_LESSONS = CISCO_200_301_MODULES.flatMap(
  (module) => module.lessons,
);
const CISCO_200_301_COMPLETED = CISCO_200_301_LESSONS.filter(
  (lesson) => lesson.completed,
).length;

export const COURSES: Course[] = [
  {
    id: generateRandomId(),
    keys: ["Lesson", "Completed", "What I Learnt"],
    name: CISCO_200_301_TITLE,
    statusKeys: ["Name", "Lessons Completed"],
    modules: CISCO_200_301_MODULES,
    path: `/${CISCO_200_301_SLUG}`,
    slug: CISCO_200_301_SLUG,
    description: "My journey to Cisco 200-301 (CCNA) Certification.",
    usefulLinks: [
      "https://learningnetwork.cisco.com",
      "https://davidbombal.com",
    ],
    completedLessons: CISCO_200_301_COMPLETED,
    completed:
      CISCO_200_301_LESSONS.length > 0 &&
      CISCO_200_301_COMPLETED === CISCO_200_301_LESSONS.length,
    active: CISCO_200_301_LESSONS.length > 0,
  },
];
