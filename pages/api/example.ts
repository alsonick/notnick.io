import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const example = req.query as { e: string };

  if (example.e === undefined) {
    return res.status(200).json({ success: true });
  }

  const e = Number(example.e);

  if (Number.isNaN(e)) {
    return res.status(200).json({ success: true });
  }

  return res.status(200).json({ success: true, example: e });
}
