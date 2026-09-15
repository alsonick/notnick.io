const STORAGE_KEY = "long-post-theme-notice";

/** An answer the reader has actually given, and the only thing ever stored. */
export type LongPostNoticeAnswer = "show" | "hide";

/**
 * What the reader has said about the long-post theme notice. `"unasked"` means
 * they haven't answered yet, so the notice shows and the prompt follows their
 * first dismissal.
 */
export type LongPostNoticePreference = LongPostNoticeAnswer | "unasked";

export const readLongPostNoticePreference = (): LongPostNoticePreference => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "show" || stored === "hide" ? stored : "unasked";
  } catch {
    // localStorage unavailable (private mode / quota) — treat the reader as
    // unasked, so the notice still works, it just won't remember the answer.
    return "unasked";
  }
};

export const saveLongPostNoticePreference = (answer: LongPostNoticeAnswer) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, answer);
  } catch {
    // localStorage unavailable — the choice only holds for this page view.
  }
};
