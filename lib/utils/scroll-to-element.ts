/**
 * Scrolls to an element (a post heading, the top of the page) and moves
 * keyboard focus onto it, so Tab carries on from there instead of from
 * wherever the reader jumped. Smooth scrolling is skipped when the reader has
 * asked their OS to reduce motion.
 */
export const scrollToElement = (element: HTMLElement) => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });

  // Headings aren't focusable by default; -1 allows focus() without adding a
  // tab stop.
  if (!element.hasAttribute("tabindex")) element.setAttribute("tabindex", "-1");
  element.focus({ preventScroll: true });
};
