import { generateRandomId } from "../../generate-random-id";
import { Module } from "../../../types/learn";

export const CISCO_200_301_MODULES: Module[] = [
  {
    id: generateRandomId(),
    name: "Welcome",
    lessons: [
      {
        id: generateRandomId(),
        title: "Welcome to the course",
        completed: true,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "Network Basics: What is a Network?",
        completed: false,
        learnt: "",
      },
    ],
  },
];
