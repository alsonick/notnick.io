import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    name: "Ultimate Driving Course",
    "Welcome To The Ultimate Driving Course - Automatic": {
      "Welcome Video": true,
    },
    "Cockpit Drills / Controls": {
      "Cockpit Drills/Control - Intro": true,
      "Cockpit Drill (Auto)": true,
      "Hand Controls (Auto)": true,
    },
    "Moving The Vehicle": {
      "Moving The Vehicle - Intro": true,
      "Moving Off & Stopping": true,
    },
  });
}
