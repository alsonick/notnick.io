import { NextApiRequest, NextApiResponse } from "next";
import { IncomingMessage } from "http";
import crypto from "crypto";

const SECRET = process.env.SESSION_SECRET || "default-secret-change-me";
const COOKIE_NAME = "guestbook_session";

interface SessionData {
  discordId: string;
  name: string;
  username: string;
  avatar: string;
}

function sign(data: string): string {
  const hmac = crypto.createHmac("sha256", SECRET);
  hmac.update(data);
  return hmac.digest("hex");
}

function encode(data: SessionData): string {
  const json = JSON.stringify(data);
  const base64 = Buffer.from(json).toString("base64");
  const signature = sign(base64);
  return `${base64}.${signature}`;
}

function decode(cookie: string): SessionData | null {
  const [base64, signature] = cookie.split(".");
  if (!base64 || !signature) return null;

  const expectedSignature = sign(base64);
  if (signature !== expectedSignature) return null;

  try {
    const json = Buffer.from(base64, "base64").toString("utf-8");
    return JSON.parse(json) as SessionData;
  } catch {
    return null;
  }
}

function parseCookies(req: IncomingMessage): Record<string, string> {
  const header = req.headers.cookie || "";
  const cookies: Record<string, string> = {};
  header.split(";").forEach((pair) => {
    const [key, ...rest] = pair.trim().split("=");
    if (key) cookies[key] = decodeURIComponent(rest.join("="));
  });
  return cookies;
}

export function createSession(res: NextApiResponse, data: SessionData): void {
  const value = encode(data);
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 30}${secure}`,
  );
}

export function getSession(
  req: NextApiRequest | IncomingMessage,
): SessionData | null {
  const cookies = parseCookies(req);
  const cookie = cookies[COOKIE_NAME];
  if (!cookie) return null;
  return decode(cookie);
}

export function clearSession(res: NextApiResponse): void {
  res.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`,
  );
}
