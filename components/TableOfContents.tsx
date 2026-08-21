import { extractHeadings, PostHeading } from "../lib/extract-headings";
import { useEffect, useRef, useState } from "react";

interface Props {
  contentHtml: string;
}

// Viewport line (px from the top) that decides which section is current.
// Slightly below the headings' 100px scroll-margin-top so a heading counts
// as current as soon as it settles after being clicked.
const ACTIVE_LINE = 110;

export const TableOfContents = (props: Props) => {
  const [headings, setHeadings] = useState<PostHeading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef(new Map<string, HTMLLIElement>());
  // While a click-triggered smooth scroll is in flight, the highlight stays
  // pinned to the clicked heading instead of flickering through every
  // section passing by.
  const pinnedId = useRef<string | null>(null);
  const settleTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setHeadings(extractHeadings(props.contentHtml));
  }, [props.contentHtml]);

  useEffect(() => {
    if (headings.length === 0) return;

    let frame = 0;

    const computeActive = () => {
      frame = 0;

      // The current section is the last heading sitting above the active
      // line. Positions are measured fresh on every scroll, so no section
      // can be skipped no matter how fast the page moves.
      let current = "";
      for (const { id } of headings) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= ACTIVE_LINE) {
          current = id;
        }
      }

      // At the very bottom of the page the remaining headings can never
      // cross the line, so the last one wins.
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) {
        current = headings[headings.length - 1].id;
      }

      if (pinnedId.current) {
        if (current === pinnedId.current) {
          pinnedId.current = null;
        } else {
          return;
        }
      }

      setActiveId(current);
    };

    const onScroll = () => {
      if (pinnedId.current) {
        // Release the pin shortly after scrolling stops, in case the
        // clicked heading can't reach the line (e.g. sections near the
        // bottom of a short page).
        clearTimeout(settleTimer.current);
        settleTimer.current = setTimeout(() => {
          pinnedId.current = null;
          computeActive();
        }, 150);
      }
      if (!frame) {
        frame = requestAnimationFrame(computeActive);
      }
    };

    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      clearTimeout(settleTimer.current);
    };
  }, [headings]);

  // When the table of contents itself overflows, keep the active item in
  // view as it changes.
  useEffect(() => {
    const nav = navRef.current;
    const item = activeId ? itemRefs.current.get(activeId) : undefined;
    if (!nav || !item || nav.scrollHeight <= nav.clientHeight) return;

    const itemBottom = item.offsetTop + item.offsetHeight;
    if (item.offsetTop < nav.scrollTop + 8) {
      nav.scrollTo({ top: item.offsetTop - 8, behavior: "smooth" });
    } else if (itemBottom > nav.scrollTop + nav.clientHeight - 8) {
      nav.scrollTo({
        top: itemBottom - nav.clientHeight + 8,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.history.pushState(null, "", `#${id}`);
      pinnedId.current = id;
      setActiveId(id);
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      ref={navRef}
      className="hidden xl:block fixed right-8 top-32 w-64 max-h-[calc(100vh-10rem)] overflow-auto"
    >
      <h4 className="font-bold text-sm mb-4 text-gray-900 dark:text-white">
        Table of Contents
      </h4>
      <ul className="space-y-2 text-sm border-l-2 border-teal-100 dark:border-teal-900">
        {headings.map((heading) => (
          <li
            key={heading.id}
            ref={(element) => {
              if (element) {
                itemRefs.current.set(heading.id, element);
              } else {
                itemRefs.current.delete(heading.id);
              }
            }}
            className={`${
              heading.level === 4
                ? "pl-9"
                : heading.level === 3
                  ? "pl-6"
                  : "pl-3"
            } transition-colors duration-200`}
          >
            <button
              onClick={() => handleClick(heading.id)}
              className={`text-left w-full hover:text-primary dark:hover:text-primary transition-colors duration-200 ${
                activeId === heading.id
                  ? "text-primary font-medium"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
