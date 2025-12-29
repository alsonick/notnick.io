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

export const TechnologyCard = (props: Props) => {
  return (
    <Link
      href={props.link}
      className={`cursor-pointer flex items-center justify-center py-2 px-5 focus:ring-4 ring-primary outline-none
            sm:hover:translate-y-1 text-base rounded-xl mb-4 duration-300 focus:ring-offset-2 dark:ring-offset-black
            font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white0`}
      style={props.style}
      title={props.text}
      rel="noreferrer"
      target="_blank"
    >
      {props.text}
      <FiExternalLink className={ICON} />
    </Link>
  );
};
