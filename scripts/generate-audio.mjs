// Turns each finished blog post and note into an MP3 read aloud by OpenAI's
// text-to-speech, so readers can listen instead.
//
//   yarn audio                    every post whose text changed since last run
//   yarn audio blog/some-slug     just that post (any number of them)
//   yarn audio --dry-run          print what would be read, call nothing
//   yarn audio --force            regenerate even if the text hasn't changed
//
// Needs OPENAI_API_KEY in .env. A post can opt out with `audio: false` in its
// frontmatter. The audio lands in public/audio/<type>/<slug>.mp3 and its
// length in lib/data/post-audio.json, which the post page reads.

import { createHash } from "node:crypto";
import { pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { unified } from "unified";
import matter from "gray-matter";
import "dotenv/config";

const ROOT = process.cwd();
const TYPES = ["blog", "note"];
const AUDIO_DIR = path.join(ROOT, "public/audio");
const MANIFEST = path.join(ROOT, "lib/data/post-audio.json");

const MODEL = process.env.TTS_MODEL ?? "gpt-4o-mini-tts";
const VOICE = process.env.TTS_VOICE ?? "ash";
const INSTRUCTIONS =
  "Read this blog post aloud in a calm, natural, conversational tone, the way " +
  "the author would read their own writing. Pause briefly between sections.";

// The speech endpoint caps a single request's input, so longer posts are read
// in pieces and the pieces joined. MP3 frames stand alone, so joining the
// files end to end plays back as one track.
const CHUNK_CHARS = 3000;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));

// ---------------------------------------------------------------------------
// Markdown → the words worth reading aloud

// Lines the site's remark plugins turn into something other than prose:
// [caption=…], [size=…], [chars=…], [lab=…], `url [embed=true]`,
// `url [preview=true]`, and a URL alone on its line (tweets, GitHub issues).
const DIRECTIVE_LINES = [
  /^\[\s*[a-z]+\s*=.*\]$/i,
  /^\S+\s*\[\s*(embed|preview)\s*=\s*true\s*\]$/i,
  /^<?https?:\/\/\S+>?$/i,
];

const isDirective = (line) => DIRECTIVE_LINES.some((re) => re.test(line));

const inlineText = (node) => {
  switch (node.type) {
    case "text":
    case "inlineCode":
      return node.value;
    case "break":
      return "\n";
    case "image":
    case "imageReference":
    case "footnoteReference":
    case "html":
      return "";
    default:
      return (node.children ?? []).map(inlineText).join("");
  }
};

const tidy = (text) => text.replace(/\s+/g, " ").trim();

// A heading with no closing punctuation would run straight into the next
// sentence, so it gets a full stop to make the voice pause.
const endSentence = (text) => (/[.!?:]$/.test(text) ? text : `${text}.`);

const blocksOf = (node) => {
  switch (node.type) {
    case "heading": {
      const text = tidy(inlineText(node));
      return text ? [endSentence(text)] : [];
    }
    case "paragraph": {
      const text = tidy(
        inlineText(node)
          .split("\n")
          .filter((line) => !isDirective(line.trim()))
          .join(" "),
      );
      return text ? [text] : [];
    }
    // Code, tables, raw HTML (embeds, <audio>, <img>), images, rules and
    // footnote bodies don't make sense spoken.
    case "code":
    case "table":
    case "html":
    case "thematicBreak":
    case "definition":
    case "footnoteDefinition":
    case "yaml":
      return [];
    default:
      return (node.children ?? []).flatMap(blocksOf);
  }
};

export const extractSpeech = (markdown, title) => {
  const tree = unified().use(remarkParse).use(remarkGfm).parse(markdown);
  const blocks = blocksOf(tree).map((b) =>
    /[.!?:;,)"'”’]$/.test(b) ? b : `${b}.`,
  );

  // Most posts open with a heading that repeats the title.
  const heading = endSentence(tidy(title));
  if (blocks[0]?.toLowerCase() === heading.toLowerCase()) blocks.shift();

  return [heading, ...blocks].join("\n\n");
};

const chunk = (text) => {
  const pieces = text
    .split("\n\n")
    .flatMap((block) =>
      block.length <= CHUNK_CHARS
        ? [block]
        : (block.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) ?? [block]),
    );

  const chunks = [];
  let current = "";
  for (const piece of pieces) {
    if (current && current.length + piece.length + 2 > CHUNK_CHARS) {
      chunks.push(current);
      current = "";
    }
    current = current ? `${current}\n\n${piece}` : piece;
  }
  if (current) chunks.push(current);
  return chunks;
};

// ---------------------------------------------------------------------------
// MP3 length, by walking the frame headers

