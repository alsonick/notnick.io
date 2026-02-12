import type { NextApiRequest, NextApiResponse } from "next";
import { getSession, clearSession } from "../../lib/session";
import { prisma } from "../../lib/prisma";
import Filter from "bad-words";

const CHARACTER_LIMIT = 200;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const messages = await prisma.guestbookMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
    return res.status(200).json({ success: true, messages });
  }

  if (req.method === "POST") {
    const session = getSession(req);
    if (!session) {
      return res
        .status(401)
        .json({ success: false, error: "You must be signed in." });
    }

    const { message } = req.body;

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return res
        .status(400)
        .json({ success: false, error: "Message cannot be empty." });
    }

    if (message.length > CHARACTER_LIMIT) {
      return res.status(400).json({
        success: false,
        error: `Message must be ${CHARACTER_LIMIT} characters or less.`,
      });
    }

    const filter = new Filter();
    if (filter.isProfane(message)) {
      return res.status(400).json({
        success: false,
        error: "Please don't send inappropriate messages.",
      });
    }

    // Check if user already has a message
    const existing = await prisma.guestbookMessage.findUnique({
      where: { discordId: session.discordId },
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        error: "You've already written a guestbook message.",
      });
    }

    const entry = await prisma.guestbookMessage.create({
      data: {
        discordId: session.discordId,
        name: session.name,
        username: session.username,
        avatar: session.avatar,
        message: message.trim(),
      },
    });

    if (process.env.DISCORD_GUESTBOOK_WEBHOOK_URL) {
      fetch(process.env.DISCORD_GUESTBOOK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "New Guestbook Message",
              description: message.trim(),
              color: 0xb921ff,
              author: {
                name: `${session.name} (@${session.username})`,
                icon_url: session.avatar,
              },
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      }).catch(() => {});
    }

    return res.status(201).json({ success: true, entry });
  }

  if (req.method === "DELETE") {
    const session = getSession(req);
    if (!session) {
      return res
        .status(401)
        .json({ success: false, error: "You must be signed in." });
    }

    await prisma.guestbookMessage.deleteMany({
      where: { discordId: session.discordId },
    });

    return res.status(200).json({ success: true });
  }

  // Sign out
  if (req.method === "PATCH") {
    clearSession(res);
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
