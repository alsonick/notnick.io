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
    description:
      "Tracking my progress through this course as I learn networking fundamentals and work towards the CCNA certification. By the end of this course, I will have a solid understanding of networking concepts and be well-prepared for the CCNA exam.",
    usefulLinks: ["https://learningnetwork.cisco.com"],
    completedLessons: CISCO_200_301_COMPLETED,
    completed:
      CISCO_200_301_LESSONS.length > 0 &&
      CISCO_200_301_COMPLETED === CISCO_200_301_LESSONS.length,
    active: CISCO_200_301_LESSONS.length > 0,
  },
];
