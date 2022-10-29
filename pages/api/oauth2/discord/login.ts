import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const discriminator = req.query.discriminator;

  const redirect = encodeURIComponent(
    `${"http://localhost:3000"}/api/oauth2/discord/callback`
  );

  res.redirect(
    `https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${redirect}&response_type=code&scope=identify`
  );
}
