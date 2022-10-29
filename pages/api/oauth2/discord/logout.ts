import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import { COOKIE_NAME } from "../../../../lib/constants";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") return res.status(405).send({
      success: false,
      message: "Invalid method provided",
    });

  res.setHeader(
    "Set-Cookie",
    serialize(COOKIE_NAME!, "", {
      maxAge: -1,
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "lax",
      path: "/guestbook",
    })
  );

  res.redirect("/")
};
