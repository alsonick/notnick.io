import { DISCORD_INVITE_CODE } from "../../../lib/constants";

// Next.js
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await fetch(
    `https://discord.com/api/v10/invites/${DISCORD_INVITE_CODE}?with_counts=true`,
  );

  if (!response.ok) {
    return res
      .status(502)
      .json({ success: false, error: "Could not reach Discord." });
  }

  const invite = await response.json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );

  return res.status(200).json({
    success: true,
    members: invite.approximate_member_count,
    online: invite.approximate_presence_count,
  });
}
