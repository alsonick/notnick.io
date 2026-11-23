import { RefObject, useEffect, useRef } from "react";

interface Props {
  /**
   * The post's content. Progress runs until its end is in view. A post with
   * no content yet has none, and the bar follows the whole page instead.
   */
  target: RefObject<HTMLElement | null>;
  /** How far down to sit, to stay clear of a bar already at the top. */
  top?: number;
}

/** What a bar pinned to the bottom (the mini player) covers. */
const bottomInset = () =>
  parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--bottom-bar-inset",
    ),
  ) || 0;

/**
 * A thin bar across the top of the viewport that fills as the post is read:
 * empty at the top of the page, full once the end of the post is on screen.
 * A post short enough to fit without scrolling is all on screen already, so
 * its bar starts full.
 */
export const ReadingProgress = ({ target, top = 0 }: Props) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const content = target.current ?? document.documentElement;

    let frame = 0;
    const measure = () => {
      frame = 0;
      // How far the page scrolls before the end of the post is in view,
      // above the mini player if it's open.
      const end =
        content.getBoundingClientRect().bottom +
        window.scrollY -
        (window.innerHeight - bottomInset());

      const progress =
        end > 0 ? Math.min(Math.max(window.scrollY / end, 0), 1) : 1;
      // Set directly rather than through state, so following the scroll
      // doesn't re-render anything.
      bar.style.transform = `scaleX(${progress})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // Images loading, embeds filling in and code blocks gaining line numbers
    // all change how long the post is.
    const observer = new ResizeObserver(schedule);
    observer.observe(content);
    observer.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, [target]);

  return (
    <div
      aria-hidden="true"
      // Under the route-change loading bar (#nprogress, z-index 9999), which
      // should win while the next page loads; over the nav.
      className="pointer-events-none fixed inset-x-0 z-[60] h-[3px] duration-300"
      style={{ top, transitionProperty: "top" }}
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-primary"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};
