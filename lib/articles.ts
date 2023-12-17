import { Article } from "../types/article";

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "How do we use SwiftUI in the Medium iOS application",
    link: "https://medium.engineering/how-do-we-use-swiftui-in-the-medium-ios-application-8f7bd95416ce",
    type: "Technical Writing",
    authors: ["Thomas Ricouard"],
  },
  {
    id: 2,
    title: "Why Google stores billions of lines of code in a single repository",
    link: "https://dl.acm.org/doi/fullHtml/10.1145/2854146",
    type: "Technical Writing",
    authors: ["Rachel Potvin", "Josh Levenberg", "Eric"],
  },
  {
    id: 3,
    title: "The 50/30/20 rule: how to budget your money more efficiently",
    type: "Finance",
    link: "https://n26.com/en-eu/blog/50-30-20-rule",
    authors: ["N26"],
  },
  {
    id: 4,
    title: "Rust Is The Future of JavaScript Infrastructure",
    type: "Language Talk",
    link: "https://leerob.io/blog/rust",
    authors: ["Lee Robinson"],
  },
];
