import { Article } from "../types/articles";
import { ArticleAuthors } from "./ArticleAuthors";
import { Text } from "./Text";

// Next.js
import Link from "next/link";
import { Tag } from "./Tag";

interface Props {
  title: string;
  link: string;
  type: string;
  authors: string[];
}

export const ArticleCard = ({ title, link, type, authors }: Props) => {
  return (
    <Link href={link}>
      <a target="_blank" title={link}>
        <div
          className="flex flex-col justify-center border-4 w-full p-6 mb-6
        border-[#f54bff] rounded-lg text-left hover:cursor-pointer
        hover:translate-y-2 duration-300"
        >
          <Tag title={type} />
          <h3
            className="text-black mb-1 underline dark:text-white
          font-semibold text-2xl tracking-tight hover:no-underline"
          >
            {title}
          </h3>
          <ArticleAuthors authors={authors} />
        </div>
      </a>
    </Link>
  );
};
