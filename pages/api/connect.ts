import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EMAIL_ADDRESS } from "../../lib/constants";

const rateLimitStore: { [key: string]: number } = {};

// Email is best-effort: a missing key or a failed send must never break the
// request as long as the Discord webhook succeeds.
async function sendEmailNotification(email: string, message: string) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set; skipping email notification.");
    return;
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: EMAIL_ADDRESS,
      replyTo: email,
      subject: `New message from ${email}`,
      text: message,
    });

    if (error) {
      console.error("Resend error:", error);
    }
  } catch (err) {
    console.error("Resend threw:", err);
  }
}

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

    const [discordResult] = await Promise.allSettled([
      fetch(process.env.DISCORD_WEBHOOK_URL, {
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
      }),
      sendEmailNotification(email, message),
    ]);

    if (discordResult.status === "rejected") {
      console.error("Discord webhook threw:", discordResult.reason);
      return res.status(502).json({
        success: false,
        error: `Failed to reach Discord: ${
          discordResult.reason instanceof Error
            ? discordResult.reason.message
            : String(discordResult.reason)
        }`,
      });
    }

    if (discordResult.value.status >= 400) {
      const detail = await discordResult.value.text().catch(() => "");
      console.error(
        "Discord webhook error:",
        discordResult.value.status,
        detail,
      );
      return res.status(502).json({
        success: false,
        error: `Discord returned ${discordResult.value.status}.`,
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
