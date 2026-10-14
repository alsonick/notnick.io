export type Decoration = "halloween" | "christmas";

const CONTAINER_ID = "decorations";
// Keep in sync with the `#decorations` opacity transition in globals.css.
const FADE_MS = 700;

// Each season keeps its own on/off choice and its own tip, so turning the
// pumpkins off in October still lets the snow (and its tip) show in December.
const enabledKey = (kind: Decoration) => `decorations-${kind}`;
const hintKey = (kind: Decoration) => `decorations-hint-${kind}`;
const hintSeenKey = (kind: Decoration) => `decorations-hint-seen-${kind}`;

const SNOW_COLOURS = [
  "radial-gradient(circle at top left, #dcf2fd, #60b4f2)",
  "#dbf2fd",
  "#d8f8ff",
  "#b8ddfa",
];

/**
 * Pumpkins through October and snow through December. `?decoration=halloween`
 * or `?decoration=christmas` previews either one out of season.
 */
export const seasonalDecoration = (
  date: Date,
  override: unknown,
): Decoration | null => {
  if (override === "halloween" || override === "christmas") return override;

  const month = date.getMonth() + 1;
  if (month === 10) return "halloween";
  if (month === 12) return "christmas";
  return null;
};

/** macOS gets Control+D; everywhere else Ctrl+D is the browser's bookmark key. */
export const isMacPlatform = () =>
  /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent);

export const readDecorationsEnabled = (kind: Decoration) => {
  try {
    return window.localStorage.getItem(enabledKey(kind)) !== "off";
  } catch {
    // localStorage unavailable — decorations stay on, as they always were.
    return true;
  }
};

export const saveDecorationsEnabled = (kind: Decoration, enabled: boolean) => {
  try {
    if (enabled) window.localStorage.removeItem(enabledKey(kind));
    else window.localStorage.setItem(enabledKey(kind), "off");
  } catch {
    // localStorage unavailable — the choice only holds for this page view.
  }
};

/**
 * The shortcut tip shows once per visit until the reader asks never to see it
 * again (or uses the shortcut, which shows they already know it).
 */
export const shouldShowDecorationsHint = (kind: Decoration) => {
  try {
    return (
      window.localStorage.getItem(hintKey(kind)) !== "hide" &&
      window.sessionStorage.getItem(hintSeenKey(kind)) === null
    );
  } catch {
    return false;
  }
};

export const markDecorationsHintSeen = (kind: Decoration) => {
  try {
    window.sessionStorage.setItem(hintSeenKey(kind), "1");
  } catch {}
};

export const hideDecorationsHintForGood = (kind: Decoration) => {
  try {
    window.localStorage.setItem(hintKey(kind), "hide");
  } catch {}
};

const randomInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

// Every piece falls on the same keyframes; these give each one its own column,
// pace, drift and spin.
const fallingPiece = (spin: number) => {
  const piece = document.createElement("span");
  piece.style.animationDuration = `${randomInRange(10, 30).toFixed(1)}s`;
  // A negative delay starts each piece part-way down, so the screen is already
  // full rather than waiting for the first ones to fall in.
  piece.style.animationDelay = `-${randomInRange(0, 30).toFixed(1)}s`;
  piece.style.setProperty("--x", `${randomInRange(0, 100).toFixed(2)}vw`);
  piece.style.setProperty("--drift", `${randomInRange(-10, 10).toFixed(2)}vw`);
  piece.style.setProperty("--spin", `${spin.toFixed(0)}deg`);
  return piece;
};

const pumpkin = () => {
  const piece = fallingPiece(randomInRange(-180, 180));
  piece.textContent = "🎃";
  piece.style.fontSize = `${randomInRange(14, 30).toFixed(0)}px`;
  piece.style.opacity = randomInRange(0.4, 1).toFixed(2);
  return piece;
};

const snowflake = () => {
  const piece = fallingPiece(0);
  const size = `${randomInRange(2, 10).toFixed(1)}px`;
  piece.className = "snowflake";
  piece.style.width = size;
  piece.style.height = size;
  piece.style.background =
    SNOW_COLOURS[Math.floor(Math.random() * SNOW_COLOURS.length)];
  piece.style.opacity = randomInRange(0.3, 1).toFixed(2);
  return piece;
};

const build = (kind: Decoration) => {
  const container = document.createElement("div");
  container.id = CONTAINER_ID;
  container.dataset.decoration = kind;
  container.setAttribute("aria-hidden", "true");

  // Fewer on a narrow screen, where the full set would crowd out the text.
  const count =
    kind === "halloween"
      ? Math.min(30, Math.max(12, Math.round(window.innerWidth / 40)))
      : Math.min(200, Math.max(60, Math.round(window.innerWidth / 8)));

  for (let i = 0; i < count; i++) {
    container.appendChild(kind === "halloween" ? pumpkin() : snowflake());
  }

  return container;
};

let hideTimer: ReturnType<typeof setTimeout> | undefined;

/** Fades the overlay in, building it the first time. */
export const showDecoration = (kind: Decoration) => {
  clearTimeout(hideTimer);

  let container = document.getElementById(CONTAINER_ID);
  if (container && container.dataset.decoration !== kind) {
    container.remove();
    container = null;
  }
  if (!container) {
    container = build(kind);
    container.dataset.hidden = "";
    document.body.appendChild(container);
  }

  container.style.display = "";
  // Flush the hidden state first, or the browser skips straight to visible.
  void container.offsetWidth;
  delete container.dataset.hidden;
};

/** Fades the overlay out, then takes it out of rendering so it costs nothing. */
export const hideDecoration = () => {
  const container = document.getElementById(CONTAINER_ID);
  if (!container) return;

  container.dataset.hidden = "";
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    container.style.display = "none";
  }, FADE_MS);
};
