import type { NextApiRequest, NextApiResponse } from "next";
import { EXPERIENCE } from "../../lib/experience";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ success: true, experience: EXPERIENCE });
}
