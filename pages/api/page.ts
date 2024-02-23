import type { NextApiRequest, NextApiResponse } from "next";
import { page } from "./../../lib/page";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ success: true, page });
}
