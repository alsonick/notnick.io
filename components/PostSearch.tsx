import { extractHeadings, PostHeading } from "../lib/extract-headings";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Command } from "lucide-react";
import { FiSearch } from "react-icons/fi";

interface Props {
  contentHtml: string;
}

// How close to the top/bottom edge of the results the pointer has to sit
// before the list starts scrolling itself, and how fast it goes once the
// pointer is right on the edge.
const AUTO_SCROLL_ZONE = 56;
const AUTO_SCROLL_MAX_SPEED = 12;

const escapeRegExp = (text: string) =>
  text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Wraps every occurrence of a search term in the heading text. Splitting on a
// regex with one capture group leaves the matches at the odd indices.
const highlight = (text: string, terms: string[]) => {
  if (terms.length === 0) return text;

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "ig");

  return text.split(pattern).map((piece, index) =>
    index % 2 === 1 ? (
      <mark key={index} className="bg-transparent text-primary font-semibold">
        {piece}
      </mark>
    ) : (
      <span key={index}>{piece}</span>
    ),
  );
};

export const PostSearch = (props: Props) => {
  const [headings, setHeadings] = useState<PostHeading[]>([]);
  const [isMac, setIsMac] = useState<boolean | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const activeItemRef = useRef<HTMLLIElement>(null);
  // Signed pixels per frame; 0 means the pointer isn't in an edge zone.
  const autoScrollSpeed = useRef(0);
  const autoScrollFrame = useRef(0);

  useEffect(() => {
    setHeadings(extractHeadings(props.contentHtml));
  }, [props.contentHtml]);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  const terms = useMemo(
    () => query.trim().toLowerCase().split(/\s+/).filter(Boolean),
    [query],
  );

  // Every term has to appear somewhere in the heading or the section it sits
  // in, so word order and the words in between don't matter ("day 3 utp"
  // finds "UTP Cables" under "Day 3").
  const results = useMemo(() => {
    if (terms.length === 0) return headings;
    return headings.filter((heading) => {
      const haystack = `${heading.parent ?? ""} ${heading.text}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }, [headings, terms]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const close = () => {
    setIsOpen(false);
    setQuery("");
    triggerRef.current?.focus();
  };

  const goTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    setIsOpen(false);
    setQuery("");
    window.history.pushState(null, "", `#${id}`);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  };

  // ⌘F on macOS, Ctrl+F everywhere else — deliberately taking over the
  // browser's own find for these posts.
  useEffect(() => {
    // Nothing to search means the browser keeps its own find.
    if (headings.length === 0) return;

    const handleKeydown = (event: KeyboardEvent) => {
      const modifier = isMac ? event.metaKey : event.ctrlKey;
      if (!modifier || event.key.toLowerCase() !== "f") return;

      event.preventDefault();

      if (isOpen) {
        inputRef.current?.select();
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [headings.length, isMac, isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Keep the highlighted result inside the scrollable list.
  useEffect(() => {
    const list = listRef.current;
    const item = activeItemRef.current;
    // Auto-scrolling already puts the pointer's row on the edge on purpose,
    // so don't fight it by pulling that row fully into view.
    if (!list || !item || autoScrollSpeed.current !== 0) return;

    const itemBottom = item.offsetTop + item.offsetHeight;
    if (item.offsetTop < list.scrollTop) {
      list.scrollTop = item.offsetTop;
    } else if (itemBottom > list.scrollTop + list.clientHeight) {
      list.scrollTop = itemBottom - list.clientHeight;
    }
  }, [activeIndex, results]);

  const stopAutoScroll = useCallback(() => {
    cancelAnimationFrame(autoScrollFrame.current);
    autoScrollFrame.current = 0;
    autoScrollSpeed.current = 0;
  }, []);

  const runAutoScroll = useCallback(() => {
    autoScrollFrame.current = requestAnimationFrame(runAutoScroll);
    if (listRef.current) {
      listRef.current.scrollTop += autoScrollSpeed.current;
    }
  }, []);

  // Resting the pointer near the top or bottom of the results scrolls them in
  // that direction, faster the closer to the edge it gets. The bottom zone
  // reaches past the list so the footer strip counts as "the bottom" too.
  const handleAutoScroll = (event: React.MouseEvent) => {
    const list = listRef.current;
    if (!list || list.scrollHeight <= list.clientHeight) {
      stopAutoScroll();
      return;
    }

    const { top, bottom } = list.getBoundingClientRect();
    const y = event.clientY;

    let speed = 0;
    if (y > bottom - AUTO_SCROLL_ZONE) {
      const depth = Math.min(y - (bottom - AUTO_SCROLL_ZONE), AUTO_SCROLL_ZONE);
      speed = (depth / AUTO_SCROLL_ZONE) * AUTO_SCROLL_MAX_SPEED;
    } else if (y >= top && y < top + AUTO_SCROLL_ZONE) {
      const depth = Math.min(top + AUTO_SCROLL_ZONE - y, AUTO_SCROLL_ZONE);
      speed = -(depth / AUTO_SCROLL_ZONE) * AUTO_SCROLL_MAX_SPEED;
    }

    if (speed === 0) {
      stopAutoScroll();
      return;
    }

    autoScrollSpeed.current = speed;
    if (!autoScrollFrame.current) runAutoScroll();
  };

  // Never leave a frame running once the dialog is gone.
  useEffect(() => {
    if (!isOpen) stopAutoScroll();
    return stopAutoScroll;
  }, [isOpen, stopAutoScroll]);

  const handleDialogKeydown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (results.length === 0) return;
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex(
        (index) => (index + step + results.length) % results.length,
      );
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const heading = results[activeIndex];
      if (heading) goTo(heading.id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        title="Search headings"
        aria-label="Search headings"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="flex items-center justify-center gap-1 focus:ring-4 ring-primary outline-none bg-gray-100
        text-black h-9 px-2 duration-300 md:hover:bg-gray-200 dark:bg-gray-800 md:dark:hover:bg-gray-900
        dark:text-white rounded-lg focus:ring-offset-2 dark:ring-offset-black"
      >
        <span className="flex items-center justify-center min-w-[1.75rem]">
          {isMac === null ? null : isMac ? (
            <Command className="h-4 w-4" strokeWidth={2.25} />
          ) : (
            <span className="text-[11px] font-semibold leading-none">CTRL</span>
          )}
        </span>
        <span className="text-xs font-semibold leading-none">+</span>
        <span className="text-xs font-semibold leading-none">F</span>
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-24 sm:pt-32"
              onKeyDown={handleDialogKeydown}
            >
              <div
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                onClick={close}
                aria-hidden="true"
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-label="Search headings"
                onMouseMove={handleAutoScroll}
                onMouseLeave={stopAutoScroll}
                className="relative w-full sm:w-[36rem] rounded-lg border border-teal-100 bg-white shadow-xl
                dark:border-teal-900 dark:bg-[#10161a] overflow-hidden"
              >
                <div className="flex items-center gap-2 border-b border-teal-100 px-4 dark:border-teal-900">
                  <FiSearch className="shrink-0 text-base text-gray-500 dark:text-gray-400" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Jump to a heading..."
                    aria-label="Search headings"
                    className="w-full bg-transparent py-3 text-base text-black outline-none
                    placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400"
                  />
                  <button
                    onClick={close}
                    title="Close"
                    className="shrink-0 rounded border border-teal-100 px-1.5 py-0.5 text-[11px] font-semibold
                    text-gray-500 duration-300 hover:text-black focus:ring-4 ring-primary outline-none
                    dark:border-teal-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Esc
                  </button>
                </div>

                {results.length === 0 ? (
                  <p className="px-4 py-6 text-sm text-gray-600 dark:text-gray-300">
                    No headings match &quot;{query.trim()}&quot;.
                  </p>
                ) : (
                  <ul ref={listRef} className="max-h-80 overflow-auto py-2">
                    {results.map((heading, index) => (
                      <li
                        key={`${heading.id}-${index}`}
                        ref={index === activeIndex ? activeItemRef : null}
                      >
                        <button
                          onClick={() => goTo(heading.id)}
                          onMouseEnter={() => {
                            // Rows sliding past a still pointer shouldn't
                            // yank the highlight around.
                            if (autoScrollSpeed.current === 0) {
                              setActiveIndex(index);
                            }
                          }}
                          className={`block w-full pr-4 py-2 text-left text-sm duration-150 ${
                            heading.level === 4
                              ? "pl-10"
                              : heading.level === 3
                                ? "pl-7"
                                : "pl-4"
                          } ${
                            index === activeIndex
                              ? "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
                              : "text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          {heading.parent ? (
                            <span className="text-gray-500 dark:text-gray-400">
                              {highlight(heading.parent, terms)}
                              <span className="px-1.5">/</span>
                            </span>
                          ) : null}
                          {highlight(heading.text, terms)}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                <div
                  className="hidden items-center gap-4 border-t border-teal-100 px-4 py-2 text-[11px]
                  text-gray-500 dark:border-teal-900 dark:text-gray-400 sm:flex"
                >
                  <span>↑ ↓ to navigate</span>
                  <span>↵ to jump</span>
                  <span className="ml-auto">
                    {results.length} of {headings.length} headings
                  </span>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};
