import type { NextApiRequest, NextApiResponse } from "next";

const rateLimitStore: { [key: string]: number } = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const body = req.body;

    const CHARACTER_LIMIT = 500;
    const RATE_LIMIT_TIME = 30 * 60 * 1000;

    if (!body) {
      return res
        .status(400)
        .json({ success: false, error: "Please include the body." });
    }

    interface Body {
      message?: string | undefined;
      email?: string | undefined;
    }

    const { email, message } = body as Body;

    if (
      !email
        ?.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      return res
        .status(400)
        .json({ success: false, error: "Please include a valid email." });
    }

    if (!email || !message) {
      return res
        .status(400)
        .json({ success: false, error: "Please include all the fields." });
    }

    if (message.length > CHARACTER_LIMIT) {
      return res.status(400).json({
        success: false,
        error: `You can only have ${CHARACTER_LIMIT} characters.`,
      });
    }

    const lastRequestTime = rateLimitStore[email];

    if (lastRequestTime && Date.now() - lastRequestTime < RATE_LIMIT_TIME) {
      const timeLeft = Math.ceil(
        (RATE_LIMIT_TIME - (Date.now() - lastRequestTime)) / 1000 / 60,
      );
      return res.status(429).json({
        success: false,
        error: `RATE LIMIT: Please wait ${timeLeft} more minute(s) before sending another request.`,
      });
    }

    if (!process.env.DISCORD_WEBHOOK_URL) {
      console.error("DISCORD_WEBHOOK_URL is not set.");
      return res.status(500).json({
        success: false,
        error: "Server misconfigured: DISCORD_WEBHOOK_URL is not set.",
      });
    }

    rateLimitStore[email] = Date.now();

    let discordResponse: Response;

    try {
      discordResponse = await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify({
          embeds: [
            {
              author: {
                name: `New message | ${email}`,
              },
              color: 0x30d158,
              description: message,
              fields: [],
            },
          ],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error("Discord webhook threw:", err);
      return res.status(502).json({
        success: false,
        error: `Failed to reach Discord: ${
          err instanceof Error ? err.message : String(err)
        }`,
      });
    }

    if (discordResponse.status >= 400) {
      const detail = await discordResponse.text().catch(() => "");
      console.error("Discord webhook error:", discordResponse.status, detail);
      return res.status(502).json({
        success: false,
        error: `Discord returned ${discordResponse.status}.`,
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("/api/connect failed:", err);
    return res.status(500).json({
      success: false,
      error: err instanceof Error ? err.message : "Internal server error.",
    });
  }
}
