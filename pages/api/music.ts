import type { NextApiRequest, NextApiResponse } from "next";
import { MUSIC } from "../../lib/music";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ success: true, music: MUSIC });
}
