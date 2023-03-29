import type { NextApiRequest, NextApiResponse } from "next";
import { TOPICS } from "../../../lib/learning/topics";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.url?.slice(11);

  if (slug) {
    const topic = TOPICS.find((topic) => topic.slug.includes(slug));

    if (!topic) {
      return res.json({ success: false, error: "Topic does not exist." });
    }

    res.json(topic);
  } else {
    return;
  }
}
