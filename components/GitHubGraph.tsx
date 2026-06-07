"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useRef, useState } from "react";
import { social } from "../lib/social-links";
import { FiExternalLink } from "react-icons/fi";
import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import { Section } from "./Section";
import { Text } from "./Text";

const GITHUB_USERNAME = social.github.username;

// Tints derived from the site's primary green (#30D158), going from the
// "no contributions" cell up to the most active.
const CALENDAR_THEME = {
  light: ["#ebedf0", "#a7e8b9", "#6cdb8c", "#30d158", "#1f9b41"],
  dark: ["#161b22", "#0e4429", "#15803d", "#30d158", "#5ee37f"],
};

export const GitHubGraph = () => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark");
  // The calendar is browser-only (it fetches data and reads the theme class),
  // so we gate it behind mount to avoid an SSR/client hydration mismatch.
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);

    const html = document.documentElement;

    const syncColorScheme = () => {
      setColorScheme(html.classList.contains("dark") ? "dark" : "light");
    };

    syncColorScheme();

    const observer = new MutationObserver(syncColorScheme);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  // The graph spans a year, so on smaller screens it overflows horizontally.
  // react-activity-calendar renders its own internal horizontal scroll
  // container, so we pin *that* element to the right (the most recent
  // contributions). Its width only settles once the data has loaded, so we
  // re-pin on any content mutation or resize.
  useEffect(() => {
    if (!mounted) return;

    const container = scrollRef.current;
    if (!container) return;

    const pinToRight = () => {
      const scroller =
        container.querySelector<HTMLElement>("article > div") ?? container;
      scroller.scrollLeft = scroller.scrollWidth;
    };

    pinToRight();

    const resizeObserver = new ResizeObserver(pinToRight);
    resizeObserver.observe(container);

    const mutationObserver = new MutationObserver(pinToRight);
    mutationObserver.observe(container, { childList: true, subtree: true });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [mounted]);

  return (
    <Section>
      <Heading>GitHub 🐙</Heading>
      <Text>Here&apos;s a snapshot of my contribution activity on GitHub.</Text>
      <div ref={scrollRef} className="mt-6 min-h-[160px]">
        {mounted && (
          <GitHubCalendar
            username={GITHUB_USERNAME}
            colorScheme={colorScheme}
            theme={CALENDAR_THEME}
            fontSize={14}
            blockSize={12}
          />
        )}
      </div>
      <div className="flex mt-6">
        <LinkTag href={social.github.link} target="_blank">
          View my profile on GitHub <FiExternalLink className="text-lg ml-1" />
        </LinkTag>
      </div>
    </Section>
  );
};
