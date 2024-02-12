import { generateRandomId } from "./generate-random-id";
import { Article } from "../types/article";

export const ARTICLES: Article[] = [
  {
    id: generateRandomId(),
    title: "How do we use SwiftUI in the Medium iOS application",
    link: "https://medium.engineering/how-do-we-use-swiftui-in-the-medium-ios-application-8f7bd95416ce",
    type: "Technical Writing",
    authors: ["Thomas Ricouard"],
    tags: [
      {
        id: generateRandomId(),
        filter: "SwiftUI",
      },
      {
        id: generateRandomId(),
        filter: "Swift",
      },
      {
        id: generateRandomId(),
        filter: "iOS Development",
      },
      {
        id: generateRandomId(),
        filter: "Technical",
      },
    ],
  },
  {
    id: generateRandomId(),
    title: "Why Google stores billions of lines of code in a single repository",
    link: "https://dl.acm.org/doi/fullHtml/10.1145/2854146",
    type: "Technical Writing",
    authors: ["Rachel Potvin", "Josh Levenberg", "Eric"],
    tags: [
      {
        id: generateRandomId(),
        filter: "Google Engineering",
      },
      {
        id: generateRandomId(),
        filter: "Engineering",
      },
      {
        id: generateRandomId(),
        filter: "Technical",
      },
    ],
  },
  {
    id: generateRandomId(),
    title: "Implementing Dark Mode in iOS 13",
    type: "Technical Writing",
    link: "https://instagram-engineering.com/instagram-darkmode-58802b43c0f2",
    authors: ["Tim Johnsen"],
    tags: [
      {
        id: generateRandomId(),
        filter: "iOS Development",
      },
      {
        id: generateRandomId(),
        filter: "UIKit",
      },
      {
        id: generateRandomId(),
        filter: "Swift",
      },
    ],
  },
  {
    id: generateRandomId(),
    title: "Rust Is The Future of JavaScript Infrastructure",
    type: "Language Talk",
    link: "https://leerob.io/blog/rust",
    authors: ["Lee Robinson"],
    tags: [
      {
        id: generateRandomId(),
        filter: "Rust",
      },
      {
        id: generateRandomId(),
        filter: "Low-Level Programming",
      },
    ],
  },
  {
    id: generateRandomId(),
    title: "How Discord Modernized MFA with WebAuthn",
    type: "Technical Writing",
    link: "https://discord.com/blog/how-discord-modernized-mfa-with-webauthn",
    authors: ["Nathan Walsh"],
    tags: [
      {
        id: generateRandomId(),
        filter: "Discord",
      },
      {
        id: generateRandomId(),
        filter: "Authentication",
      },
      {
        id: generateRandomId(),
        filter: "Technical",
      },
    ],
  },
  {
    id: generateRandomId(),
    title: "Instant Feedback in iOS Engineering Workflows",
    type: "Technical Writing",
    link: "https://instagram-engineering.com/instant-feedback-in-ios-engineering-workflows-c3f6508c76c8",
    authors: ["Instagram Engineering"],
    tags: [
      {
        id: generateRandomId(),
        filter: "iOS Development",
      },
      {
        id: generateRandomId(),
        filter: "Swift",
      },
    ],
  },
  {
    id: generateRandomId(),
    title: "The 50/30/20 rule: how to budget your money more efficiently",
    type: "Finance",
    link: "https://n26.com/en-eu/blog/50-30-20-rule",
    authors: ["N26"],
    tags: [
      {
        id: generateRandomId(),
        filter: "Finance",
      },
    ],
  },
];
