// Turns each finished blog post and note into an MP3 read aloud by OpenAI's
// text-to-speech, so readers can listen instead.
//
//   yarn audio                    every post whose text changed since last run
//   yarn audio blog/some-slug     just that post (any number of them)
//   yarn audio --dry-run          print what would be read, call nothing
//   yarn audio --force            regenerate even if the text hasn't changed
//   yarn audio --no-timings       skip the word timings (see below)
//
// Needs OPENAI_API_KEY in .env. A post can opt out with `audio: false` in its
// frontmatter. The audio lands in public/audio/<type>/<slug>.mp3 and its
// length in lib/data/post-audio.json, which the post page reads.
//
// Each recording is then transcribed with word timestamps, and the result
// saved next to it as <slug>.json, which is what lets the post page highlight
// the words as they're read ("Follow along"). Posts whose audio already
// exists only get this step, so adding timings never re-records anything.

import { createHash } from "node:crypto";
import { pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { unified } from "unified";
import matter from "gray-matter";
import "dotenv/config";
// TypeScript, run by Node's built-in type stripping. Shared with the post page.
import { alignWords } from "../lib/utils/align-words.ts";

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
const noTimings = args.includes("--no-timings");
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

// Section metadata (see lib/remark/section-meta.ts), which the site hides:
//
//   ---
//   finished: true
//   ---
//
// That parses as rule / paragraph / rule, or, with no blank lines, as rule /
// setext heading (the closing `---` becomes the heading's underline). Returns
// how many nodes the fence spans, or 0 if `children[start]` isn't one.
const META_LINE = /^[\w-]+\s*:\s*.+$/;

const metaFenceLength = (children, start) => {
  if (children[start]?.type !== "thematicBreak") return 0;

  let sawMeta = false;
  for (let j = start + 1; j <= start + 5 && j < children.length; j++) {
    const node = children[j];
    if (node.type === "thematicBreak") return sawMeta ? j - start + 1 : 0;
    if (node.type !== "paragraph" && node.type !== "heading") return 0;

    const lines = inlineText(node)
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    if (!lines.length || !lines.every((line) => META_LINE.test(line))) return 0;
    sawMeta = true;
    if (node.type === "heading") return j - start + 1;
  }
  return 0;
};

const childBlocks = (children = []) => {
  const blocks = [];
  for (let i = 0; i < children.length; i++) {
    const skip = metaFenceLength(children, i);
    if (skip) {
      i += skip - 1;
      continue;
    }
    blocks.push(...blocksOf(children[i]));
  }
  return blocks;
};

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
      return childBlocks(node.children);
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

/** Every frame in the file: where it starts, how long it is, and its length in seconds. */
export const mp3Frames = (buf) => {
  const frames = [];
  let i = 0;
  // Skip an ID3v2 tag; its size is stored 7 bits to a byte.
  if (buf.toString("latin1", 0, 3) === "ID3") {
    i = 10 + ((buf[6] << 21) | (buf[7] << 14) | (buf[8] << 7) | buf[9]);
  }

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

    frames.push({ offset: i, length, seconds: samples / sampleRate });
    i += length;
  }
  return frames;
};

export const mp3Duration = (buf) =>
  Math.round(mp3Frames(buf).reduce((total, f) => total + f.seconds, 0));

/**
 * The file cut at frame boundaries into pieces of at most `maxBytes`, each
 * with how far into the whole file it starts.
 */
export const splitMp3 = (buf, maxBytes) => {
  const pieces = [];
  let start = null;
  let end = 0;
  let at = 0;
  let pieceAt = 0;

  for (const frame of mp3Frames(buf)) {
    if (start !== null && frame.offset + frame.length - start > maxBytes) {
      pieces.push({ buf: buf.subarray(start, end), at: pieceAt });
      start = null;
    }
    if (start === null) {
      start = frame.offset;
      pieceAt = at;
    }
    end = frame.offset + frame.length;
    at += frame.seconds;
  }
  if (start !== null) pieces.push({ buf: buf.subarray(start, end), at: pieceAt });
  return pieces;
};

// ---------------------------------------------------------------------------
// OpenAI

