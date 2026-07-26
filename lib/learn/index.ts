import {
  CISCO_200_301_SLUG,
  CISCO_200_301_TITLE,
} from "./cisco-200-301/constants";
import { CISCO_200_301_MODULES } from "./cisco-200-301";
import {
  CISCO_CCNA_200_301_GUIDE_SLUG,
  CISCO_CCNA_200_301_GUIDE_TITLE,
} from "./cisco-ccna-200-301-complete-guide/constants";
import { CISCO_CCNA_200_301_GUIDE_MODULES } from "./cisco-ccna-200-301-complete-guide";
import { generateRandomId } from "../generate-random-id";
import { Course } from "../../types/learn";

const CISCO_200_301_LESSONS = CISCO_200_301_MODULES.flatMap(
  (module) => module.lessons,
);
const CISCO_200_301_COMPLETED = CISCO_200_301_LESSONS.filter(
  (lesson) => lesson.completed,
).length;

const CISCO_CCNA_200_301_GUIDE_LESSONS =
  CISCO_CCNA_200_301_GUIDE_MODULES.flatMap((module) => module.lessons);
const CISCO_CCNA_200_301_GUIDE_COMPLETED =
  CISCO_CCNA_200_301_GUIDE_LESSONS.filter((lesson) => lesson.completed).length;

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
  {
    id: generateRandomId(),
    keys: ["Lesson", "Completed", "What I Learnt"],
    name: CISCO_CCNA_200_301_GUIDE_TITLE,
    statusKeys: ["Name", "Lessons Completed"],
    modules: CISCO_CCNA_200_301_GUIDE_MODULES,
    path: `/${CISCO_CCNA_200_301_GUIDE_SLUG}`,
    slug: CISCO_CCNA_200_301_GUIDE_SLUG,
    description:
      "Cisco CCNA 200-301 – The Complete Guide to Getting Certified.",
    usefulLinks: ["https://www.flackbox.com/"],
    completedLessons: CISCO_CCNA_200_301_GUIDE_COMPLETED,
    completed:
      CISCO_CCNA_200_301_GUIDE_LESSONS.length > 0 &&
      CISCO_CCNA_200_301_GUIDE_COMPLETED ===
        CISCO_CCNA_200_301_GUIDE_LESSONS.length,
    active: CISCO_CCNA_200_301_GUIDE_LESSONS.length > 0,
  },
];
