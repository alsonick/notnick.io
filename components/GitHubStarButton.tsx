import { social } from "../lib/social-links";
import { DOMAIN } from "../lib/constants";

// Next.js
import Link from "next/link";

export const GitHubStarButton = () => {
  return (
    <Link
      className="github-button sm:text-base text-sm text-gray-600 dark:text-gray-300 hover:scale-110 duration-150"
      href={`https://github.com/${social.github.username}/${DOMAIN}`}
      target="_blank"
      data-color-scheme="no-preference: dark; light: dark; dark: dark;"
      data-size="large"
      data-show-count="true"
      aria-label={`Star ${social.github.username}/${DOMAIN} on ${social.github.name}`}
    >
      Star
    </Link>
  );
};
