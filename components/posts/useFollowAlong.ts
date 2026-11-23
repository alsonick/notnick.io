import { useCallback, useEffect, useRef, useState } from "react";
import { alignWords } from "../../lib/utils/align-words";

/**
 * Highlighting a post's words as they're read aloud, and keeping them on
 * screen.
 *
 * The timings come from `yarn audio`: every word of the spoken text with when
 * it starts. Those words are lined up against the words actually on the page
 * (the title, then the post's own HTML, skipping code, tables, captions and
 * embeds, which aren't read), giving each one a Range. The CSS Custom
 * Highlight API paints the current sentence and word without touching the
 * post's markup.
 */

interface Timings {
  words: string[];
  starts: number[];
  /** Index of the first word of each sentence. */
  sentences: number[];
}

/**
 * What's painted at one moment, as four layers that never overlap, so each
 * sets everything about its text and none depends on how browsers stack
 * highlights (they don't agree).
 */
interface Layers {
  /** Read, before the current sentence. */
  read: Range[];
  /** Read, in the current sentence. */
  sentenceRead: Range | null;
  word: Range | null;
  /** Still to come in the current sentence. */
  sentenceRest: Range | null;
}

const NO_LAYERS: Layers = {
  read: [],
  sentenceRead: null,
  word: null,
  sentenceRest: null,
};

interface WordMap {
  words: (Range | null)[];
  sentences: (Range | null)[];
  roots: HTMLElement[];
  layersAt: (word: number, sentence: number) => Layers;
}

// What's on the page but never read aloud.
const SKIP =
  "pre, table, script, style, svg, button, audio, video, iframe, img, " +
  ".post-caption, .line-numbers, [aria-hidden='true']";

// Text either side of these doesn't run together into one word.
const BLOCK_TAGS = new Set([
  "P", "DIV", "LI", "UL", "OL", "BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5",
  "H6", "BR", "HR", "DT", "DD", "SECTION", "FIGURE", "FIGCAPTION", "DETAILS",
  "SUMMARY",
]);

// The names globals.css styles, one per layer.
const HIGHLIGHTS = {
  read: "follow-read",
  sentenceRead: "follow-sentence-read",
  word: "follow-word",
  sentenceRest: "follow-sentence",
} as const;

const supportsHighlights = () =>
  typeof CSS !== "undefined" && "highlights" in CSS;

/** The title, then each piece of the post's HTML, in page order. */
const getRoots = () =>
  Array.from(
    document.querySelectorAll<HTMLElement>("[data-follow-root]"),
  ).flatMap((el) =>
    el.tagName === "ARTICLE"
      ? Array.from(el.querySelectorAll<HTMLElement>("[data-post-html]"))
      : [el],
  );

/** Every word on the page that could be read aloud, with where it sits. */
const readPage = (roots: HTMLElement[]) => {
  let text = "";
  // Where each text node starts in `text`.
  const nodes: { node: Text; at: number }[] = [];

  const walk = (parent: Node) => {
    parent.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        nodes.push({ node: child as Text, at: text.length });
        text += (child as Text).data;
        return;
      }
      if (!(child instanceof HTMLElement) || child.matches(SKIP)) return;
      const isBlock = BLOCK_TAGS.has(child.tagName);
      if (isBlock) text += " ";
      walk(child);
      if (isBlock) text += " ";
    });
  };
  roots.forEach((root) => {
    walk(root);
    text += " ";
  });

  // The text node holding character `index`, and how far into it.
  const locate = (index: number) => {
    let lo = 0;
    let hi = nodes.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (nodes[mid].at <= index) lo = mid;
      else hi = mid - 1;
    }
    return { node: nodes[lo].node, offset: index - nodes[lo].at };
  };

  const words = Array.from(text.matchAll(/\S+/g), (match) => {
    const start = match.index!;
    return { text: match[0], start, end: start + match[0].length };
  });

  const rangeOf = (word: { start: number; end: number }) => {
    const from = locate(word.start);
    const to = locate(word.end - 1);
    const range = document.createRange();
    range.setStart(from.node, from.offset);
    range.setEnd(to.node, to.offset + 1);
    return range;
  };

  return { words, rangeOf };
};

