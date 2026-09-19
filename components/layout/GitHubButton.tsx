import { social } from "../../lib/data/social-links";
import { DOMAIN } from "../../lib/constants";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

// Next.js
import Link from "next/link";
import { ICON } from "../../lib/tailwindcss/icon";
import { cn } from "../../lib/utils/cn";

export const GitHubButton = () => {
  return (
    <Link
      className="flex items-center shrink-0 ml-4 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-900 shadow-sm text-sm font-medium text-black dark:text-white
        hover:bg-gray-50 dark:hover:bg-gray-800 duration-300
        outline-none focus:ring-4 ring-primary focus:ring-offset-2 dark:ring-offset-black"
      title={`${social.github.username}/${DOMAIN} on ${social.github.name}`}
      href={`https://github.com/${social.github.username}/${DOMAIN}`}
      target="_blank"
    >
      <FaGithub className="text-base mr-1.5" />
      {social.github.name}
      <FiExternalLink className={cn(ICON, "text-base")} />
    </Link>
  );
};
