import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EMAIL_ADDRESS } from "../../lib/constants";

const rateLimitStore: { [key: string]: number } = {};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const body = req.body;

  const CHARACTER_LIMIT = 500;
  const RATE_LIMIT_TIME = 30 * 60 * 1000;

  if (!body) {
    return res
      .status(400)
      .send({ success: false, error: "Please include the body." });
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
      .send({ success: false, error: "Please include a valid email." });
  }

  if (!email || !message) {
    return res
      .status(400)
      .send({ success: false, error: "Please include all the fields." });
  }

  if (message.length > CHARACTER_LIMIT) {
    return res.status(400).send({
      success: false,
      error: `You can only have ${CHARACTER_LIMIT} characters.`,
    });
  }

  const lastRequestTime = rateLimitStore[email];

  if (lastRequestTime && Date.now() - lastRequestTime < RATE_LIMIT_TIME) {
    const timeLeft = Math.ceil(
      (RATE_LIMIT_TIME - (Date.now() - lastRequestTime)) / 1000 / 60,
    );
    return res.status(429).send({
      success: false,
      error: `RATE LIMIT: Please wait ${timeLeft} more minute(s) before sending another request.`,
    });
  }

  rateLimitStore[email] = Date.now();

  const [discordResponse, emailResult] = await Promise.all([
    fetch(process.env.DISCORD_WEBHOOK_URL!, {
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
    resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: EMAIL_ADDRESS,
      replyTo: email,
      subject: `New message from ${email}`,
      text: message,
    }),
  ]);

  if (emailResult.error) {
    console.error("Resend error:", emailResult.error);
  }

  if (discordResponse.status >= 400 || emailResult.error) {
    return res.send({ success: false, error: "Something went wrong." });
  }

  return res.status(200).send({ success: true });
}
