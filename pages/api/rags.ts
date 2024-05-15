import type { NextApiRequest, NextApiResponse } from "next";
import { RAGS } from "../../lib/rags";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ success: true, paths: RAGS });
}
