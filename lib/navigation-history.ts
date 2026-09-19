import { Router } from "next/router";

// Next's pages router doesn't record how deep into the site the reader is, so
// track it from the `key` it stores on each history entry. The page the reader
// entered on sits at depth 0: going "back" from there would leave the site (or
// do nothing in a fresh tab). Imported once from _app so every client-side
// navigation is seen, whichever page is open.
const depthByKey = new Map<string, number>();
let currentDepth = 0;

const currentKey = (): string | undefined => window.history.state?.key;

if (typeof window !== "undefined") {
  // Fires while history still points at the page being left, which is how the
  // entry page gets recorded before the first navigation away from it.
  Router.events.on("routeChangeStart", () => {
    const key = currentKey();
    if (key && !depthByKey.has(key)) depthByKey.set(key, currentDepth);
  });

  Router.events.on("routeChangeComplete", () => {
    const key = currentKey();
    if (!key) return;

    // A known key means the browser's back/forward buttons revisited a page.
    const known = depthByKey.get(key);
    currentDepth = known ?? currentDepth + 1;
    if (known === undefined) depthByKey.set(key, currentDepth);
  });
}

/** Whether the previous history entry is a page on this site. */
export const canGoBackInApp = () => {
  const key = currentKey();
  return key ? (depthByKey.get(key) ?? 0) > 0 : false;
};
