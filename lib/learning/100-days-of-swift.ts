import { Topic } from "../../types/topic";

export const ONE_HUNDRED_DAYS_OF_SWIFT: Topic = {
  id: 1,
  cover: "/learn/cover/100-days-of-swift.png",
  language: "100 Days of Swift",
  description:
    "This is the complete documentation of my journey in taking the #100DaysOfSwift challenge. I'm also hosting all the code on GitHub so be sure to check that out!",
  learn: [
    {
      id: 1,
      name: "100 Days of Swift - Day 1",
      learned: [
        {
          id: 1,
          title: "Variables",
          points: [
            {
              id: 1,
              text: "Learned about how variables work in the Swift Programming Language.",
            },
            {
              id: 2,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 2,
          title: "Strings and integers",
          points: [
            {
              id: 1,
              text: "Covered the String and Int data types.",
            },
            {
              id: 2,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 3,
          title: "Multi-line strings",
          points: [
            {
              id: 1,
              text: "In Swift you can create multi-line strings using the triple quotes syntax.",
            },
            {
              id: 2,
              text: "The triple quotes must start and end on a new line.",
            },
            {
              id: 3,
              text: "If you don't want the new line break in your multi-line string then add a backslash on the end of each line.",
            },
            {
              id: 4,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 4,
          title: "Doubles and booleans",
          points: [
            {
              id: 1,
              text: "Covered the Double and Bool (Boolean) data types.",
            },
            {
              id: 2,
              text: "Doubles are numbers with decimal points.",
            },
            {
              id: 3,
              text: "Booleans are simply true or false.",
            },
            {
              id: 4,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 5,
          title: "String interpolation",
          points: [
            {
              id: 1,
              text: "Covered how to use string interpolation work in Swift.",
            },
            {
              id: 2,
              text: "The () is the syntax for string interpolation.",
            },
            {
              id: 3,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 6,
          title: "Constants",
          points: [
            {
              id: 1,
              text: "In Swift you can declare a constant using the let keyword.",
            },
            {
              id: 2,
              text: "You can't change the value with constants.",
            },
            {
              id: 3,
              text: "It's best practice to always use constants unless you don't need to.",
            },
            {
              id: 4,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 7,
          title: "Type annotations",
          points: [
            {
              id: 1,
              text: "In Swift you can mark your variables or constants with type annotations.",
            },
            {
              id: 2,
              text: "By default Swift uses type inference to infer the data type of variables and constants.",
            },
            {
              id: 3,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 8,
          title: "Simple types: Summary",
          points: [
            {
              id: 1,
              text: "Results: 6/6",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/1",
    },
  ],
};

let condition = false;

if (!condition) {
}
