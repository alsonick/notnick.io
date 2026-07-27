import { generateRandomId } from "./generate-random-id";
import { Article } from "../types/article";

export const ARTICLES: Article[] = [
  {
    id: generateRandomId(),
    title: "Key Difference Between TCP/IP And OSI Model",
    type: "Networking",
    link: "https://www.fortinet.com/uk/resources/cyberglossary/tcp-ip-model-vs-osi-model",
    authors: ["fortinet"],
    tags: [
      {
        id: generateRandomId(),
        filter: "Networking",
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
        filter: "Engineering",
      },
    ],
  },
  {
    id: generateRandomId(),
    title: "Rust Is The Future of JavaScript Infrastructure",
    type: "Infrastructure",
    link: "https://leerob.io/blog/rust",
    authors: ["Lee Robinson"],
    tags: [
      {
        id: generateRandomId(),
        filter: "Engineering",
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
    title: "ARP (ADDRESS RESOLUTION PROTOCOL) — How Does It Work?",
    type: "Networking",
    link: "https://medium.com/@nurcanakatay/arp-address-resolution-protocol-how-does-it-work-e90907a28e03",
    authors: ["Nurcan Akatay"],
    tags: [
      {
        id: generateRandomId(),
        filter: "Networking",
      },
    ],
  },
  {
    id: generateRandomId(),
    title: "How to build a 30M RPS CDN in 30 days with Rust and WASM",
    type: "Networking",
    link: "https://blog.railway.com/p/railway-cdn",
    authors: ["Phin Walton"],
    tags: [
      {
        id: generateRandomId(),
        filter: "Networking",
      },
    ],
  },
  {
    id: generateRandomId(),
    title: "Dynamic Host Configuration Protocol (DHCP)",
    type: "Networking",
    link: "https://medium.com/@induwaraudanaranaweera/dynamic-host-configuration-protocol-dhcp-7153425d3939",
    authors: ["Induwara Udana"],
    tags: [
      {
        id: generateRandomId(),
        filter: "Networking",
      },
    ],
  },
];
