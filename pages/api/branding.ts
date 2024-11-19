import type { NextApiRequest, NextApiResponse } from "next";
import { BRANDING } from "../../lib/branding";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ success: true, branding: BRANDING });
}
