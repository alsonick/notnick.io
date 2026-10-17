import {
  hideDecorationsHintForGood,
  shouldShowDecorationsHint,
  markDecorationsHintSeen,
  saveDecorationsEnabled,
  readDecorationsEnabled,
  seasonalDecoration,
  hideDecoration,
  showDecoration,
  isMacPlatform,
  Decoration,
} from "../../lib/decorations";
import { useEffect, useRef, useState } from "react";

// Next.js
import { useRouter } from "next/router";

// Same buttons as LongPostThemeNoticePrompt, which shares this corner.
const PRIMARY_BUTTON = `rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white dark:text-black
  outline-none duration-300 focus:ring-4 ring-primary focus:ring-offset-2
  dark:ring-offset-black`;

const SECONDARY_BUTTON = `rounded-lg border border-teal-100 dark:border-teal-900 px-4 py-2
  text-sm font-bold text-gray-600 dark:text-gray-300 outline-none duration-300
  hover:border-primary hover:text-black dark:hover:text-white focus:ring-4 ring-primary
  focus:ring-offset-2 dark:ring-offset-black`;

const KEY = `rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800
  px-1.5 py-0.5 font-sans text-xs font-semibold text-black dark:text-white`;

// Let the page settle before the tip slides in.
const HINT_DELAY_MS = 1500;
// Matches the card's `duration-300`.
const HINT_EXIT_MS = 300;

type HintState = "hidden" | "entering" | "shown" | "leaving";

const isEditable = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

/**
 * The seasonal pumpkins and snow, a keyboard shortcut to switch them off (and
 * back on) with a fade, and a tip in the bottom-right corner that tells the
 * reader about the shortcut. Mounted once for the whole app.
 */
export const Decorations = () => {
  const { query, isReady } = useRouter();
  const [kind, setKind] = useState<Decoration | null>(null);
  const [isMac, setIsMac] = useState(false);
  const [hint, setHint] = useState<HintState>("hidden");
  const [announcement, setAnnouncement] = useState("");
  const enabled = useRef(true);

  // The query (for out-of-season previews) is only known once the router is
  // ready. Readers who ask for reduced motion never get the falling overlay.
  useEffect(() => {
    if (!isReady) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setKind(seasonalDecoration(new Date(), query.decoration));
  }, [isReady, query.decoration]);

  useEffect(() => {
    if (!kind) return;

    setIsMac(isMacPlatform());
    enabled.current = readDecorationsEnabled(kind);
    if (!enabled.current) return;

    showDecoration(kind);

    // A touch screen has no keyboard to use the shortcut with.
    const touchOnly = window.matchMedia(
      "(hover: none) and (pointer: coarse)",
    ).matches;
    if (touchOnly || !shouldShowDecorationsHint(kind)) return;

    const timer = setTimeout(() => {
      markDecorationsHintSeen(kind);
      setHint("entering");
    }, HINT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [kind]);

  // Mounted straight into its final position would pop; flipping to "shown"
  // on the next frame lets the transition play it in from below.
  useEffect(() => {
    if (hint === "entering") {
      const frame = requestAnimationFrame(() => setHint("shown"));
      return () => cancelAnimationFrame(frame);
    }
    if (hint === "leaving") {
      const timer = setTimeout(() => setHint("hidden"), HINT_EXIT_MS);
      return () => clearTimeout(timer);
    }
  }, [hint]);

  const dismissHint = (forGood: boolean) => {
    if (forGood && kind) hideDecorationsHintForGood(kind);
    setHint((current) => (current === "hidden" ? current : "leaving"));
  };

  // Control+D on macOS. Ctrl+D is the bookmark shortcut in every Windows and
  // Linux browser (and Ctrl+Shift+D bookmarks all tabs), so it's Ctrl+Alt+D
  // there. Ignored while typing, where macOS uses Control+D to delete.
  useEffect(() => {
    if (!kind) return;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.code !== "KeyD" || !e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.altKey !== !isMac || isEditable(e.target)) return;

      e.preventDefault();
      enabled.current = !enabled.current;
      saveDecorationsEnabled(kind, enabled.current);

      if (enabled.current) showDecoration(kind);
      else hideDecoration();

      setAnnouncement(
        enabled.current ? "Decorations turned on" : "Decorations turned off",
      );
      // They know the shortcut now, so the tip has done its job.
      hideDecorationsHintForGood(kind);
      setHint((current) => (current === "hidden" ? current : "leaving"));
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [kind, isMac]);

  if (!kind) return null;

  const keys = isMac ? ["Control", "D"] : ["Ctrl", "Alt", "D"];

  return (
    <>
      <p className="sr-only" role="status">
        {announcement}
      </p>
      {hint === "hidden" ? null : (
        <div
          className={`liquid-glass fixed right-4 z-50 w-[min(20rem,calc(100vw-2rem))]
          rounded-lg p-4 duration-300 ${
            hint === "shown"
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
          // Sits above the rags mini player while that's open, which would
          // otherwise cover its volume and speed controls.
          style={{ bottom: "var(--bottom-bar-inset, 1rem)" }}
          aria-label="Seasonal decorations tip"
          role="region"
        >
          <p className="text-sm font-bold text-black dark:text-white">
            {kind === "halloween"
              ? "Not a fan of the pumpkins? 🎃"
              : "Not a fan of the snow? ❄️"}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Press{" "}
            {keys.map((key, i) => (
              <span key={key}>
                {i > 0 ? " + " : null}
                <kbd className={KEY}>{key}</kbd>
              </span>
            ))}{" "}
            to turn the decorations off, and again to bring them back.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={() => dismissHint(false)}
              title="Close this tip."
              className={PRIMARY_BUTTON}
            >
              Got it
            </button>
            <button
              onClick={() => dismissHint(true)}
              title="Never show this tip again."
              className={SECONDARY_BUTTON}
            >
              Don&apos;t show again
            </button>
          </div>
        </div>
      )}
    </>
  );
};
