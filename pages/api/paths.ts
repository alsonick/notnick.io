import type { NextApiRequest, NextApiResponse } from "next";
import { PATHS } from "../../lib/paths";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(PATHS);
}
