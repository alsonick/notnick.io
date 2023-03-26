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
    {
      id: 2,
      name: "100 Days of Swift - Day 2",
      learned: [
        {
          id: 1,
          title: "Arrays",
          points: [
            {
              id: 1,
              text: "Learned about Arrays in Swift.",
            },
            {
              id: 2,
              text: "To access an element in an array you must use the square bracket syntax.",
            },
            {
              id: 3,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 2,
          title: "Sets",
          points: [
            {
              id: 1,
              text: "To create a set you must pass in an array.",
            },
            {
              id: 2,
              text: "Sets can't have duplicates.",
            },
            {
              id: 3,
              text: "You can't access elements inside a set with the square bracket syntax.",
            },
            {
              id: 4,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 3,
          title: "Tuples",
          points: [
            {
              id: 1,
              text: "You can't add or remove items in a tuple.",
            },
            {
              id: 2,
              text: "Tuples always have a fixed size.",
            },
            {
              id: 3,
              text: "You can access elements in a tuple using numerical positions or by using their name.",
            },
            {
              id: 4,
              text: "Once a tuple is created, you can change the values but not the types.",
            },
            {
              id: 5,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 4,
          title: "Arrays vs sets vs tuples",
          points: [
            {
              id: 1,
              text: "If you need a fixed collection of related values then you should use a tuple.",
            },
            {
              id: 2,
              text: "If you need a collection of unique values or if you need to a find a specific item quickly then you should use a set.",
            },
            {
              id: 3,
              text: "If you need a collection that can contain duplicates then you should use an array.",
            },
            {
              id: 4,
              text: "Arrays are the most commonly used.",
            },
            {
              id: 5,
              text: "Results: 4/6",
            },
          ],
        },
        {
          id: 5,
          title: "Dictionaries",
          points: [
            {
              id: 1,
              text: "Dictionaries are also collections like arrays.",
            },
            {
              id: 2,
              text: "Each item in a dictionary is separated by a comma.",
            },
            {
              id: 3,
              text: "Dictionaries are written in brackets with a colon between your identifier and value.",
            },
            {
              id: 4,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 6,
          title: "Dictionary default values",
          points: [
            {
              id: 1,
              text: "If you try to access a value from a dictionary that doesn't exist, Swift will return nil.",
            },
            {
              id: 2,
              text: "You can add a default value whenever try to access a value from a dictionary.",
            },
            {
              id: 3,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 7,
          title: "Creating empty collections",
          points: [
            {
              id: 1,
              text: "To create an empty collection just write its type followed by opening and closing parentheses.",
            },
            {
              id: 2,
              text: "The exception is creating an empty set, which is done like this: var words = Set<String>().",
            },
            {
              id: 3,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 8,
          title: "Enumerations",
          points: [
            {
              id: 1,
              text: "Enums are a way of defining groups of related values together.",
            },
            {
              id: 2,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 9,
          title: "Enum associated values",
          points: [
            {
              id: 1,
              text: "Enums can also store associated values attached to each case.",
            },
            {
              id: 2,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 10,
          title: "Enum raw values",
          points: [
            {
              id: 1,
              text: "Swift automatically assigns each case with a number starting with 0.",
            },
            {
              id: 2,
              text: "You can assign a case a specific value.",
            },
            {
              id: 3,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 11,
          title: "Complex types: Summary",
          points: [
            {
              id: 1,
              text: "Results: 5/6",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/2",
    },
    {
      id: 3,
      name: "100 Days of Swift - Day 3",
      learned: [
        {
          id: 1,
          title: "Arithmetic operators",
          points: [
            {
              id: 1,
              text: "Covered all the arithmetic operators in Swift.",
            },
            {
              id: 2,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 2,
          title: "Operator overloading",
          points: [
            {
              id: 1,
              text: "Swift supports operator overloading.",
            },
            {
              id: 2,
              text: "You can't mix types in Swift.",
            },
            {
              id: 3,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 3,
          title: "Compound assignment operators",
          points: [
            {
              id: 1,
              text: "Swift has shorthand operators that combine one operator with an assignment.",
            },
            {
              id: 2,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 4,
          title: "Comparison operators",
          points: [
            {
              id: 1,
              text: "Just like in mathematics Swift also several operators.",
            },
            {
              id: 2,
              text: "You can use comparison operators on strings since they have a natural alphabetical order.",
            },
            {
              id: 3,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 5,
          title: "Conditions",
          points: [
            {
              id: 1,
              text: "In Swift you can use an if statement to evaluate conditions.",
            },
            {
              id: 2,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 6,
          title: "Combining conditions",
          points: [
            {
              id: 1,
              text: "You can the && (and) and || (or) operators to combine conditions.",
            },
            {
              id: 2,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 7,
          title: "The ternary operator",
          points: [
            {
              id: 1,
              text: "Just like in JavaScript, Swift also has the ternary operator.",
            },
            {
              id: 2,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 8,
          title: "Switch statements",
          points: [
            {
              id: 1,
              text: "You can use switch statements in Swift.",
            },
            {
              id: 2,
              text: "The default case is required because you need to make sure you cover all possible cases.",
            },
            {
              id: 3,
              text: "If your want execution to continue on the next case, use the fallthrough keyword.",
            },
            {
              id: 4,
              text: "Results: 5/6",
            },
          ],
        },
        {
          id: 9,
          title: "Range operators",
          points: [
            {
              id: 1,
              text: "You can use the range operator in Swift.",
            },
            {
              id: 2,
              text: "The half-open range operator ..< creates ranges up to but excluding the final value.",
            },
            {
              id: 3,
              text: "The closed range operator ... creates ranges up and including the final value.",
            },
            {
              id: 4,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 10,
          title: "Operators and conditions: Summary",
          points: [
            {
              id: 1,
              text: "Results: 12/12",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/3",
    },
  ],
};
