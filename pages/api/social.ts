import type { NextApiRequest, NextApiResponse } from "next";
import { social } from "./../../lib/social-links";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ success: true, social });
}
