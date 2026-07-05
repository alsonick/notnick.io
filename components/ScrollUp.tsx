import { FiArrowUp } from "react-icons/fi";
import { ICON } from "../lib/tailwindcss/icon";

export const ScrollUp = () => {
  return (
    <div className="not-prose flex w-full justify-start">
      <button
        className="flex items-center text-base p-2 rounded-lg justify-center px-6 text-black
    dark:text-white duration-300 font-semibold focus:ring-offset-2 dark:ring-offset-black bg-gray-100 md:hover:bg-gray-200
    dark:bg-gray-800 md:dark:hover:bg-gray-900 outline-none focus:ring-4 ring-primary w-fit"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Scroll to the top of the page."
      >
        Scroll Up <FiArrowUp title="Scroll Up" className={ICON} />
      </button>
    </div>
  );
};
