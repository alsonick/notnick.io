import { Fragment, ReactNode } from "react";

const URL_REGEX = /(https?:\/\/[^\s)]+)/g;
const TRAILING_PUNCTUATION = /[.,!?;:]+$/;
const MAX_DISPLAY_LENGTH = 30;

const displayUrl = (url: string): string => {
  const bare = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return bare.length > MAX_DISPLAY_LENGTH
    ? `${bare.slice(0, MAX_DISPLAY_LENGTH).trimEnd()}...`
    : bare;
};

/**
 * Turns any http(s) URLs in a plain string into anchors that open in a new tab.
 * Trailing punctuation and a closing parenthesis are kept outside the link.
 * The displayed text drops the protocol and is shortened if it's too long;
 * the full URL is still the href and shows on hover.
 */
export const linkify = (text: string): ReactNode[] =>
  text.split(URL_REGEX).map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;

    const trailing = part.match(TRAILING_PUNCTUATION)?.[0] ?? "";
    const url = trailing ? part.slice(0, -trailing.length) : part;

    return (
      <Fragment key={i}>
        <a
          href={url}
          title={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium break-all rounded outline-none hover:underline
          focus:ring-4 focus:ring-primary focus:ring-offset-2 dark:ring-offset-black"
        >
          {displayUrl(url)}
        </a>
        {trailing}
      </Fragment>
    );
  });
