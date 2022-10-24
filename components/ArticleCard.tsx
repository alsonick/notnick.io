import { Authors } from "./Authors";
import { Tag } from "./Tag";

// Next.js
import Link from "next/link";

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
          className="flex flex-col justify-center w-full
         text-left hover:cursor-pointer mb-7 lg:mb-3
        hover:translate-y-2 duration-300"
        >
          <Tag title={type} />
          <h3
            className="text-black underline dark:text-white
          font-bold text-2xl tracking-tight hover:no-underline"
          >
            {title}
          </h3>
          <Authors type="article" authors={authors} style="short" />
        </div>
      </a>
    </Link>
  );
};
