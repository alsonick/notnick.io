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
    Crossroads: {
      "Crossroad Intro": {
        completed: true,
      },
      Crossroads: {
        completed: true,
      },
      "Crossroads Controlled": {
        completed: true,
      },
    },
    "Meeting Traffic & Adequate Clearance": {
      "Meeting Traffic Intro": {
        completed: true,
      },
      "Meeting Traffic": {
        completed: true,
      },
      "Adequate Clearance": {
        completed: true,
      },
    },
    "Dual Carriageways": {
      "Dual Carriageways Intro": {
        completed: true,
      },
      "Dual Carriageways": {
        completed: true,
      },
      "Changing Lanes": {
        completed: true,
      },
      "Overtaking (Auto)": {
        completed: true,
      },
    },
    Roundabouts: {
      "Roundabouts Intro": {
        completed: true,
      },
      "What Is A Roundabout": {
        completed: true,
      },
      "Approaching & Exiting A Roundabout (Auto)": {
        completed: true,
      },
      "Judgement When Entering A Roundabout": {
        completed: true,
      },
      "Lane Selection & Markings At Roundabouts": {
        completed: true,
      },
      "Spiral Roundabouts": {
        completed: true,
      },
    },
    "Pedestrian Crossings": {
      "Pedestrian Crossings Intro": {
        completed: true,
      },
      "Pedestrian Crossings": {
        completed: true,
      },
    },
    Manoeuvres: {
      "Manoeuvres Intro": {
        completed: true,
      },
      "Practice Reversing (Auto)": {
        completed: true,
      },
      "Reverse Bay Parking (Left) (Auto)": {
        completed: true,
      },
      "Reverse Bay Parking (Right) (Auto)": {
        completed: true,
      },
      "Forward Bay Parking": {
        completed: false,
      },
      "Reverse Parallel Parking (Auto)": {
        completed: false,
      },
      "Parking On The Right": {
        completed: false,
      },
    },
  });
}
