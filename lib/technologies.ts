import { generateRandomId } from "./generate-random-id";
import { Technologies } from "../types/technologies";

export const TECHNOLOGIES: Technologies[] = [
  {
    id: generateRandomId(),
    text: "React.js",
    link: "https://reactjs.org/",
  },
  {
    id: generateRandomId(),
    text: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: generateRandomId(),
    text: "styled-components",
    link: "https://styled-components.com/",
  },
  {
    id: generateRandomId(),
    text: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },
  {
    id: generateRandomId(),
    text: "Git",
    link: "https://git-scm.com/",
  },
  {
    id: generateRandomId(),
    text: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
  },
  {
    id: generateRandomId(),
    text: "Node.js",
    link: "https://nodejs.org/en/",
  },
  {
    id: generateRandomId(),
    text: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    id: generateRandomId(),
    text: "Postgres",
    link: "https://www.postgresql.org/",
  },
  {
    id: generateRandomId(),
    text: "Yarn",
    link: "https://yarnpkg.com/",
  },
  {
    id: generateRandomId(),
    text: "npm",
    link: "https://www.npmjs.com/",
  },
  {
    id: generateRandomId(),
    text: "Express",
    link: "https://expressjs.com/",
  },
  {
    id: generateRandomId(),
    text: "Java",
    link: "https://www.java.com/en/",
  },
  {
    id: generateRandomId(),
    text: "Python",
    link: "https://www.python.org/",
  },
];
