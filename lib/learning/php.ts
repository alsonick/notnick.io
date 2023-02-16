export const TOPICS = [
  {
    id: 1,
    name: "Introduction",
    learned: [
      { id: 1, text: "PHP is executed on the server." },
      { id: 2, text: "Used on big blogging sites like WordPress." },
      {
        id: 3,
        text: "Used for general purpose tasks like generating dynamic web pages, collecting data and encrypting data.",
      },
      {
        id: 4,
        text: "Compatible with almost all servers used today.",
      },
    ],
    completed: true,
    link: "https://www.w3schools.com/php/php_intro.asp",
  },
  {
    id: 2,
    name: "Installation",
    learned: [],
    completed: true,
    link: "https://www.w3schools.com/php/php_install.asp",
  },
  {
    id: 3,
    name: "Syntax",
    learned: [
      { id: 1, text: "PHP code can be placed anywhere in the document." },
      { id: 2, text: "Keywords in PHP are no case-sensitive." },
      { id: 3, text: "Variable names are case-sensitive." },
    ],
    completed: true,
    link: "https://www.w3schools.com/php/php_syntax.asp",
  },
  {
    id: 4,
    name: "Comments",
    learned: [
      {
        id: 1,
        text: "Comments in PHP are parts of a program that is not executed.",
      },
      {
        id: 2,
        text: "Comments are helpful for others to understand your code.",
      },
    ],
    completed: true,
    link: "https://www.w3schools.com/php/php_comments.asp",
  },
  {
    id: 5,
    name: "Variables",
    learned: [
      { id: 1, text: "Variables in PHP start with a $ sign." },
      {
        id: 2,
        text: "Variables are loosely typed, meaning that we don't need to tell PHP which data type the variable must be.",
      },
      { id: 3, text: "Variable names are case-sensitive." },
    ],
    completed: true,
    link: "https://www.w3schools.com/php/php_variables.asp",
  },
  {
    id: 6,
    name: "Variables Scope",
    learned: [
      { id: 1, text: "Variables can be declared anywhere in the script." },
      {
        id: 2,
        text: "There are three different variable scopes: LOCAL, GLOBAL & STATIC.",
      },
      {
        id: 3,
        text: "Variables declared outside functions always have a GLOBAL SCOPE and can only be accessed outside a function.",
      },
      {
        id: 4,
        text: "Variables declared within functions always have a LOCAL SCOPE and can only be accessed within the function.",
      },
      {
        id: 5,
        text: "PHP has a `global` keyword that is used to access a global variable from within a function. You must used the `global` keyword before the variables.",
      },
      {
        id: 6,
        text: "PHP stores global variables in the global variable `$GLOBALS`.",
      },
      {
        id: 7,
        text: "The static keyword is used when you don't want a local variable to be deleted.",
      },
    ],
    completed: true,
    link: "https://www.w3schools.com/php/php_variables_scope.asp",
  },
];
