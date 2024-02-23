import {
  AVATAR,
  COUNTRY,
  DOMAIN,
  EMAIL_ADDRESS,
  FIRST_NAME,
  FULL_NAME,
  LAST_NAME,
} from "../../lib/constants";
import { generateRandomId } from "../../lib/generate-random-id";
import type { NextApiRequest, NextApiResponse } from "next";
import { TECHNOLOGIES } from "./../../lib/technologies";
import { social } from "../../lib/social-links";
import { SOCIALS } from "../../lib/socials";
import { MUSIC } from "./../../lib/music";
import { SPECS } from "../../lib/specs";

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
      email: `${EMAIL_ADDRESS}`,
      website: `${DOMAIN}`,
      avatar: `https://${DOMAIN}/${AVATAR}.png`,
      domains: [`${DOMAIN}`, `pics.${DOMAIN}`],
      redirects: [
        {
          id: generateRandomId(),
          redirect: `${DOMAIN}/gh`,
          destination: social.github.link,
        },
        {
          id: generateRandomId(),
          redirect: `${DOMAIN}/community`,
          destination: `${DOMAIN}/community`,
        },
      ],
      domain: {
        whois: {
          "registrar-info": {
            name: "NameCheap, Inc",
            "whois-server": "whois.namecheap.com",
            "referral-url": "https://www.namecheap.com/",
            domain: `${DOMAIN}`,
          },
        },
      },
      spotify: {
        playlists: MUSIC,
      },
      specs: SPECS,
      socials: SOCIALS,
      technologies: TECHNOLOGIES,
      hobbies: ["Traveling", "Anime", "Playing Piano"],
    },
  });
}
