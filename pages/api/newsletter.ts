import { Error, Issues, Subscriber } from "../../types/revue";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET" && req.query.data === "subs") {
    const response = await fetch("https://www.getrevue.co/api/v2/subscribers", {
      method: "GET",
      headers: {
        Authorization: `Token ${process.env.REVUE_API_KEY as string}`,
        "Content-Type": "application/json",
      },
    });

    const data = (await response.json()) as Subscriber[];

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=1200, stale-while-revalidate=600"
    );

    return res
      .status(200)
      .send({ success: false, error: "Revue is not in operation." });
  }

  if (req.method === "GET" && req.query.data === "issues") {
    const response = await fetch("https://www.getrevue.co/api/v2/issues", {
      method: "GET",
      headers: {
        Authorization: `Token ${process.env.REVUE_API_KEY as string}`,
        "Content-Type": "application/json",
      },
    });

    const data = (await response.json()) as Issues[];

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=1200, stale-while-revalidate=600"
    );

    return res.status(200).send({ success: true, count: data.length });
  }

  if (req.method === "POST") {
    interface Body {
      email: string;
    }

    const { email } = req.body as Body;

    if (!email) {
      return res
        .status(400)
        .send({ success: false, error: "Missing email field." });
    }

    const response = await fetch("https://www.getrevue.co/api/v2/subscribers", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        Authorization: `Token ${process.env.REVUE_API_KEY as string}`,
        "Content-Type": "application/json",
      },
    });

    const data = (await response.json()) as Error;

    if (data.error) {
      return res
        .status(400)
        .send({ success: false, error: data.error.email[0] });
    }

    return res
      .status(201)
      .send({ success: false, error: "Revue is not in operation." });
  }

  return res
    .status(400)
    .send({ success: false, error: "Please use a valid request method." });
}
