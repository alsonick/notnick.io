import type { NextApiRequest, NextApiResponse } from "next";
import { CHALLENGES } from "../../lib/challenges";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query as { name: string; content: string; day: string };

  const content = query.content;
  const name = query.name;
  const d = query.day;

  if (!name) {
    return res.status(200).json({ success: true, challenges: CHALLENGES });
  }

  const day = Number(d);

  const challenge = CHALLENGES.find(
    (challenge) => challenge.slug === query.name
  );

  if (!challenge) {
    return res.status(400).json({
      success: false,
      error: `Could not find challenge with the name (${name}).`,
    });
  }

  if (content) {
    if (d) {
      if (Number.isNaN(day)) {
        return res
          .status(400)
          .json({ success: false, error: "Day must be a valid number." });
      } else {
        const dayChallengeFound = challenge.content.find((c) => c.day === day);

        if (dayChallengeFound) {
          return res
            .status(200)
            .json({ success: true, challenge: dayChallengeFound });
        } else {
          return res.status(400).json({
            success: false,
            name: challenge.slug,
            content: content,
            day: day,
            error: {
              message: "Could not find that day.",
            },
          });
        }
      }
    }

    if (content === "false" || content !== "true") {
      return res.status(200).json({ success: true, challenge });
    } else {
      return res
        .status(200)
        .json({ success: true, content: challenge.content });
    }
  }
}
