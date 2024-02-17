import type { NextApiRequest, NextApiResponse } from "next";
import { TECHNOLOGIES } from "../../lib/technologies";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ success: true, technologies: TECHNOLOGIES });
}