const BITRATES = {
  1: [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320],
  2: [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
};
const SAMPLE_RATES = {
  1: [44100, 48000, 32000],
  2: [22050, 24000, 16000],
  2.5: [11025, 12000, 8000],
};

export const mp3Duration = (buf) => {
  let i = 0;
  // Skip an ID3v2 tag; its size is stored 7 bits to a byte.
  if (buf.toString("latin1", 0, 3) === "ID3") {
    i = 10 + ((buf[6] << 21) | (buf[7] << 14) | (buf[8] << 7) | buf[9]);
  }

  let seconds = 0;
  while (i + 4 <= buf.length) {
    const b1 = buf[i + 1];
    const b2 = buf[i + 2];
    const isSync = buf[i] === 0xff && (b1 & 0xe0) === 0xe0;
    const versionBits = (b1 >> 3) & 3;
    const layerBits = (b1 >> 1) & 3;
    const bitrateIndex = b2 >> 4;
    const rateIndex = (b2 >> 2) & 3;

    if (
      !isSync ||
      versionBits === 1 ||
      layerBits !== 1 || // Layer III only
      bitrateIndex === 0 ||
      bitrateIndex === 15 ||
      rateIndex === 3
    ) {
      i += 1;
      continue;
    }

    const version = versionBits === 3 ? 1 : versionBits === 2 ? 2 : 2.5;
    const bitrate = BITRATES[version === 1 ? 1 : 2][bitrateIndex] * 1000;
    const sampleRate = SAMPLE_RATES[version][rateIndex];
    const samples = version === 1 ? 1152 : 576;
    const padding = (b2 >> 1) & 1;
    const length = Math.floor(((samples / 8) * bitrate) / sampleRate) + padding;

    seconds += samples / sampleRate;
    i += length;
  }
  return Math.round(seconds);
};

// ---------------------------------------------------------------------------
// OpenAI

const speak = async (input, attempt = 1) => {
  const res = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      voice: VOICE,
      input,
      response_format: "mp3",
      // Only the gpt-4o TTS models take a direction on how to read.
      ...(MODEL.startsWith("gpt-") ? { instructions: INSTRUCTIONS } : {}),
    }),
  });

  if (res.ok) return Buffer.from(await res.arrayBuffer());

  const body = await res.text();

  // A 429 is usually a rate limit worth waiting out, but running out of
  // credit comes back as a 429 too, and no amount of waiting fixes that.
  if (/insufficient_quota|credit_balance_exhausted/.test(body)) {
    throw new Error(
      "OpenAI account is out of credit. Add some at " +
        "https://platform.openai.com/settings/organization/billing/ and rerun.",
    );
  }

  if ((res.status === 429 || res.status >= 500) && attempt < 5) {
    await new Promise((r) => setTimeout(r, 2 ** attempt * 1000));
    return speak(input, attempt + 1);
  }
  throw new Error(`OpenAI ${res.status}: ${body}`);
};

// ---------------------------------------------------------------------------

const readManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
  } catch {
    return {};
  }
};

const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

const main = async () => {
  if (!dryRun && !process.env.OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY isn't set. Add it to .env, or pass --dry-run.");
    process.exit(1);
  }

  const manifest = readManifest();
  const seen = new Set();
  let totalChars = 0;

  for (const type of TYPES) {
    const dir = path.join(ROOT, "posts", type);
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".md"))) {
      const slug = file.replace(/\.md$/, "");
      const key = `${type}/${slug}`;
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));

      if (data.finished !== true || data.audio === false) continue;
      seen.add(key);
      if (only.length && !only.includes(key)) continue;

      const text = extractSpeech(content, data.title ?? slug);
      const hash = createHash("sha256")
        .update([MODEL, VOICE, INSTRUCTIONS, text].join("\0"))
        .digest("hex")
        .slice(0, 16);
      const out = path.join(AUDIO_DIR, type, `${slug}.mp3`);

      if (dryRun) {
        totalChars += text.length;
        console.log(`\n===== ${key} (${text.length.toLocaleString()} chars) =====\n`);
        console.log(text);
        continue;
      }

      if (!force && manifest[key]?.hash === hash && fs.existsSync(out)) {
        console.log(`✓ ${key} unchanged`);
        continue;
      }

      const chunks = chunk(text);
      console.log(`… ${key}: ${text.length.toLocaleString()} chars, ${chunks.length} request(s)`);

      const parts = [];
      for (const [n, piece] of chunks.entries()) {
        process.stdout.write(`  ${n + 1}/${chunks.length}\r`);
        parts.push(await speak(piece));
      }
      const audio = Buffer.concat(parts);

      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, audio);

      const duration = mp3Duration(audio);
      manifest[key] = { hash, duration, src: `/audio/${type}/${slug}.mp3` };
      // Saved after every post, so a failure partway keeps what's done.
      fs.writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
      console.log(
        `✓ ${key}: ${formatTime(duration)}, ${(audio.length / 1e6).toFixed(1)} MB`,
      );
    }
  }

  if (dryRun) {
    console.log(`\n${totalChars.toLocaleString()} characters in total.`);
    return;
  }

  // Drop audio for posts that were deleted, unfinished or opted out.
  if (!only.length) {
    for (const key of Object.keys(manifest)) {
      if (seen.has(key)) continue;
      fs.rmSync(path.join(AUDIO_DIR, `${key}.mp3`), { force: true });
      delete manifest[key];
      console.log(`✗ ${key} removed`);
    }
  }

  fs.writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
};

// Only run when called as a script, so the helpers above can be imported.
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
