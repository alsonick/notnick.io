import { generateRandomId } from "./generate-random-id";
import { Technologies } from "../types/technologies";

export const TECHNOLOGIES: Technologies[] = [
  {
    id: generateRandomId(),
    text: "React.js",
    link: "https://reactjs.org/",
    desc: "A JavaScript library for building user interfaces.",
  },
  {
    id: generateRandomId(),
    text: "TypeScript",
    link: "https://www.typescriptlang.org/",
    desc: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  },
  {
    id: generateRandomId(),
    text: "styled-components",
    link: "https://styled-components.com/",
    desc: "A library for React and React Native that allows you to use component-level styles in your application.",
  },
  {
    id: generateRandomId(),
    text: "TailwindCSS",
    link: "https://tailwindcss.com/",
    desc: "An open source CSS framework.",
  },
  {
    id: generateRandomId(),
    text: "Git",
    link: "https://git-scm.com/",
    desc: "An open source software for distributed version control.",
  },
  {
    id: generateRandomId(),
    text: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
    desc: "An a source-code editor made by Microsoft for Windows, Linux and macOS.",
  },
  {
    id: generateRandomId(),
    text: "Node.js",
    link: "https://nodejs.org/en/",
    desc: "A JavaScript runtime environment built on top of the v8 engine.",
  },
  {
    id: generateRandomId(),
    text: "Next.js",
    link: "https://nextjs.org/",
    desc: "A React framework that gives you building blocks to create web applications.",
  },
  {
    id: generateRandomId(),
    text: "Postgres",
    link: "https://www.postgresql.org/",
    desc: "An open source object-relational database system that uses and extends the SQL language.",
  },
  {
    id: generateRandomId(),
    text: "Yarn",
    link: "https://yarnpkg.com/",
    desc: "A package manager developed by Facebook for the Node.js JavaScript runtime environment.",
  },
  {
    id: generateRandomId(),
    text: "npm",
    link: "https://www.npmjs.com/",
    desc: "A package manager for the JavaScript programming language.",
  },
  {
    id: generateRandomId(),
    text: "Express",
    link: "https://expressjs.com/",
    desc: "A framework that runs within Node.js that allows developers to create backend services.",
  },
  {
    id: generateRandomId(),
    text: "JavaScript",
    link: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
    desc: "A programming language for the web.",
  },
  {
    id: generateRandomId(),
    text: "Java",
    link: "https://www.java.com/en/",
    desc: "Java is a high-level, class-based, object-oriented programming language.",
  },
];
