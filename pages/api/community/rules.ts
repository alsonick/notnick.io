import type { NextApiRequest, NextApiResponse } from "next";
import { Rule } from "../../../types/rule";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const rules: Rule[] = [
    {
      id: 1,
      number: 1,
      title: "Respect Everyone",
      text: "Treat all members with courtesy and respect. Harassment, hate speech, or any form of discrimination will not be tolerated.",
    },
    {
      id: 2,
      number: 2,
      title: "No Spamming or Self-Promotion",
      text: "Refrain from flooding the chat with repetitive messages or promoting personal projects excessively. Respect the community space.",
    },
    {
      id: 3,
      number: 3,
      title: "Stay on Topic",
      text: "Keep discussions relevant to the channel's theme or purpose. Off-topic conversations can be disruptive and should be taken to appropriate channels or private messages.",
    },
    {
      id: 4,
      number: 4,
      title: "No NSFW Content",
      text: "Any content of an explicit or mature nature is strictly prohibited. This includes text, images, links, and discussions.",
    },
    {
      id: 5,
      number: 5,
      title: "Follow the Discord Community Guidelines",
      text: "Follow Discord's Guidelines: Abide by Discord's rules at all times. Violations will result in action by moderators.",
    },
    {
      id: 6,
      number: 6,
      title: "No Alternate Accounts",
      text: "Do not use multiple accounts to bypass bans, evade restrictions, or deceive other members. Each member should have only one account in the server.",
    },
    {
      id: 7,
      number: 7,
      title: "No Illegal Activities",
      text: "Do not engage in or promote any illegal activities, including but not limited to piracy, hacking, or sharing illegal content.",
    },
    {
      id: 8,
      number: 8,
      title: "No Impersonation",
      text: "Do not impersonate other members, server staff, or individuals outside the server. This includes using similar usernames, profile pictures, or pretending to have authority you do not possess.",
    },
    {
      id: 9,
      number: 9,
      title: "No Excessive Tagging",
      text: "Avoid excessively tagging (@mentioning) other members, especially if it's not necessary. Respect others' notification settings and only tag when relevant.",
    },
    {
      id: 10,
      number: 10,
      title: "Report Issues",
      text: "If you encounter any violations of these rules or encounter any problems within the server, report them to moderators promptly.",
    },
  ];

  const rule = req.query as { r: string };

  if (rule.r === undefined) {
    return res.status(200).json({ success: true, rules, count: rules.length });
  }

  const r = Number(rule.r);

  if (Number.isNaN(r)) {
    return res
      .status(400)
      .json({ success: false, error: "Please use a valid query." });
  }

  const found = rules.find((rule) => rule.id === r);

  if (found) {
    return res.status(200).json({ success: true, rule: found });
  }

  return res
    .status(401)
    .json({ success: false, error: "Cannot find that rule." });

  console.log(r);
}
