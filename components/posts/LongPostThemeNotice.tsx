import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";

interface Props {
  onDismiss: () => void;
  /**
   * The bar's height, reported whenever it changes, so the nav can clear it.
   * Zero once the bar is gone, or while it is hidden on a phone.
   */
  onHeight: (height: number) => void;
}

/**
 * Long posts have thousands of elements, and the `.theme-transition` rule in
 * globals.css cross-fades every one of them, so the theme toggle stutters.
 * Warn readers up front instead of leaving them to wonder, and let them close
 * the warning once they've read it.
 *
 * Hidden on phones, where a warning this long would cost more of the screen
 * than the toggle it is warning about is worth.
 *
 * The height is measured rather than fixed: the wording wraps to a second line
 * on a narrow window and back to one on a wide one, and the nav has to sit
 * under whichever it is.
 */
export const LongPostThemeNotice = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { onHeight } = props;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const report = () => onHeight(element.getBoundingClientRect().height);
    report();

    const observer = new ResizeObserver(report);
    observer.observe(element);

    return () => {
      observer.disconnect();
      // The bar is on its way out, so let the nav move back up.
      onHeight(0);
    };
  }, [onHeight]);

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 hidden min-h-7 sm:flex items-center justify-center
      bg-primary px-8 py-1.5 text-center font-semibold leading-4 text-white dark:text-black"
      role="status"
      ref={ref}
    >
      <p className="text-xs">
        WARNING: Theme switching is slower on long posts because the fade has to
        cross every element on the page (lots of elements).
      </p>
      <button
        onClick={props.onDismiss}
        title="Dismiss"
        aria-label="Dismiss"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-white dark:text-black
        outline-none duration-300 hover:bg-white/25 dark:hover:bg-black/15 focus:ring-2 ring-white dark:ring-black"
      >
        <FiX className="text-sm" />
      </button>
    </div>
  );
};
