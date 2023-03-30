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
    {
      id: 4,
      name: "100 Days of Swift - Day 4",
      learned: [
        {
          id: 1,
          title: "For loops",
          points: [
            {
              id: 1,
              text: "The most common loop in Swift is the for loop.",
            },
            {
              id: 2,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 2,
          title: "While loops",
          points: [
            {
              id: 1,
              text: "Swift also has a while loop.",
            },
            {
              id: 2,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 3,
          title: "Repeat loops",
          points: [
            {
              id: 1,
              text: "There's also a repeat loop which is identical to a while loop except the condition to check comes at the end.",
            },
            {
              id: 2,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 4,
          title: "Exiting loops",
          points: [
            {
              id: 1,
              text: "To exit a loop you must use the break keyword.",
            },
            {
              id: 2,
              text: "Results: 7/12",
            },
          ],
        },
        {
          id: 5,
          title: "Exiting multiple loops",
          points: [
            {
              id: 1,
              text: "A loop inside a loop is called a nested loop.",
            },
            {
              id: 2,
              text: "It's common to want to break out of both the inner loop and the outer loop.",
            },
            {
              id: 3,
              text: "To exit part-way through a loop you need to give the outside loop a label then use break [OUTER LOOP LABEL] to exit both loops at the same time.",
            },
            {
              id: 4,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 6,
          title: "Skipping items",
          points: [
            {
              id: 1,
              text: "To skip items in a collection you continue keyword.",
            },
            {
              id: 2,
              text: "Results: 7/12",
            },
          ],
        },
        {
          id: 7,
          title: "Infinite loops",
          points: [
            {
              id: 1,
              text: "Using true as your condition will result in an infinite loop.",
            },
            {
              id: 1,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 8,
          title: "Looping: Summary",
          points: [
            {
              id: 1,
              text: "Results: 9/12",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/4",
    },
    {
      id: 5,
      name: "100 Days of Swift - Day 5",
      learned: [
        {
          id: 1,
          title: "Writing functions",
          points: [
            {
              id: 1,
              text: "In Swift you can use functions to re-use code.",
            },
            {
              id: 2,
              text: "Swift functions start with the func keyword.",
            },
            {
              id: 3,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 2,
          title: "Accepting parameters",
          points: [
            {
              id: 1,
              text: "Functions in swift can accept parameters.",
            },
            {
              id: 2,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 3,
          title: "Returning values",
          points: [
            {
              id: 1,
              text: "Functions can also return data.",
            },
            {
              id: 2,
              text: "You must use the return keyword to return a value.",
            },
            {
              id: 3,
              text: "You can return multiple types using a tuple.",
            },
            {
              id: 4,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 4,
          title: "Parameter labels",
          points: [
            {
              id: 1,
              text: "Swift allows us to provide two name for each parameter.",
            },
            {
              id: 2,
              text: "The first name is the external purposes and the second one is for internal purposes.",
            },
            {
              id: 3,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 5,
          title: "Omitting parameter label",
          points: [
            {
              id: 1,
              text: "You can omit the external parameter by using the _ underscore syntax.",
            },
            {
              id: 2,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 6,
          title: "Default parameters",
          points: [
            {
              id: 1,
              text: "You can give your own parameters a default value just by writing an = sign after its type followed by the default you want to give it.",
            },
            {
              id: 2,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 7,
          title: "Variadic functions",
          points: [
            {
              id: 1,
              text: "Variadic functions can accept any number of parameters.",
            },
            {
              id: 2,
              text: "The print() function uis variadic.",
            },
            {
              id: 3,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 8,
          title: "Writing throwing functions",
          points: [
            {
              id: 1,
              text: "Functions can fail sometimes if they have bad input or if something went wrong internally.",
            },
            {
              id: 2,
              text: "Swift lets us throw error from functions by marking them as throws before their return type.",
            },
            {
              id: 3,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 9,
          title: "Running throwing functions",
          points: [
            {
              id: 1,
              text: "Functions that can throw errors must be wrapped inside the do code block.",
            },
            {
              id: 2,
              text: "You must use the try keyword before every function that might throw an error.",
            },
            {
              id: 3,
              text: "The catch block lets you handle errors gracefully.",
            },
            {
              id: 4,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 10,
          title: "inout parameters",
          points: [
            {
              id: 1,
              text: "Parameters passed into a Swift function are constants by default.",
            },
            {
              id: 2,
              text: "If you want to change the function's parameter values then you must mark then as inout before the type.",
            },
            {
              id: 3,
              text: "Changes are reflected outside the function.",
            },
            {
              id: 4,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 11,
          title: "Functions: Summary",
          points: [
            {
              id: 1,
              text: "Results: 12/12",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/5",
    },
    {
      id: 6,
      name: "100 Days of Swift - Day 6",
      learned: [
        {
          id: 1,
          title: "Creating basic closures",
          points: [
            {
              id: 1,
              text: "Functions with no name are called closures.",
            },
            {
              id: 2,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 2,
          title: "Accepting parameters in a closure",
          points: [
            {
              id: 1,
              text: "Closures in Swift can also accept parameters.",
            },
            {
              id: 2,
              text: "Closures that accept parameters cannot use external parameter labels.",
            },
            {
              id: 3,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 3,
          title: "Returning values from a closure",
          points: [
            {
              id: 1,
              text: "You can return values from closures in Swift.",
            },
            {
              id: 2,
              text: "To return the value, we need to use -> String before the in keyword.",
            },
            {
              id: 3,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 4,
          title: "Closures as parameters",
          points: [
            {
              id: 1,
              text: "You can pass closures into functions in Swift.",
            },
            {
              id: 2,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 5,
          title: "Trailing closure syntax",
          points: [
            {
              id: 1,
              text: "If the last parameter to a function is a closure, Swift lets you use special syntax called trailing closure syntax.",
            },
            {
              id: 2,
              text: "Rather than pass in your closure as a parameter, you pass it directly after the function inside braces.",
            },
            {
              id: 3,
              text: "Results: 11/12",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/6",
    },
    {
      id: 7,
      name: "100 Days of Swift - Day 7",
      learned: [
        {
          id: 1,
          title: "Using closures as parameters when they accept parameters",
          points: [
            {
              id: 1,
              text: "Closures can also accept parameters.",
            },
            {
              id: 2,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 2,
          title: "Using closures as parameters when they return values",
          points: [
            {
              id: 1,
              text: "Closures can also return values.",
            },
            {
              id: 2,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 3,
          title: "Shorthand parameter names",
          points: [
            {
              id: 1,
              text: "If a closure only accepts a single value then you can exclude the return type.",
            },
            {
              id: 2,
              text: "If a closure only returns a single value then Swift can infer the return type and we can remove the return keyword.",
            },
            {
              id: 3,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 4,
          title: "Closures with multiple parameters",
          points: [
            {
              id: 1,
              text: "Closures can also accept multiple parameters.",
            },
            {
              id: 2,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 5,
          title: "Returning closures from functions",
          points: [
            {
              id: 1,
              text: "In Swift functions can also return closures.",
            },
            {
              id: 2,
              text: "You need to mark the closures's after the -> symbol.",
            },
            {
              id: 3,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 6,
          title: "Capturing values",
          points: [
            {
              id: 1,
              text: "If you use any external values inside your closure, Swift captures them - stores them alongside the closure, so they can be modified even if they don't exist any more.",
            },
            {
              id: 2,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 7,
          title: "Closures: Summary",
          points: [
            {
              id: 1,
              text: "Results: 6/6",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/7",
    },
  ],
};
