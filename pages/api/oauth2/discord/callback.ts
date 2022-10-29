import type { NextApiRequest, NextApiResponse } from "next";
import { Token, User } from "../../../../types/discord";
import { COOKIE_NAME } from "../../../../lib/constants";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.query.code;

  if (!code) {
    return res
      .status(400)
      .send({ success: false, error: "Please provide a code." });
  }

  try {
    const response = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      body: new URLSearchParams({
        client_id: process.env.CLIENT_ID as string,
        client_secret: process.env.CLIENT_SECRET as string,
        code: code as string,
        grant_type: "authorization_code",
        redirect_uri:
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000/api/oauth2/discord/callback"
            : "https://notnick.io/api/oauth2/discord/callback",
        scope: "identify",
      }).toString(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const data: Token = await response.json();

    const userResponse = await fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `${data.token_type} ${data.access_token}`,
      },
    });

    const discordUser: User = await userResponse.json();

    const id = discordUser.id;
    const name = discordUser.username;
    const username = `${discordUser.username}#${discordUser.discriminator}`;
    const avatar = `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`;

    const user = {
      id,
      name,
      username,
      avatar,
    };

    const token = jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: "24h" });

    res.setHeader(
      "Set-Cookie",
      cookie.serialize(COOKIE_NAME!, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "lax",
        path: "/guestbook",
      })
    );

    return res.redirect("/guestbook");
  } catch (e) {
    console.log(e);
    return res
      .status(401)
      .send({ success: false, error: "Unauthorized token" });
  }
}
