import { FiExternalLink } from "react-icons/fi";
import { ICON } from "../lib/tailwindcss/icon";
import { CSSProperties } from "react";

// Next.js
import Link from "next/link";

interface Props {
  style?: CSSProperties | undefined;
  text: string;
  link: string;
  desc: string;
}

export const TechnologyCard = ({ style, text, link, desc }: Props) => {
  return (
    <Link
      href={link}
      className={`cursor-pointer flex items-center justify-center py-2 px-5 focus:ring-4 ring-primary outline-none
                  hover:translate-y-1 sm:text-base text-sm rounded-xl mb-4 duration-300 focus:ring-offset-2 dark:ring-offset-black
                  font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-800
                dark:hover:bg-gray-900 dark:text-white`}
      style={style}
      title={text}
      rel="noreferrer"
      target="_blank"
    >
      {text}
      <FiExternalLink className={ICON} />
    </Link>
  );
};
