import {
  COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_FINISHED,
  COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_SLUG,
  COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_TITLE,
} from "./complete-networking-fundamentals-course-ccna-start/constants";
import { COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_MODULES } from "./complete-networking-fundamentals-course-ccna-start";
import {
  CCNA_COMPLETE_FINISHED,
  CCNA_COMPLETE_SLUG,
  CCNA_COMPLETE_TITLE,
} from "./ccna-complete/constants";
import { CCNA_COMPLETE_MODULES } from "./ccna-complete";
import {
  FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_FINISHED,
  FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_SLUG,
  FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_TITLE,
} from "./free-ccna-v1-1-200-301-complete-course-2026/constants";
import { FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_MODULES } from "./free-ccna-v1-1-200-301-complete-course-2026";
import { generateRandomId } from "../generate-random-id";
import { Course } from "../../types/learn";

const COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_LESSONS =
  COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_MODULES.flatMap(
    (module) => module.lessons,
  );
const COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_COMPLETED =
  COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_LESSONS.filter(
    (lesson) => lesson.completed,
  ).length;

const CCNA_COMPLETE_LESSONS = CCNA_COMPLETE_MODULES.flatMap(
  (module) => module.lessons,
);
const CCNA_COMPLETE_COMPLETED = CCNA_COMPLETE_LESSONS.filter(
  (lesson) => lesson.completed,
).length;

const FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_LESSONS =
  FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_MODULES.flatMap(
    (module) => module.lessons,
  );
const FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_COMPLETED =
  FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_LESSONS.filter(
    (lesson) => lesson.completed,
  ).length;

export const COURSES: Course[] = [
  {
    id: generateRandomId(),
    keys: ["Lesson", "Completed", "What I Learnt"],
    name: COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_TITLE,
    statusKeys: ["Name", "Lessons Completed"],
    modules: COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_MODULES,
    path: `/${COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_SLUG}`,
    slug: COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_SLUG,
    description: "",
    usefulLinks: [
      "https://learningnetwork.cisco.com",
      "https://davidbombal.com",
    ],
    completedLessons:
      COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_COMPLETED,
    completed: COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_FINISHED,
    active:
      COMPLETE_NETWORKING_FUNDAMENTALS_COURSE_CCNA_START_LESSONS.length > 0,
  },
  {
    id: generateRandomId(),
    keys: ["Lesson", "Completed", "What I Learnt"],
    name: CCNA_COMPLETE_TITLE,
    statusKeys: ["Name", "Lessons Completed"],
    modules: CCNA_COMPLETE_MODULES,
    path: `/${CCNA_COMPLETE_SLUG}`,
    slug: CCNA_COMPLETE_SLUG,
    description: "",
    usefulLinks: ["https://www.flackbox.com/"],
    completedLessons: CCNA_COMPLETE_COMPLETED,
    completed: CCNA_COMPLETE_FINISHED,
    active: CCNA_COMPLETE_LESSONS.length > 0,
  },
  {
    id: generateRandomId(),
    keys: ["Lesson", "Completed", "What I Learnt"],
    name: FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_TITLE,
    statusKeys: ["Name", "Lessons Completed"],
    modules: FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_MODULES,
    path: `/${FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_SLUG}`,
    slug: FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_SLUG,
    description: "",
    usefulLinks: ["https://jeremysitlab.com"],
    completedLessons: FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_COMPLETED,
    completed: FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_FINISHED,
    active: FREE_CCNA_V1_1_200_301_COMPLETE_COURSE_2026_LESSONS.length > 0,
  },
];
