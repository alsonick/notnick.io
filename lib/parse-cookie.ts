import { GetServerSidePropsContext } from "next";
import { ClientUser } from "../types/discord";
import { COOKIE_NAME } from "./constants";
import { verify } from "jsonwebtoken";
import { parse } from "cookie";

export const parseCookie = (
  ctx: GetServerSidePropsContext
): ClientUser | null => {
  if (!ctx.req.headers.cookie) {
    return null;
  }

  const token = parse(ctx.req.headers.cookie)[COOKIE_NAME!];

  if (!token) {
    return null;
  }

  try {
    const user = verify(token, process.env.JWT_SECRET!) as ClientUser;
    return user;
  } catch (e) {
    return null;
  }
};
