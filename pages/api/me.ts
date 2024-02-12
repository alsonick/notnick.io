import {
  AVATAR,
  COUNTRY,
  FIRST_NAME,
  FULL_NAME,
  LAST_NAME,
} from "../../lib/constants";
import { generateRandomId } from "../../lib/generate-random-id";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    success: true,
    data: {
      fullName: `${FULL_NAME}`,
      firstName: `${FIRST_NAME}`,
      lastName: `${LAST_NAME}`,
      age: new Date().getFullYear() - 2003,
      dob: {
        day: 4,
        month: 3,
        year: 2003,
      },
      country: `${COUNTRY}`,
      email: "hi@notnick.io",
      website: "notnick.io",
      avatar: `https://notnick.io/${AVATAR}.png`,
      domains: ["notnick.io", "pics.notnick.io"],
      redirects: [
        {
          id: generateRandomId(),
          redirect: "notnick.io/gh",
          destination: "https://github.com/alsonick",
        },
        {
          id: generateRandomId(),
          redirect: "notnick.io/community",
          destination: "notnick.io/community",
        },
      ],
      domain: {
        whois: {
          "registrar-info": {
            name: "NameCheap, Inc",
            "whois-server": "whois.namecheap.com",
            "referral-url": "https://www.namecheap.com/",
            domain: "notnick.io",
          },
        },
      },
      skills: [
        "React.js",
        "TypeScript",
        "styled-components",
        "TailwindCSS",
        "Prisma",
        "Git",
        "Visual Studio Code",
        "Node.js",
        "Next.js",
        "Postgres",
        "Yarn",
        "npm",
        "Express",
        "JavaScript",
        "Swift",
        "UIKit",
        "SwiftUI",
      ],
      specs: {
        pc: {
          cpu: "Intel Core i9-11900KF",
          ram: "32GB",
          gpu: "NVIDIA GeForce RTX 3060",
          os: "Windows 11",
          storage: "1TB SSD",
        },
        'M2 Pro MacBook Pro 16"': {
          display: "16-inch Liquid Retina XDR display",
          chip: "Apple M2 Pro Chip",
          memory: "16GB",
          storage: "512GB SSD",
        },
        gear: {
          monitor: "Samsung UR55 4K IPS HDR10",
          keyboard: "Keychron K4 Wireless Mechanical Keyboard",
          mouse: "TECKNET RGB Gaming Mouse",
          headset: "HyperX Cloud II 7.1",
          earbuds: "AirPods Pro",
          watch: "Apple Watch Series 3",
          "primary phone": "iPhone 15",
          "secondary phone": "iPhone XR",
        },
      },
      socials: {
        "x (previously twitter)": {
          link: "https://twitter.com/heynickn",
          username: "heynickn",
        },
        instagram: {
          link: "https://www.instagram.com/heynickn/",
          username: "heynickn",
        },
        snapchat: {
          link: "https://www.snapchat.com/add/notnick14",
          username: "notnick14",
        },
        linkedin: {
          link: "https://www.linkedin.com/in/nicholas-n-5a9187195/",
          username: "https://www.linkedin.com/in/nicholas-n-5a9187195/",
        },
        reddit: {
          link: "https://www.reddit.com/user/thisnotnicholas",
          username: "thisnotnicholas",
        },
        twitch: {
          link: "https://www.twitch.tv/alsonick_",
          username: "alsonick_",
        },
        discord: {
          link: "https://discord.com/users/463449066672619520",
          username: "alsonick_",
        },
        mastadon: {
          link: "https://phpc.social/@alsonick",
          username: "@alsonick@phpc.social",
        },
        tiktok: {
          link: "https://www.tiktok.com/@heynick010",
          username: "heynick010",
        },
        github: {
          link: "https://github.com/alsonick",
          username: "alsonick",
        },
        stackoverflow: {
          link: "https://stackoverflow.com/users/17204801/nicholas",
          username: "user:17204801",
        },
        youtube: {
          link: "https://www.youtube.com/@alsonick",
          username: "@alsonick",
        },
        threads: {
          link: "https://threads.net/@heynickn",
          username: "@heynickn",
        },
      },
      hobbies: ["Traveling", "Anime", "Playing Piano"],
    },
  });
}
