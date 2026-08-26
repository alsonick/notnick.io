import { FiX } from "react-icons/fi";

interface Props {
  onDismiss: () => void;
}

/**
 * Long posts have thousands of elements, and the `.theme-transition` rule in
 * globals.css cross-fades every one of them, so the theme toggle stutters.
 * Warn readers up front instead of leaving them to wonder, and let them close
 * the warning once they've read it.
 *
 * The height is fixed at `h-7` so the nav can be offset by a known amount when
 * this is on screen; keep it in sync with `NOTICE_NAV_OFFSET` in Nav.tsx.
 */
export const LongPostThemeNotice = (props: Props) => {
  return (
    <div
      className="fixed inset-x-0 top-0 z-50 flex h-7 items-center justify-center
      bg-primary px-8 text-center font-semibold leading-4 text-white"
      role="status"
    >
      <p className="text-[11px] sm:text-xs">
        <span className="sm:hidden">
          Theme switching is slow on long posts.
        </span>
        <span className="hidden sm:inline">
          Heads up: this post is long, so switching themes will be slower and
          less smooth than usual.
        </span>
      </p>
      <button
        onClick={props.onDismiss}
        title="Dismiss"
        aria-label="Dismiss"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-white
        outline-none duration-300 hover:bg-white/25 focus:ring-2 ring-white"
      >
        <FiX className="text-sm" />
      </button>
    </div>
  );
};
