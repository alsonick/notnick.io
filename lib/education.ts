import { generateRandomId } from "./generate-random-id";
import { Education } from "../types/education";

export const EDUCATION: Education[] = [
  {
    id: generateRandomId(),
    logo: "/education/university-of-kent-logo.gif",
    course: "Software Engineering",
    link: "https://www.kent.ac.uk",
    name: "University of Kent",
    graduated: false,
    degree: "BSc",
    finish: 2027,
    start: 2024,
  },
  {
    id: generateRandomId(),
    logo: "/education/east-sussex-college-logo.jpg",
    course: "Information Technology",
    link: "https://www.escg.ac.uk",
    name: "East Sussex College",
    graduated: true,
    degree: "BTEC",
    finish: 2021,
    start: 2019,
  },
];