const mapWords = (timings: Timings): WordMap => {
  const roots = getRoots();
  const page = readPage(roots);
  const pairs = alignWords(
    timings.words,
    page.words.map((w) => w.text),
  );
  const words = Array.from(pairs, (j) =>
    j === -1 ? null : page.rangeOf(page.words[j]),
  );

  // From the first word of each sentence found on the page to its last.
  const sentences = timings.sentences.map((first, s) => {
    const end = timings.sentences[s + 1] ?? words.length;
    let from: Range | null = null;
    let to: Range | null = null;
    for (let i = first; i < end; i++) {
      if (!words[i]) continue;
      from ??= words[i];
      to = words[i];
    }
    if (!from || !to) return null;
    const range = document.createRange();
    range.setStart(from.startContainer, from.startOffset);
    range.setEnd(to.endContainer, to.endOffset);
    return range;
  });

  // The word to mark while each word is read. One that isn't on the page (an
  // emoji) keeps the last one in its sentence that is, or the first if it
  // opens the sentence.
  const shown = new Int32Array(words.length).fill(-1);
  timings.sentences.forEach((first, s) => {
    const end = timings.sentences[s + 1] ?? words.length;
    let last = -1;
    for (let i = first; i < end; i++) {
      if (words[i]) last = i;
      shown[i] = last;
    }
    let firstOnPage = first;
    while (firstOnPage < end && !words[firstOnPage]) firstOnPage++;
    if (firstOnPage < end) shown.fill(firstOnPage, first, firstOnPage);
  });

  // Everything before `point`: whole roots up to the one it's in, then that
  // one up to it. Kept to the roots, so what sits between them (the author
  // line, the listen button, embeds) is never dimmed.
  const readUpTo = (point: Point): Range[] => {
    const root = roots.findIndex((el) => el.contains(point.node));
    if (root === -1) return [];
    const ranges = roots.slice(0, root).map((element) => {
      const range = document.createRange();
      range.selectNodeContents(element);
      return range;
    });
    const partial = between({ node: roots[root], offset: 0 }, point);
    if (partial) ranges.push(partial);
    return ranges;
  };

  const layersAt = (word: number, sentence: number): Layers => {
    if (word < 0) return NO_LAYERS;

    const sentenceRange = sentences[sentence] ?? null;
    const current = shown[word] === -1 ? null : words[shown[word]];

    // None of this sentence is on the page (an emoji on its own), so all
    // that's done is everything up to the last word that is.
    if (!sentenceRange || !current) {
      let last = word - 1;
      while (last >= 0 && !words[last]) last--;
      return {
        ...NO_LAYERS,
        read: last === -1 ? [] : readUpTo(endOf(words[last]!)),
      };
    }

    return {
      read: readUpTo(startOf(sentenceRange)),
      sentenceRead: between(startOf(sentenceRange), startOf(current)),
      word: current,
      sentenceRest: between(endOf(current), endOf(sentenceRange)),
    };
  };

  return { words, sentences, roots, layersAt };
};

type Point = { node: Node; offset: number };

const startOf = (range: Range): Point => ({
  node: range.startContainer,
  offset: range.startOffset,
});

const endOf = (range: Range): Point => ({
  node: range.endContainer,
  offset: range.endOffset,
});

/** From one point to another, or null if there's nothing between them. */
const between = (from: Point, to: Point) => {
  const range = document.createRange();
  range.setStart(from.node, from.offset);
  // Collapses onto `to` if it comes first.
  range.setEnd(to.node, to.offset);
  return range.collapsed ? null : range;
};

