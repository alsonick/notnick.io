import type { NextApiRequest, NextApiResponse } from "next";
import { SPECS } from "../../lib/specs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(SPECS);
}