// `makeBody` is called again on each retry, since a form can't be resent.
const openai = async (endpoint, makeBody, attempt = 1) => {
  const body = makeBody();
  const res = await fetch(`https://api.openai.com/v1/${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      ...(typeof body === "string" ? { "Content-Type": "application/json" } : {}),
    },
    body,
  });

  if (res.ok) return res;

  const text = await res.text();

  // A 429 is usually a rate limit worth waiting out, but running out of
  // credit comes back as a 429 too, and no amount of waiting fixes that.
  if (/insufficient_quota|credit_balance_exhausted/.test(text)) {
    throw new Error(
      "OpenAI account is out of credit. Add some at " +
        "https://platform.openai.com/settings/organization/billing/ and rerun.",
    );
  }

  if ((res.status === 429 || res.status >= 500) && attempt < 5) {
    await new Promise((r) => setTimeout(r, 2 ** attempt * 1000));
    return openai(endpoint, makeBody, attempt + 1);
  }
  throw new Error(`OpenAI ${res.status}: ${text}`);
};

const speak = async (input) => {
  const res = await openai("audio/speech", () =>
    JSON.stringify({
      model: MODEL,
      voice: VOICE,
      input,
      response_format: "mp3",
      // Only the gpt-4o TTS models take a direction on how to read.
      ...(MODEL.startsWith("gpt-") ? { instructions: INSTRUCTIONS } : {}),
    }),
  );
  return Buffer.from(await res.arrayBuffer());
};

// The transcription endpoint takes files up to 25 MB.
const MAX_UPLOAD = 24 * 1024 * 1024;

/**
 * When each word is heard in the recording. Only whisper-1 gives timestamps
 * per word. It's told nothing about the text: its job is the timing, and the
 * words it hears are lined back up with the post's own afterwards.
 */
const transcribe = async (audio) => {
  const heard = [];
  for (const piece of splitMp3(audio, MAX_UPLOAD)) {
    const res = await openai("audio/transcriptions", () => {
      const form = new FormData();
      form.append("file", new Blob([piece.buf], { type: "audio/mpeg" }), "audio.mp3");
      form.append("model", "whisper-1");
      form.append("response_format", "verbose_json");
      form.append("timestamp_granularities[]", "word");
      return form;
    });
    const { words = [] } = await res.json();
    for (const w of words) heard.push({ word: w.word, start: w.start + piece.at });
  }
  return heard;
};

// A word that ends a sentence: "done.", "really?!", "(see above).", "“no.”"
const SENTENCE_END = /[.!?]["'”’)\]]*$/;

/**
 * The timings the post page follows along with: each word of the spoken
 * text, when it starts, and which words start a sentence. Words the
 * transcriber heard differently (numbers, names) are given times spread
 * evenly between their neighbours.
 */
export const buildTimings = (text, heard, duration) => {
  const blocks = text.split("\n\n").map((b) => b.split(/\s+/).filter(Boolean));
  const words = blocks.flat();

  const sentences = [];
  let index = 0;
  for (const block of blocks) {
    block.forEach((word, i) => {
      if (i === 0 || SENTENCE_END.test(block[i - 1])) sentences.push(index + i);
    });
    index += block.length;
  }

  const pairs = alignWords(
    words,
    heard.map((h) => h.word),
  );
  const starts = Array.from(pairs, (j) => (j === -1 ? null : heard[j].start));

  // Fill the gaps, with the start and end of the recording as the outer edges.
  let before = -1;
  for (let i = 0; i <= starts.length; i++) {
    if (i < starts.length && starts[i] === null) continue;
    const from = before === -1 ? 0 : starts[before];
    const to = i === starts.length ? duration : starts[i];
    for (let k = before + 1; k < i; k++) {
      starts[k] = from + ((to - from) * (k - before)) / (i - before);
    }
    before = i;
  }

  // Whisper occasionally puts a word a touch before the one it follows.
  for (let i = 1; i < starts.length; i++) {
    starts[i] = Math.max(starts[i], starts[i - 1]);
  }

  return {
    words,
    starts: starts.map((s) => Math.round(s * 100) / 100),
    sentences,
    matched: pairs.filter((j) => j !== -1).length / Math.max(1, words.length),
  };
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

      const timingsOut = path.join(AUDIO_DIR, type, `${slug}.json`);
      const hasAudio = manifest[key]?.hash === hash && fs.existsSync(out);
      const hasTimings =
        manifest[key]?.timingsFor === hash && fs.existsSync(timingsOut);

      if (!force && hasAudio && (hasTimings || noTimings)) {
        console.log(`✓ ${key} unchanged`);
        continue;
      }

      let audio;
      if (!force && hasAudio) {
        audio = fs.readFileSync(out);
      } else {
        const chunks = chunk(text);
        console.log(`… ${key}: ${text.length.toLocaleString()} chars, ${chunks.length} request(s)`);

        const parts = [];
        for (const [n, piece] of chunks.entries()) {
          process.stdout.write(`  ${n + 1}/${chunks.length}\r`);
          parts.push(await speak(piece));
        }
        audio = Buffer.concat(parts);

        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.writeFileSync(out, audio);

        const duration = mp3Duration(audio);
        manifest[key] = { hash, duration, src: `/audio/${type}/${slug}.mp3` };
        // Saved after every step, so a failure partway keeps what's done.
        fs.writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
        console.log(
          `✓ ${key}: ${formatTime(duration)}, ${(audio.length / 1e6).toFixed(1)} MB`,
        );
      }

      if (noTimings) continue;

      console.log(`… ${key}: timing each word`);
      const heard = await transcribe(audio);
      const frames = mp3Frames(audio);
      const seconds = frames.reduce((total, f) => total + f.seconds, 0);
      const { matched, ...timings } = buildTimings(text, heard, seconds);

      fs.writeFileSync(timingsOut, JSON.stringify(timings));
      manifest[key] = {
        ...manifest[key],
        timings: `/audio/${type}/${slug}.json`,
        timingsFor: hash,
      };
      fs.writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
      console.log(
        `✓ ${key}: ${timings.words.length.toLocaleString()} words timed, ` +
          `${Math.round(matched * 100)}% matched by ear`,
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
      fs.rmSync(path.join(AUDIO_DIR, `${key}.json`), { force: true });
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
