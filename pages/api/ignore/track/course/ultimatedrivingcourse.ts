import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    name: "Ultimate Driving Course",
    started: "July 3rd, 2024",
    completed: false,
    "Welcome To The Ultimate Driving Course - Automatic": {
      "Welcome Video": {
        completed: true,
      },
    },
    "Cockpit Drills / Controls": {
      "Cockpit Drills/Control - Intro": {
        completed: true,
      },
      "Cockpit Drill (Auto)": {
        completed: true,
      },
      "Hand Controls (Auto)": {
        completed: true,
      },
    },
    "Moving The Vehicle": {
      "Moving The Vehicle - Intro": {
        completed: true,
      },
      "Moving Off & Stopping": {
        completed: true,
      },
    },
    Steering: {
      "Steering intro": {
        completed: true,
      },
      Steering: {
        completed: true,
      },
    },
    "T Junctions": {
      "T-Junctions Intro": {
        completed: true,
      },
      "What is A T-Junction": {
        completed: true,
      },
      "Emerging Left (Auto)": {
        completed: true,
      },
      "Emerging Right (Auto)": {
        completed: true,
      },
      "Approaching Left (Auto)": {
        completed: true,
      },
      "Approaching Right (Auto)": {
        completed: true,
      },
      "What order should you watch the modules in?": {
        completed: true,
      },
    },
    },
  });
}
