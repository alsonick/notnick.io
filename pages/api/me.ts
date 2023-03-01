import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    success: true,
    data: {
      fullName: "Nicholas Njoki",
      firstName: "Nicholas",
      lastName: "Njoki",
      age: new Date().getFullYear() - 2003,
      dob: {
        day: 4,
        month: 3,
        year: 2003,
      },
      country: "United Kingdom",
      email: "hi@notnick.io",
      website: "notnick.io",
      avatar: "https://notnick.io/pfp.png",
      domains: ["notnick.io", "pics.notnick.io"],
      redirects: ["notnick.io/gh", "notnick.io/community"],
      domain: {
        whois: {
          "registrar-info": {
            name: "NameCheap, Inc",
            "whois-server": "whois.namecheap.com",
            "referral-url": "https://www.namecheap.com/",
          },
          "name-servers": {
            "alla.ns.cloudflare.com": "172.64.32.62",
            "guy.ns.cloudflare.com": "173.245.59.173",
          },
        },
      },
      skills: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "React Native",
        "TailwindCSS",
        "Prisma",
        "Postgres",
        "Git",
        "HTML5",
        "CSS3",
        "SQL",
      ],
      specs: {
        pc: {
          cpu: "Intel Core i9-11900KF",
          ram: "32GB",
          gpu: "NVIDIA GeForce RTX 3060",
          os: "Windows 11",
          storage: "1TB SSD",
        },
        'M1 MacBook Pro 13"': {
          display: "Retina display",
          chip: "Apple M1 chip",
          memory: "8GB",
          storage: "256GB SSD",
        },
        gear: {
          monitor: "Samsung UR55 4K IPS HDR10",
          keyboard: "Keychron K4 Wireless Mechanical Keyboard",
          mouse: "TECKNET RGB Gaming Mouse",
          headset: "HyperX Cloud II 7.1",
          earbuds: "AirPods Pro",
          watch: "Apple Watch Series 3",
          phone: "iPhone XR",
        },
      },
      socials: {
        twitter: {
          link: "https://twitter.com/heynickn",
          username: "heynickn",
        },
        github: {
          link: "https://github.com/alsonick",
          username: "alsonick",
        },
        instagram: {
          link: "https://www.instagram.com/heynickn/",
          username: "heynickn",
        },
        linkedin: {
          link: "https://www.linkedin.com/in/nicholas-n-5a9187195/",
          username: "https://www.linkedin.com/in/nicholas-n-5a9187195/",
        },
        mastadon: {
          link: "https://phpc.social/@alsonick",
          username: "@alsonick@phpc.social",
        },
        twitch: {
          link: "https://www.twitch.tv/alsonick_",
          username: "alsonick_",
        },
        reddit: {
          link: "https://www.reddit.com/user/thisnotnicholas",
          username: "thisnotnicholas",
        },
        snapchat: {
          link: "https://www.snapchat.com/add/notnick14",
          username: "notnick14",
        },
        tiktok: {
          link: "https://www.tiktok.com/@heynick010",
          username: "heynick010",
        },
        discord: {
          link: "https://discord.com/users/463449066672619520",
          username: "Nicholas#0050",
        },
      },
      hobbies: ["Traveling", "Anime"],
    },
  });
}
