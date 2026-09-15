import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";

const PRIMARY_BUTTON = `rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white
  outline-none duration-300 focus:ring-4 ring-primary focus:ring-offset-2
  dark:ring-offset-black hover:scale-105`;

const SECONDARY_BUTTON = `rounded-lg border border-teal-100 dark:border-teal-900 px-4 py-2
  text-sm font-bold text-gray-600 dark:text-gray-300 outline-none duration-300
  hover:border-primary hover:text-black dark:hover:text-white focus:ring-4 ring-primary
  focus:ring-offset-2 dark:ring-offset-black`;

interface Props {
  /** Remembers the answer: `true` keeps the notice, `false` retires it. */
  onChoose: (keepShowing: boolean) => void;
  /** Closed without answering, so the question comes back on the next long post. */
  onClose: () => void;
}

/**
 * Follow-up to dismissing the long-post theme notice: rather than warning about
 * the sluggish toggle on every long post forever, ask once whether the reader
 * wants to keep seeing it, and remember what they say.
 *
 * Non-modal on purpose — it sits out of the way in the bottom-right corner so
 * it never blocks the post the reader came for.
 */
export const LongPostThemeNoticePrompt = (props: Props) => {
  const keepButtonRef = useRef<HTMLButtonElement>(null);
  const { onClose } = props;

  // Mounted straight into its final position would pop; flipping this on the
  // frame after mount lets the transition below play it in from the corner.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Dismissing the notice removes the button that had focus, so pull focus into
  // the prompt to keep keyboard readers on the thing that just appeared.
  useEffect(() => {
    keepButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [onClose]);

  return (
    <div
      className={`liquid-glass fixed bottom-4 right-4 z-50 w-[min(20rem,calc(100vw-2rem))]
      rounded-lg p-4 duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      aria-label="Long post theme notice preference"
      role="dialog"
    >
      <button
        onClick={onClose}
        title="Close"
        aria-label="Close"
        className="absolute right-2 top-2 rounded p-1 text-gray-600 outline-none
        duration-300 ring-primary hover:text-black focus:ring-2 dark:text-gray-300
        dark:hover:text-white"
      >
        <FiX className="text-sm" />
      </button>
      <p className="pr-6 text-sm font-bold text-black dark:text-white">
        Show this notice again?
      </p>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
        It only appears on long posts, where switching themes is slow.
      </p>
      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={() => props.onChoose(true)}
          title="Keep showing the notice on long posts."
          className={PRIMARY_BUTTON}
          ref={keepButtonRef}
        >
          Yes
        </button>
        <button
          onClick={() => props.onChoose(false)}
          title="Never show the notice again."
          className={SECONDARY_BUTTON}
        >
          No, don&apos;t show again
        </button>
      </div>
    </div>
  );
};
