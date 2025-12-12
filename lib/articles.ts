import { generateRandomId } from "./generate-random-id";
import { Article } from "../types/article";

export const ARTICLES: Article[] = [
  {
    id: generateRandomId(),
    title: "Why Google stores billions of lines of code in a single repository",
    link: "https://dl.acm.org/doi/fullHtml/10.1145/2854146",
    type: "Technical Writing",
    authors: ["Rachel Potvin", "Josh Levenberg", "Eric"],
    tags: [
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
    title:
      "Supercharging the ML and AI Development Experience at Netflix with Metaflow",
    type: "AI & Machine Learning",
    link: "https://netflixtechblog.com/supercharging-the-ml-and-ai-development-experience-at-netflix-b2d5b95c63eb",
    authors: ["Shashank Srikanth", "Romain Cledat"],
    tags: [
      {
        id: generateRandomId(),
        filter: "AI & Machine Learning",
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
    title: "Evolution of Java Usage at Netflix",
    type: "Technical Writing",
    link: "https://blog.bytebytego.com/p/evolution-of-java-usage-at-netflix",
    authors: ["ByteByteGo"],
    tags: [
      {
        id: generateRandomId(),
        filter: "Java",
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
  {
    id: generateRandomId(),
    title: "Learning From Structure: Discord’s Entity-Relationship Embeddings",
    type: "AI & Machine Learning",
    link: "https://discord.com/blog/learning-from-structure-discords-entity-relationship-embeddings",
    authors: ["August Karlstedt"],
    tags: [
      {
        id: generateRandomId(),
        filter: "AI & Machine Learning",
      },
    ],
  },
  {
    id: generateRandomId(),
    title: "Becoming an AI engineering company",
    type: "AI & Machine Learning",
    link: "https://vercel.com/blog/becoming-an-ai-engineering-company",
    authors: ["Malte Ubl"],
    tags: [
      {
        id: generateRandomId(),
        filter: "AI & Machine Learning",
      },
    ],
  },
];
