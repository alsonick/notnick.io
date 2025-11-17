import type { NextApiRequest, NextApiResponse } from "next";

type ChannelInput = {
  channel: string;
  link: string;
};

type ChannelOutput = ChannelInput & {
  subs: number | null;
  id: string | null;
};

const CHANNELS: ChannelInput[] = [
  {
    link: "https://www.youtube.com/channel/UCb8k4_aNhdKVNRyJb8Mif-g",
    channel: "Aquila",
  },
  {
    link: "https://www.youtube.com/channel/UC61p6WWkt1tgYeKlnjs4BTg",
    channel: "Boots & Ballads",
  },
  {
    link: "https://www.youtube.com/channel/UCVKxhLGZXc0gEOnJhNhAe8A",
    channel: "Polaris Lyrics",
  },
  {
    link: "https://www.youtube.com/channel/UC912uVPZQasVhbdmb1ljN8w",
    channel: "jaded",
  },
  {
    link: "https://www.youtube.com/channel/UCLbg8Yn8xKt5304us2BDRfQ",
    channel: "Sweet Treats",
  },
];

function extractChannelId(link: string): string | null {
  try {
    const channelMatch = link.match(/youtube\.com\/channel\/([A-Za-z0-9_-]+)/i);
    if (channelMatch && channelMatch[1]) return channelMatch[1];

    const userMatch = link.match(/youtube\.com\/user\/([A-Za-z0-9_-]+)/i);
    if (userMatch && userMatch[1]) return null;

    return null;
  } catch (e) {
    return null;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const key = process.env.YOUTUBE_API_KEY;
  if (!key) {
    res.status(500).json({
      error:
        "Missing YouTube API key. Set YOUTUBE_API_KEY in your environment.",
    });
    return;
  }

  const withIds: { input: ChannelInput; id: string | null }[] = CHANNELS.map(
    (c) => ({
      input: c,
      id: extractChannelId(c.link),
    })
  );

  const ids = withIds
    .map((w) => w.id)
    .filter((id): id is string => typeof id === "string" && id.length > 0);

  if (ids.length === 0) {
    const output: ChannelOutput[] = withIds.map(({ input, id }) => ({
      ...input,
      id: id,
      subs: null,
    }));
    res.status(200).json({ channels: output });
    return;
  }

  try {
    const idsParam = ids.join(",");
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${encodeURIComponent(
      idsParam
    )}&key=${encodeURIComponent(key)}`;

    const r = await fetch(url);
    if (!r.ok) {
      const text = await r.text();
      res.status(r.status).json({ error: "YouTube API Error", details: text });
      return;
    }

    const data = await r.json();

    const map = new Map<string, any>();
    if (Array.isArray(data.items)) {
      for (const it of data.items) {
        if (it.id) map.set(it.id, it);
      }
    }

    const output: ChannelOutput[] = withIds.map(({ input, id }) => {
      if (!id) {
        return { ...input, id: null, subs: null };
      }

      const it = map.get(id);
      if (!it) {
        return { ...input, id: id, subs: null };
      }

      const stats = it.statistics || {};
      const subRaw = stats.subscriberCount;
      const sub = subRaw != null ? Number(subRaw) : null;

      return {
        id: id,
        ...input,
        subs: sub,
      };
    });

    res.status(200).json({ channels: output });
  } catch (err: any) {
    res.status(500).json({ error: err?.message ?? String(err) });
  }
}
