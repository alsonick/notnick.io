import { Article } from "../types/article";

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "How do we use SwiftUI in the Medium iOS application",
    link: "https://medium.engineering/how-do-we-use-swiftui-in-the-medium-ios-application-8f7bd95416ce",
    type: "Technical Writing",
    authors: ["Thomas Ricouard"],
    tags: [
      {
        id: 234562,
        filter: "SwiftUI",
      },
      {
        id: 498576,
        filter: "Swift",
      },
      {
        id: 456734,
        filter: "iOS Development",
      },
      {
        id: 456753,
        filter: "Technical",
      },
    ],
  },
  {
    id: 2,
    title: "Why Google stores billions of lines of code in a single repository",
    link: "https://dl.acm.org/doi/fullHtml/10.1145/2854146",
    type: "Technical Writing",
    authors: ["Rachel Potvin", "Josh Levenberg", "Eric"],
    tags: [
      {
        id: 345643,
        filter: "Google Engineering",
      },
      {
        id: 320948,
        filter: "Engineering",
      },
      {
        id: 485968,
        filter: "Technical",
      },
    ],
  },
  {
    id: 3,
    title: "Implementing Dark Mode in iOS 13",
    type: "Technical Writing",
    link: "https://instagram-engineering.com/instagram-darkmode-58802b43c0f2",
    authors: ["Tim Johnsen"],
    tags: [
      {
        id: 434563,
        filter: "iOS Development",
      },
      {
        id: 765346,
        filter: "UIKit",
      },
      {
        id: 987675,
        filter: "Swift",
      },
    ],
  },
  {
    id: 4,
    title: "Rust Is The Future of JavaScript Infrastructure",
    type: "Language Talk",
    link: "https://leerob.io/blog/rust",
    authors: ["Lee Robinson"],
    tags: [
      {
        id: 30284,
        filter: "Rust",
      },
      {
        id: 129847,
        filter: "Low-Level Programming",
      },
    ],
  },
  {
    id: 5,
    title: "How Discord Modernized MFA with WebAuthn",
    type: "Technical Writing",
    link: "https://discord.com/blog/how-discord-modernized-mfa-with-webauthn",
    authors: ["Nathan Walsh"],
    tags: [
      {
        id: 764435,
        filter: "Discord",
      },
      {
        id: 246854,
        filter: "Authentication",
      },
      {
        id: 365346,
        filter: "Technical",
      },
    ],
  },
  {
    id: 6,
    title: "Instant Feedback in iOS Engineering Workflows",
    type: "Technical Writing",
    link: "https://instagram-engineering.com/instant-feedback-in-ios-engineering-workflows-c3f6508c76c8",
    authors: ["Instagram Engineering"],
    tags: [
      {
        id: 134356,
        filter: "iOS Development",
      },
      {
        id: 246865,
        filter: "Swift",
      },
    ],
  },
  {
    id: 7,
    title: "The 50/30/20 rule: how to budget your money more efficiently",
    type: "Finance",
    link: "https://n26.com/en-eu/blog/50-30-20-rule",
    authors: ["N26"],
    tags: [
      {
        id: 830234,
        filter: "Finance",
      },
    ],
  },
];
