import type { NextApiRequest, NextApiResponse } from "next";
import { CACHE_TOKEN } from "../../lib/constants";
import { rateLimit } from "../../lib/rate-limit";
import { Body } from "../../types/guestbook";
import prisma from "../../lib/prisma";

const limiter = rateLimit({
  interval: 10800 * 1000, // 3 hours
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = req.body as Body;

    const CHARACTER_LIMIT = 30;

    if (!body) {
      return res
        .status(400)
        .send({ success: false, error: "Please include the body." });
    }

    const { id, userId, text, sender, avatar, date } = body;

    if (!id || !userId || !text || !sender || !avatar || !date) {
      return res
        .status(400)
        .send({ success: false, error: "Please include all the fields." });
    }

    if (text.length > CHARACTER_LIMIT) {
      return res
        .status(400)
        .send({
          success: false,
          error: `You can only have ${CHARACTER_LIMIT} characters.`,
        });
    }

    try {
      await limiter.check(res, 4, CACHE_TOKEN);
    } catch {
      return res
        .status(429)
        .send({ success: false, error: "Rate limit exceeded." });
    }

    try {
      const message = await prisma.message.create({
        data: {
          id: body.id,
          userId: body.userId,
          text: body.text,
          sender: body.sender,
          avatar: body.avatar,
          date: body.date,
        },
      });

      if (message) {
        return res.status(201).send({ success: true });
      }
    } catch (e) {
      return res
        .status(500)
        .send({ success: false, error: "Something went wrong." });
    }
  }

  if (req.method === "GET") {
    try {
      const messages = await prisma.message.findMany();

      if (messages.length > 0) {
        //@ts-ignore
        const sortedMessage = messages.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

        return res.status(200).send({ success: true, messages: sortedMessage });
      }
      return res.status(200).send({ success: true, messages });
    } catch (e) {
      return res.status(500).send({
        success: false,
        error: "Something went wrong whiles fetching messages",
      });
    }
  }

  if (req.method === "DELETE") {
    const id = req.query.id;
    console.log(id);
    if (!id) {
      return res
        .status(400)
        .send({ success: false, error: "Please provide the id" });
    }

    try {
      const deletedMessage = await prisma.message.delete({
        where: {
          id: id as string,
        },
      });

      if (deletedMessage) {
        return res.status(200).send({ success: true });
      }

      return res
        .status(400)
        .send({ success: false, error: "Message was not found." });
    } catch (e: any) {
      return res.status(500).send({ success: false, error: e.meta.cause });
    }
  }
}
