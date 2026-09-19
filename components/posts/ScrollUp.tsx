import { FiArrowUp } from "react-icons/fi";
import { MAIN_CONTENT_ID } from "../../lib/constants";
import { ICON } from "../../lib/tailwindcss/icon";

export const ScrollUp = () => {
  return (
    <div className="not-prose flex w-full justify-start">
      <button
        className="flex items-center text-base p-2 rounded-lg justify-center px-6 text-black
    dark:text-white duration-300 font-semibold focus:ring-offset-2 dark:ring-offset-black bg-gray-100 md:hover:bg-gray-200
    dark:bg-gray-800 md:dark:hover:bg-gray-900 outline-none focus:ring-4 ring-primary w-fit"
        onClick={() => {
          const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          window.scrollTo({
            top: 0,
            behavior: reducedMotion ? "auto" : "smooth",
          });
          // Send keyboard focus back to the top too, not just the viewport.
          document
            .getElementById(MAIN_CONTENT_ID)
            ?.focus({ preventScroll: true });
        }}
        title="Scroll to the top of the page."
      >
        Scroll Up <FiArrowUp className={ICON} />
      </button>
    </div>
  );
};
