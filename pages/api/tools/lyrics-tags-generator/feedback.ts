import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  if (!body) {
    return res
      .status(400)
      .send({ success: false, error: "Please include the body." });
  }

  interface Body {
    feedback?: string | undefined;
    email?: string | undefined;
  }

  const { email, feedback } = body as Body;

  const response = await fetch(process.env.FEEDBACK_DISCORD_WEBHOOK_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `Feedback from **${email}**:\n\n${feedback}`,
    }),
  });

  if (response.status >= 400) {
    return res.send({ success: false, error: "Something went wrong." });
  }

  return res.status(200).send({ success: true });
}
