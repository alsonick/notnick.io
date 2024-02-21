import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    version,
    arch,
    platform,
    versions: { node, v8 },
    env: { NODE_ENV },
    release: { lts },
    features: { ipv6 },
  } = process;

  const data = {
    version,
    arch,
    platform,
    node,
    NODE_ENV: NODE_ENV,
    lts,
    ipv6,
    v8,
  };

  res.status(200).json({ success: true, dev: data });
}
