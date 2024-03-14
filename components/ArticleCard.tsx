import { THEME } from "../lib/constants";
import { Tag as T } from "../types/article";
import { Authors } from "./Authors";
import { Tag } from "./Tag";

// Next.js
import Link from "next/link";

interface Props {
  authors: string[];
  title: string;
  link: string;
  tags: T[];
}

export const ArticleCard = ({ title, link, authors, tags }: Props) => {
  return (
    <Link
      className={`focus:ring-4 ring-[${THEME}] focus:ring-offset-4 dark:ring-offset-black rounded p-2 outline-none duration-300`}
      href={link}
      target="_blank"
      title={link}
    >
      <div
        className="flex flex-col justify-center w-full
         text-left hover:cursor-pointer mb-7 lg:mb-3
        hover:translate-y-2 duration-300"
      >
        <Tag title={tags[0].filter} />
        <h3
          className="text-black underline dark:text-white
          font-bold text-2xl tracking-tight hover:no-underline"
        >
          {title}
        </h3>
        <Authors type="article" authors={authors} style="short" />
      </div>
    </Link>
  );
};
