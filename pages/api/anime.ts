import type { NextApiRequest, NextApiResponse } from "next";
import { ANIME } from "../../lib/anime";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ success: true, anime: ANIME });
}