/** The last item in `sorted` that's no more than `value`, or -1. */
const lastAtOrBefore = (sorted: number[], value: number) => {
  let lo = 0;
  let hi = sorted.length - 1;
  let found = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (sorted[mid] <= value) {
      found = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return found;
};

// Where on screen the sentence being read is kept: below the nav, above the
// mini player, with some room either side. It's brought back to `ANCHOR` of
// the way down when it leaves.
const TOP_MARGIN = 120;
const BOTTOM_MARGIN = 0.15;
const ANCHOR = 0.3;

// The transcriber stamps a word when its sound begins, and the highlight
// arriving a frame or two after that reads as lagging. Running a touch ahead
// lands it with the voice.
const LEAD = 0.08;

// How long the page's own smooth scroll is given before any scrolling is
// taken to be the reader's, if the browser doesn't say when it ended.
const AUTO_SCROLL_MS = 1000;

const BLOCKS =
  "p, li, h1, h2, h3, h4, h5, h6, blockquote, dd, dt, figcaption, [data-post-html]";

/**
 * Makes the text in these blocks repaint. Browsers don't reliably redraw text
 * when a highlight moves off it, leaving words grey that shouldn't be, or
 * slivers of a highlight behind. A change to text-shadow always redraws the
 * text, so each block flips between two invisible ones (see
 * [data-follow-repaint] in globals.css). Each block flips its own, since a
 * block inside another keeps its value whatever the outer one does.
 */
const flip = (blocks: Iterable<Element>) => {
  for (const block of blocks) {
    const next = block.getAttribute("data-follow-repaint") === "a" ? "b" : "a";
    block.setAttribute("data-follow-repaint", next);
  }
};

/** The blocks with text in any of these ranges. */
const blocksIn = (ranges: (Range | null)[]) => {
  const blocks = new Set<Element>();
  ranges.forEach((range) => {
    if (!range) return;
    const node = range.commonAncestorContainer;
    const element = node instanceof Element ? node : node.parentElement;
    const container = element?.closest(BLOCKS) ?? element;
    if (!container) return;
    blocks.add(container);
    container.querySelectorAll(BLOCKS).forEach((block) => {
      if (range.intersectsNode(block)) blocks.add(block);
    });
  });
  return blocks;
};

/** Every block in the title and post. */
const allBlocks = (roots: HTMLElement[]) =>
  roots.flatMap((root) => [root, ...Array.from(root.querySelectorAll(BLOCKS))]);

const layerRanges = (layers: Layers) => [
  layers.sentenceRead,
  layers.word,
  layers.sentenceRest,
];

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const bottomInset = () =>
  parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--bottom-bar-inset",
    ),
  ) || 0;

/** Which way the current sentence is, if it's off screen. */
const offScreen = (range: Range): "up" | "down" | null => {
  const rect = range.getBoundingClientRect();
  if (rect.bottom < 0) return "up";
  if (rect.top > window.innerHeight - bottomInset()) return "down";
  return null;
};

interface Options {
  audio: HTMLAudioElement | null;
  /** The timings file, from the audio manifest. */
  src: string | null | undefined;
  enabled: boolean;
}

