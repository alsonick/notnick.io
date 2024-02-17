import type { NextApiRequest, NextApiResponse } from "next";
import { SOCIALS } from "../../lib/socials";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(SOCIALS);
}
