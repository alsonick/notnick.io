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
              id: 2,
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
    {
      id: 8,
      name: "100 Days of Swift - Day 8",
      learned: [
        {
          id: 1,
          title: "Creating your own structs",
          points: [
            {
              id: 1,
              text: "You can design on your own types using structures, or more commonly known as just structs.",
            },
            {
              id: 2,
              text: "You use the struct keyword to define a struct.",
            },
            {
              id: 3,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 2,
          title: "Computed properties",
          points: [
            {
              id: 1,
              text: "Computed properties in Swift are properties that can run code and return values.",
            },
            {
              id: 2,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 3,
          title: "Property observers",
          points: [
            {
              id: 1,
              text: "Property observers let you run code before or after any property changes.",
            },
            {
              id: 2,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 4,
          title: "Methods",
          points: [
            {
              id: 1,
              text: "Functions inside structs are called methods.",
            },
            {
              id: 2,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 5,
          title: "Mutating methods",
          points: [
            {
              id: 1,
              text: "If a struct has a variable property but the instance of the struct was created as a constant, that property cannot be changed.",
            },
            {
              id: 2,
              text: "When you need to change a property inside a method, you need to mark it using the mutating keyword.",
            },
            {
              id: 3,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 6,
          title: "Properties and methods of strings",
          points: [
            {
              id: 1,
              text: "Strings are structs.",
            },
            {
              id: 2,
              text: "Results: 5/6",
            },
          ],
        },
        {
          id: 7,
          title: "Properties and methods of arrays",
          points: [
            {
              id: 1,
              text: "Arrays are also structs.",
            },
            {
              id: 2,
              text: "Results: 11/12",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/8",
    },
    {
      id: 9,
      name: "100 Days of Swift - Day 9",
      learned: [
        {
          id: 1,
          title: "Initializers",
          points: [
            {
              id: 1,
              text: "Initializers are special methods that provide different ways to crate your struct.",
            },
            {
              id: 2,
              text: "All structs come with one by default, called their memberwise initializer.",
            },
            {
              id: 3,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 2,
          title: "Referring to the current instance",
          points: [
            {
              id: 1,
              text: "You can refer to the current instance of a struct using the self keyword.",
            },
            {
              id: 2,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 3,
          title: "Lazy properties",
          points: [
            {
              id: 1,
              text: "Swift lets you create some properties only when they are needed.",
            },
            {
              id: 2,
              text: "Lazy properties are created using the lazy keyword.",
            },
            {
              id: 3,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 4,
          title: "Static properties and methods",
          points: [
            {
              id: 1,
              text: "You can access a property or struct without initializing it by making them as static.",
            },
            {
              id: 2,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 5,
          title: "Access control",
          points: [
            {
              id: 1,
              text: "Access control lets you restrict which code can use properties and methods.",
            },
            {
              id: 2,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 6,
          title: "Structs: Summary",
          points: [
            {
              id: 1,
              text: "Results: 6/6",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/9",
    },
    {
      id: 10,
      name: "100 Days of Swift - Day 10",
      learned: [
        {
          id: 1,
          title: "Creating your own classes",
          points: [
            {
              id: 1,
              text: "Classes are similar to structs in that they allow you to create new types with properties and methods.",
            },
            {
              id: 2,
              text: "Classes never come with a memberwise initializer.",
            },
            {
              id: 3,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 2,
          title: "Class inheritance",
          points: [
            {
              id: 1,
              text: "The second difference between classes and structs is that you can create a class based on an existing class, this is called inheritance.",
            },
            {
              id: 2,
              text: 'The class you inherit from is called the "parent" or "super" class, and the new class is called the "child" class.',
            },
            {
              id: 3,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 3,
          title: "Overriding methods",
          points: [
            {
              id: 1,
              text: "Chid classes can replace parent methods with their own implementations.",
            },
            {
              id: 2,
              text: "This process is known as overriding.",
            },
            {
              id: 3,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 4,
          title: "Final classes",
          points: [
            {
              id: 1,
              text: "You can disallow other developers from inheriting from your classes by marking them as final before the class declaration.",
            },
            {
              id: 2,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 5,
          title: "Copying objects",
          points: [
            {
              id: 1,
              text: "When you copy a struct, both the original and the copy are different things - changing one won't change the other.",
            },
            {
              id: 2,
              text: "When you copy a class, both the original and the copy point to the same thing in memory, so changing one does change the other.",
            },
            {
              id: 3,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 6,
          title: "Deinitializers",
          points: [
            {
              id: 1,
              text: "Classes can have deinitializers - code that gets executed when an instance of a class is destroyed.",
            },
            {
              id: 2,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 7,
          title: "Mutability",
          points: [
            {
              id: 1,
              text: "If you have a constant struct with a variable property, that property can't be changed because the struct itself is constant.",
            },
            {
              id: 2,
              text: "If you have a constant class with a variable property, that property can be changed.",
            },
            {
              id: 3,
              text: "Classes don't need the mutating keyword with methods that change properties.",
            },
            {
              id: 4,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 8,
          title: "Classes: Summary",
          points: [
            {
              id: 1,
              text: "Results: 6/6",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/10",
    },
    {
      id: 11,
      name: "100 Days of Swift - Day 11",
      learned: [
        {
          id: 1,
          title: "Creating your own classes",
          points: [
            {
              id: 1,
              text: "Protocols are used to describe what properties and methods something must have.",
            },
            {
              id: 2,
              text: "Protocols are defined using the protocol keyword.",
            },
            {
              id: 3,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 2,
          title: "Protocol inheritance",
          points: [
            {
              id: 1,
              text: "Protocols can inherit from other protocols",
            },
            {
              id: 2,
              text: "Results: 9/12",
            },
          ],
        },
        {
          id: 3,
          title: "Extensions",
          points: [
            {
              id: 1,
              text: "Extensions allow you to add methods to existing types.",
            },
            {
              id: 2,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 4,
          title: "Protocol extensions",
          points: [
            {
              id: 1,
              text: "You can add extensions to already defined protocols.",
            },
            {
              id: 2,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 5,
          title: "Protocol-oriented programming",
          points: [
            {
              id: 1,
              text: "You can add protocols to custom types.",
            },
            {
              id: 2,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 6,
          title: "Protocols and extensions: Summary",
          points: [
            {
              id: 1,
              text: "Results: 9/12",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/11",
    },
    {
      id: 12,
      name: "100 Days of Swift - Day 12",
      learned: [
        {
          id: 1,
          title: "Handling missing data",
          points: [
            {
              id: 1,
              text: "In Swift you can make any type an optional.",
            },
            {
              id: 2,
              text: "An optional value might be missing - in which case the value will be nil.",
            },
            {
              id: 3,
              text: "Results: 5/6",
            },
          ],
        },
        {
          id: 2,
          title: "Unwrapping optionals",
          points: [
            {
              id: 1,
              text: "A common way of unwrapping optionals is with if let syntax, which unwraps with a condition.",
            },
            {
              id: 2,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 3,
          title: "Unwrapping with guard",
          points: [
            {
              id: 1,
              text: "An alternative to if let is guard let, which also unwraps optionals.",
            },
            {
              id: 2,
              text: "guard let will unwrap an optional for you, but if it finds nil inside it expects you to exit the function.",
            },
            {
              id: 3,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 4,
          title: "Force unwrapping",
          points: [
            {
              id: 1,
              text: "You can force unwrap optionals if you're certain the value exists.",
            },
            {
              id: 2,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 5,
          title: "Implicitly unwrapped optionals",
          points: [
            {
              id: 1,
              text: "Implicitly unwrapped optionals might contain a value or they might be nil.",
            },
            {
              id: 2,
              text: "Unlike regular optionals you don't need to unwrap them in order to use them: you can use them as if they weren't optional at all.",
            },
            {
              id: 3,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 6,
          title: "Nil coalescing",
          points: [
            {
              id: 1,
              text: "The nil coalescing operator unwraps an optional and returns the value inside if there is one.",
            },
            {
              id: 2,
              text: "If there isn't a value - then a default value is used instead.",
            },
            {
              id: 3,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 7,
          title: "Optional chaining",
          points: [
            {
              id: 1,
              text: "Optional chaining is the short hand way of dealing with optionals.",
            },
            {
              id: 2,
              text: "Optional chaining is used with the ? question mark operator.",
            },
            {
              id: 3,
              text: "Results: 12/12",
            },
          ],
        },
        {
          id: 8,
          title: "Optional try",
          points: [
            {
              id: 1,
              text: "You use optionals with functions that could throw an error.",
            },
            {
              id: 2,
              text: "Results: 6/6",
            },
          ],
        },
        {
          id: 9,
          title: "Failable initializers",
          points: [
            {
              id: 1,
              text: "Structs or classes can have failable initializers - initializers that can return nil.",
            },
            {
              id: 2,
              text: "Results: 10/12",
            },
          ],
        },
        {
          id: 10,
          title: "Typecasting",
          points: [
            {
              id: 1,
              text: "Swift supports typecasting.",
            },
            {
              id: 2,
              text: "Results: 11/12",
            },
          ],
        },
        {
          id: 11,
          title: "Optionals: Summary",
          points: [
            {
              id: 1,
              text: "Results: 11/12",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/12",
    },
    {
      id: 13,
      name: "100 Days of Swift - Day 13",
      learned: [
        {
          id: 1,
          title: "Variables and constants",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 2,
          title: "Types of Data",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 3,
          title: "Operators",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 4,
          title: "String interpolation",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 5,
          title: "Arrays",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 6,
          title: "Dictionaries",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 7,
          title: "Conditional statements",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 8,
          title: "Loops",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 9,
          title: "Switch case",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/13",
    },
    {
      id: 14,
      name: "100 Days of Swift - Day 14",
      learned: [
        {
          id: 1,
          title: "Functions",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 2,
          title: "Optionals",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 3,
          title: "Optional chaining",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 4,
          title: "Enumerations",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 5,
          title: "Structs",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 6,
          title: "Classes",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/14",
    },
    {
      id: 15,
      name: "100 Days of Swift - Day 15",
      learned: [
        {
          id: 1,
          title: "Properties",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 2,
          title: "Static properties and methods",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 3,
          title: "Access control",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 4,
          title: "Polymorphism and typecasting",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
        {
          id: 5,
          title: "Closures",
          points: [
            {
              id: 1,
              text: "Review",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/15",
    },
    {
      id: 16,
      name: "100 Days of Swift - Day 16",
      learned: [
        {
          id: 1,
          title: "Setting up",
          points: [
            {
              id: 1,
              text: "Got the Xcode project setup.",
            },
          ],
        },
        {
          id: 2,
          title: "Listing images with FileManager",
          points: [
            {
              id: 1,
              text: "Learned how to load images using the FileManager.",
            },
          ],
        },
        {
          id: 3,
          title: "Designing our interface",
          points: [
            {
              id: 1,
              text: "Designed the interface and used some of the UITableViewController data source methods.",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day16/Day-16-Image.png",
      link: "https://www.hackingwithswift.com/100/16",
    },
    {
      id: 17,
      name: "100 Days of Swift - Day 17",
      learned: [
        {
          id: 1,
          title: "Building a detail screen",
          points: [
            {
              id: 1,
              text: "Learned how to use the UIImageView.",
            },
          ],
        },
        {
          id: 2,
          title: "Loading images with UIImage",
          points: [
            {
              id: 1,
              text: "Learned how to load images with UIIMage.",
            },
            {
              id: 2,
              text: "Used the tableView(_, didSelectRowAt:) method to navigate to a different view controller.",
            },
            {
              id: 3,
              text: "Covered auto layout.",
            },
          ],
        },
        {
          id: 3,
          title: "Final tweaks: hidesBarsOnTap, safe area margins",
          points: [
            {
              id: 1,
              text: "Learned how to use the UIImageView.",
            },
            {
              id: 2,
              text: "Covered the viewWillAppear & viewWillDisappear life cycle methods.",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day17/Day-17-Gif.gif",
      link: "https://www.hackingwithswift.com/100/17",
    },
    {
      id: 18,
      name: "100 Days of Swift - Day 18",
      learned: [
        {
          id: 1,
          title: "Wrap up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Review for Project 1: Storm Viewer",
          points: [
            {
              id: 1,
              text: "Results: 12/12",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day18/Day-18-Gif.gif",
      link: "https://www.hackingwithswift.com/100/18",
    },
    {
      id: 19,
      name: "100 Days of Swift - Day 19",
      learned: [
        {
          id: 1,
          title: "Setting up",
          points: [
            {
              id: 1,
              text: "Got the Xcode project setup.",
            },
          ],
        },
        {
          id: 2,
          title: "Designing your layout",
          points: [
            {
              id: 1,
              text: "Designed the ui and added auto layout.",
            },
          ],
        },
        {
          id: 3,
          title: "Making the basic game work: UIButton and CALayer",
          points: [
            {
              id: 1,
              text: "Covered UIButton and CALayer.",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day19/Day-19-Image.png",
      link: "https://www.hackingwithswift.com/100/19",
    },
    {
      id: 20,
      name: "100 Days of Swift - Day 20",
      learned: [
        {
          id: 1,
          title: "Guess which flag: random numbers",
          points: [
            {
              id: 1,
              text: "Get the random generation functionality with the flags.",
            },
          ],
        },
        {
          id: 2,
          title: "From outlets to actions: creating an IBAction",
          points: [
            {
              id: 1,
              text: "Completed most of the game logic.",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day20/Day-20-Gif.gif",
      link: "https://www.hackingwithswift.com/100/20",
    },
    {
      id: 21,
      name: "100 Days of Swift - Day 21",
      learned: [
        {
          id: 1,
          title: "Wrap up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Review for Project 2: Guess the Flag",
          points: [
            {
              id: 1,
              text: "Results: 11/12",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day21/Day-21-Gif.gif",
      link: "https://www.hackingwithswift.com/100/21",
    },
    {
      id: 22,
      name: "100 Days of Swift - Day 22",
      learned: [
        {
          id: 1,
          title: "About technique projects",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "UIActivityViewController explained",
          points: [
            {
              id: 1,
              text: "Covered how to use UIActivityViewController.",
            },
          ],
        },
        {
          id: 3,
          title: "Wrap up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 4,
          title: "Review for Project 3: Social media",
          points: [
            {
              id: 1,
              text: "Results: 12/12",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day22/Day-22-Gif.gif",
      link: "https://www.hackingwithswift.com/100/22",
    },
    {
      id: 23,
      name: "100 Days of Swift - Day 23",
      learned: [
        {
          id: 1,
          title: "What you learned",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Key points",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 3,
          title: "Challenge",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day23/Day-23-Gif.gif",
      link: "https://www.hackingwithswift.com/100/23",
    },
    {
      id: 24,
      name: "100 Days of Swift - Day 24",
      learned: [
        {
          id: 1,
          title: "Setting up",
          points: [
            {
              id: 1,
              text: "We setup the Xcode project.",
            },
          ],
        },
        {
          id: 2,
          title: "Creating a simple browser with WKWebView",
          points: [
            {
              id: 1,
              text: "Covered how to use WebKit to load websites in our app.",
            },
            {
              id: 2,
              text: "Touched on the delegate pattern.",
            },
          ],
        },
        {
          id: 3,
          title: "Choosing a website: UIAlertController action sheets",
          points: [
            {
              id: 1,
              text: "Learned how to use the UIAlertController class to show action sheets.",
            },
            {
              id: 2,
              text: "Used the (_ webView: WKWebView, didFinish navigation: WKNavigation!) delegate method from WKNavigationDelegate.",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day24/Day-24-Gif.gif",
      link: "https://www.hackingwithswift.com/100/24",
    },
    {
      id: 25,
      name: "100 Days of Swift - Day 25",
      learned: [
        {
          id: 1,
          title: "Monitoring page loads: UIToolbar and UIProgressView",
          points: [
            {
              id: 1,
              text: "Covered how to use the UIToolbar and UIProgressView.",
            },
          ],
        },
        {
          id: 2,
          title: "Refactoring for the win",
          points: [
            {
              id: 1,
              text: "Refactored the code so the web view would only open websites that we wanted.",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/25",
    },
    {
      id: 26,
      name: "100 Days of Swift - Day 26",
      learned: [
        {
          id: 1,
          title: "Wrap up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Review for Project 4: Easy Browser",
          points: [
            {
              id: 1,
              text: "Results: 11/12",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day26/Day-26-Gif.gif",
      link: "https://www.hackingwithswift.com/100/26",
    },
    {
      id: 27,
      name: "100 Days of Swift - Day 27",
      learned: [
        {
          id: 1,
          title:
            "Capture lists in Swift: what's the difference between weak, strong, and unowned references?",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Setting up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 3,
          title: "Reading from disk: contentsOfFile",
          points: [
            {
              id: 1,
              text: "Learned how to read the contents of a file.",
            },
          ],
        },
        {
          id: 4,
          title: "Pick a word, any word: UIAlertController",
          points: [
            {
              id: 1,
              text: "Learned how to add a text field to the UIAlertController.",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day27/Day-27-Gif.gif",
      link: "https://www.hackingwithswift.com/100/27",
    },
    {
      id: 28,
      name: "100 Days of Swift - Day 28",
      learned: [
        {
          id: 1,
          title: "Prepare for submission: lowercased() and IndexPath",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Checking for valid answers",
          points: [
            {
              id: 1,
              text: "Implemented most of the game logic.",
            },
          ],
        },
        {
          id: 3,
          title: "Or else what?",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day28/Day-28-Gif.gif",
      link: "https://www.hackingwithswift.com/100/28",
    },
    {
      id: 29,
      name: "100 Days of Swift - Day 29",
      learned: [
        {
          id: 1,
          title: "Wrap up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Review for Project 5: Word Scramble",
          points: [
            {
              id: 1,
              text: "Results: 10/12",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day29/Day-29-Gif.gif",
      link: "https://www.hackingwithswift.com/100/29",
    },
    {
      id: 30,
      name: "100 Days of Swift - Day 30",
      learned: [
        {
          id: 1,
          title: "Setting up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Advanced Auto Layout",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 3,
          title:
            "Auto Layout in code: addConstraints() with Visual Format Language",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day30/Day-30-Gif.gif",
      link: "https://www.hackingwithswift.com/100/30",
    },
    {
      id: 31,
      name: "100 Days of Swift - Day 31",
      learned: [
        {
          id: 1,
          title:
            "Auto Layout metrics and priorities: constraints(withVisualFormat:)",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Auto Layout anchors",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 3,
          title: "Wrap up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 4,
          title: "Review for Project 6: Auto Layout",
          points: [
            {
              id: 1,
              text: "Results: 10/12",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/31",
    },
    {
      id: 32,
      name: "100 Days of Swift - Day 32",
      learned: [
        {
          id: 1,
          title: "What you learned",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Key points",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 3,
          title: "Challenge",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day32/Day-32-Gif.gif",
      link: "https://www.hackingwithswift.com/100/32",
    },
    {
      id: 33,
      name: "100 Days of Swift - Day 33",
      learned: [
        {
          id: 1,
          title: "Setting up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Creating the basic UI: UITabBarController",
          points: [
            {
              id: 1,
              text: "Learned how to use the UITabBarController.",
            },
          ],
        },
        {
          id: 3,
          title: "Parsing JSON using the Codable protocol",
          points: [
            {
              id: 1,
              text: "Covered how to parse JSON data from an external API.",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day33/Day-33-Gif.gif",
      link: "https://www.hackingwithswift.com/100/33",
    },
    {
      id: 34,
      name: "100 Days of Swift - Day 34",
      learned: [
        {
          id: 1,
          title: "Rendering a petition: loadHTMLString",
          points: [
            {
              id: 1,
              text: "Learned how to render HTML content using WebKit.",
            },
          ],
        },
        {
          id: 2,
          title: "Finishing touches: didFinishLaunchingWithOptions",
          points: [
            {
              id: 1,
              text: "Covered the didFinishLaunchingWithOptions lifecycle method.",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/34",
    },
    {
      id: 35,
      name: "100 Days of Swift - Day 35",
      learned: [
        {
          id: 1,
          title: "Wrap up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Review for Project 7: Whitehouse Petitions",
          points: [
            {
              id: 1,
              text: "Results: 12/12",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day35/Day-35-Gif.gif",
      link: "https://www.hackingwithswift.com/100/35",
    },
    {
      id: 36,
      name: "100 Days of Swift - Day 36",
      learned: [
        {
          id: 1,
          title: "Setting up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Building a UIKit user interface programmatically",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day36/Day-36-Image.png",
      link: "https://www.hackingwithswift.com/100/36",
    },
    {
      id: 37,
      name: "100 Days of Swift - Day 37",
      learned: [
        {
          id: 1,
          title: "Loading a level and adding button targets",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "It's play time: firstIndex(of:) and joined()",
          points: [
            {
              id: 1,
              text: "Completed the game logic.",
            },
          ],
        },
        {
          id: 3,
          title: "Property observers: didSet",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day37/Day-37-Gif.gif",
      link: "https://www.hackingwithswift.com/100/37",
    },
    {
      id: 38,
      name: "100 Days of Swift - Day 38",
      learned: [
        {
          id: 1,
          title: "Wrap up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Review for Project 8: 7 Swifty Words",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
      ],
      completed: true,
      image: "/learn/100-days-of-swift/images/Day38/Day-38-Gif.gif",
      link: "https://www.hackingwithswift.com/100/38",
    },
    {
      id: 39,
      name: "100 Days of Swift - Day 39",
      learned: [
        {
          id: 1,
          title: "Setting up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Why is locking the UI bad?",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 3,
          title: "GCD 101: async()",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 4,
          title: "Back to the main thread: DispatchQueue.main",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 5,
          title: "Easy GCD using performSelector(inBackground:)",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/39",
    },
    {
      id: 40,
      name: "100 Days of Swift - Day 40",
      learned: [
        {
          id: 1,
          title: "Wrap up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Review for Project 9: Grand Central Dispatch",
          points: [
            {
              id: 1,
              text: "Results: 11/12",
            },
          ],
        },
      ],
      completed: true,
      link: "https://www.hackingwithswift.com/100/40",
    },
    {
      id: 41,
      name: "100 Days of Swift - Day 41",
      learned: [
        {
          id: 1,
          title: "What you learned",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Key points",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 3,
          title: "Challenge",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
      ],
      image: "/learn/100-days-of-swift/images/Day41/Day-41-Gif.gif",
      completed: true,
      link: "https://www.hackingwithswift.com/100/41",
    },
    {
      id: 42,
      name: "100 Days of Swift - Day 42",
      learned: [
        {
          id: 1,
          title: "Setting up",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 2,
          title: "Designing UICollectionView cells",
          points: [
            {
              id: 1,
              text: "Covered how to use collection views.",
            },
          ],
        },
        {
          id: 3,
          title: "UICollectionView data sources",
          points: [
            {
              id: 1,
              text: "Covered UICollectionView data source methods.",
            },
          ],
        },
      ],
      image: "/learn/100-days-of-swift/images/Day42/Day-42-Image.png",
      completed: true,
      link: "https://www.hackingwithswift.com/100/42",
    },
    {
      id: 43,
      name: "100 Days of Swift - Day 43",
      learned: [
        {
          id: 1,
          title: "Importing photos with UIImagePickerController",
          points: [
            {
              id: 1,
              text: "Covered how to use the image picker.",
            },
          ],
        },
        {
          id: 2,
          title: "Custom subclasses of NSObject",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
        {
          id: 3,
          title: "Connecting up the people",
          points: [
            {
              id: 1,
              text: "Completed",
            },
          ],
        },
      ],
      image: "/learn/100-days-of-swift/images/Day43/Day-43-Gif.gif",
      completed: true,
      link: "https://www.hackingwithswift.com/100/43",
    },
  ],
};