export const useFollowAlong = ({ audio, src, enabled }: Options) => {
  const [timings, setTimings] = useState<Timings | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // The reader scrolled away, so the page stops following until they ask.
  const [isDetached, setIsDetached] = useState(false);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const mapRef = useRef<WordMap | null>(null);
  const sentenceRef = useRef(-1);
  // Until when scroll events are the page's own smooth scrolling.
  const autoScrollUntilRef = useRef(0);
  // Mirrors isDetached for the playback loop, which shouldn't re-run on it.
  const detachedRef = useRef(false);

  const setDetached = useCallback((detached: boolean) => {
    detachedRef.current = detached;
    setIsDetached(detached);
    if (!detached) setDirection(null);
  }, []);

  // Only fetched once someone turns it on.
  useEffect(() => {
    if (!enabled || !src || timings) return;
    let cancelled = false;
    setIsLoading(true);
    fetch(src)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data) setTimings(data);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [enabled, src, timings]);

  const scrollToSentence = useCallback((force = false) => {
    const map = mapRef.current;
    const range = map?.sentences[sentenceRef.current];
    if (!range) return;

    const rect = range.getBoundingClientRect();
    const bottom = window.innerHeight - bottomInset();
    const inView =
      rect.top >= TOP_MARGIN &&
      rect.bottom <= bottom - window.innerHeight * BOTTOM_MARGIN;
    if (inView && !force) return;

    autoScrollUntilRef.current = performance.now() + AUTO_SCROLL_MS;
    window.scrollTo({
      top: window.scrollY + rect.top - window.innerHeight * ANCHOR,
      behavior: reducedMotion() ? "auto" : "smooth",
    });
  }, []);

  const resume = useCallback(() => {
    setDetached(false);
    scrollToSentence(true);
  }, [setDetached, scrollToSentence]);

  // Following along: highlight and scroll as the audio plays.
  useEffect(() => {
    if (!enabled || !timings || !audio) return;

    mapRef.current = mapWords(timings);
    const map = mapRef.current;

    const canHighlight = supportsHighlights();

    let wordIndex = -1;
    let layers = NO_LAYERS;
    sentenceRef.current = -1;
    let frame = 0;

    const update = () => {
      // Nothing to show before the first press of play.
      const started = !audio.paused || audio.currentTime > 0;
      const word = started
        ? lastAtOrBefore(timings.starts, audio.currentTime + LEAD)
        : -1;
      if (word === wordIndex) return;

      // Moving on by a word only changes the text around the old and new
      // word. Anything bigger (a seek, a tab that was in the background)
      // can change any of it.
      const jumped = Math.abs(word - wordIndex) > 1;
      wordIndex = word;

      const sentence =
        word === -1 ? -1 : lastAtOrBefore(timings.sentences, word);
      const sentenceChanged = sentence !== sentenceRef.current;
      sentenceRef.current = sentence;

      const before = layers;
      layers = map.layersAt(word, sentence);

      if (canHighlight) {
        // Fresh Highlights each time rather than refilling the registered
        // ones, which browsers are even less reliable about repainting.
        (Object.keys(HIGHLIGHTS) as (keyof Layers)[]).forEach((layer) => {
          const value = layers[layer];
          const ranges = Array.isArray(value) ? value : value ? [value] : [];
          CSS.highlights.set(HIGHLIGHTS[layer], new Highlight(...ranges));
        });
        flip(
          jumped
            ? allBlocks(map.roots)
            : blocksIn([...layerRanges(before), ...layerRanges(layers)]),
        );
      }

      if (!sentenceChanged) return;
      const sentenceRange = map.sentences[sentence];
      if (!detachedRef.current) scrollToSentence();
      else if (sentenceRange) setDirection(offScreen(sentenceRange));
    };

    const follow = () => {
      update();
      frame = requestAnimationFrame(follow);
    };
    const start = () => {
      cancelAnimationFrame(frame);
      follow();
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      update();
    };

    audio.addEventListener("play", start);
    audio.addEventListener("pause", stop);
    audio.addEventListener("seeked", update);
    if (audio.paused) update();
    else start();

    return () => {
      cancelAnimationFrame(frame);
      audio.removeEventListener("play", start);
      audio.removeEventListener("pause", stop);
      audio.removeEventListener("seeked", update);
      if (canHighlight) {
        Object.values(HIGHLIGHTS).forEach((name) =>
          CSS.highlights.delete(name),
        );
        // Taking the attribute off is a change too, so this repaints
        // everything one last time and leaves the markup as it was.
        document
          .querySelectorAll("[data-follow-repaint]")
          .forEach((el) => el.removeAttribute("data-follow-repaint"));
      }
      mapRef.current = null;
      sentenceRef.current = -1;
    };
  }, [enabled, timings, audio, scrollToSentence]);

  // Scrolling by hand (wheel, touch, keys, dragging the scrollbar, jumping to
  // a heading) means the reader wants to look elsewhere, so stop pulling the
  // page back. Any scroll the page didn't start itself counts.
  useEffect(() => {
    if (!enabled || !timings) return;

    const detach = () => {
      if (sentenceRef.current === -1 || detachedRef.current) return;
      setDetached(true);
    };
    const onScroll = () => {
      if (performance.now() < autoScrollUntilRef.current) return;
      detach();
    };
    // Reaching for the wheel or the screen mid-scroll takes over from the
    // page's own scrolling straight away.
    const onInput = () => {
      autoScrollUntilRef.current = 0;
    };
    const onScrollEnd = () => {
      autoScrollUntilRef.current = 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("wheel", onInput, { passive: true });
    window.addEventListener("touchstart", onInput, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("wheel", onInput);
      window.removeEventListener("touchstart", onInput);
    };
  }, [enabled, timings, setDetached]);

  // While detached, keep track of which way the reading is, for the button
  // that brings it back. Scrolling it back into view by hand (or never
  // scrolling it out) carries on following.
  useEffect(() => {
    if (!isDetached) return;

    let frame = 0;
    let settle = 0;
    const check = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const range = mapRef.current?.sentences[sentenceRef.current];
        if (!range) return;
        const where = offScreen(range);
        setDirection(where);
        // Wait for the scroll to stop, so a reader flicking past the
        // sentence isn't caught by it on the way.
        clearTimeout(settle);
        if (!where) settle = window.setTimeout(() => setDetached(false), 400);
      });
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(settle);
      window.removeEventListener("scroll", check);
    };
  }, [isDetached, setDetached]);

  // Click (or tap) a word in the post to listen from there.
  useEffect(() => {
    if (!enabled || !timings || !audio) return;

    const onClick = (e: MouseEvent) => {
      const map = mapRef.current;
      if (!map || e.button !== 0 || e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      // The post's own text and title only, not the embeds between them.
      if (
        !target?.closest("[data-post-html], h1[data-follow-root]") ||
        target.closest(
          "a, button, input, label, summary, h2, h3, h4, [role=button]",
        )
      ) {
        return;
      }
      // Selecting text isn't asking to skip.
      if (!window.getSelection()?.isCollapsed) return;

      const caret = caretAt(e.clientX, e.clientY);
      if (!caret) return;

      const index = wordAt(map.words, caret.node, caret.offset);
      if (index === -1) return;

      audio.currentTime = timings.starts[index];
      setDetached(false);
      if (audio.paused) audio.play().catch(() => {});
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [enabled, timings, audio, setDetached]);

  // Turning it off leaves nothing behind.
  useEffect(() => {
    if (!enabled) setDetached(false);
  }, [enabled, setDetached]);

  return {
    isReady: Boolean(timings),
    isLoading,
    /** Set when the reading has scrolled out of view. */
    offScreen: isDetached ? direction : null,
    resume,
  };
};

// Both are optional here: Safari before 26 only has the older
// caretRangeFromPoint, which Firefox has never had.
type CaretDocument = {
  caretPositionFromPoint?: (
    x: number,
    y: number,
  ) => { offsetNode: Node; offset: number } | null;
  caretRangeFromPoint?: (x: number, y: number) => Range | null;
};

const caretAt = (x: number, y: number) => {
  const doc = document as unknown as CaretDocument;
  if (doc.caretPositionFromPoint) {
    const position = doc.caretPositionFromPoint(x, y);
    return position
      ? { node: position.offsetNode, offset: position.offset }
      : null;
  }
  const range = doc.caretRangeFromPoint?.(x, y);
  return range
    ? { node: range.startContainer, offset: range.startOffset }
    : null;
};

/**
 * The word holding the point, or failing that the next one after it (a click
 * in the gap between two words starts from the second).
 */
const wordAt = (words: (Range | null)[], node: Node, offset: number) => {
  for (let i = 0; i < words.length; i++) {
    const range = words[i];
    // comparePoint: -1 before the range, 0 inside, 1 after.
    if (range && range.comparePoint(node, offset) <= 0) return i;
  }
  return -1;
};
