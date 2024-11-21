import type { NextApiRequest, NextApiResponse } from "next";

const rateLimitStore: { [key: string]: number } = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
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
    email?: string | undefined;
    message?: string | undefined;
  }

  const { email, message } = body as Body;

  // Validate email format
  if (
    !email
      ?.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return res
      .status(400)
      .send({ success: false, error: "Please include a valid email." });
  }

  // Validate all required fields are provided
  if (!email || !message) {
    return res
      .status(400)
      .send({ success: false, error: "Please include all the fields." });
  }

  // Check message length limit
  if (message.length > CHARACTER_LIMIT) {
    return res.status(400).send({
      success: false,
      error: `You can only have ${CHARACTER_LIMIT} characters.`,
    });
  }

  // Check rate limit (30 minutes per user)
  const lastRequestTime = rateLimitStore[email];

  if (lastRequestTime && Date.now() - lastRequestTime < RATE_LIMIT_TIME) {
    const timeLeft = Math.ceil(
      (RATE_LIMIT_TIME - (Date.now() - lastRequestTime)) / 1000 / 60
    ); // in minutes
    return res.status(429).send({
      success: false,
      error: `RATE LIMIT: Please wait ${timeLeft} more minute(s) before sending another request.`,
    });
  }

  // Update the rate limit store with the current timestamp
  rateLimitStore[email] = Date.now();

  // Send the message to Discord webhook
  const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
    method: "POST",
    body: JSON.stringify({
      embeds: [
        {
          author: {
            name: `New message | ${email}`,
          },
          description: message,
          fields: [],
        },
      ],
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status >= 400) {
    return res.send({ success: false, error: "Something went wrong." });
  }

  return res.status(200).send({ success: true });
}
