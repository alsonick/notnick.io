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

export const ArticleCard = (props: Props) => {
  return (
    <Link
      className={`focus:ring-4 ring-primary focus:ring-offset-4
        dark:ring-offset-black rounded p-0 lg:p-2 outline-none duration-300`}
      href={props.link}
      target="_blank"
      title={props.link}
    >
      <div
        className="flex flex-col justify-center w-full
        text-left cursor-pointer mb-7 lg:mb-3
        lg:hover:translate-y-2 duration-300"
      >
        <Tag title={props.tags[0].filter} />
        <h3
          className="text-black underline dark:text-white
          font-bold text-2xl tracking-tight md:hover:no-underline"
        >
          {props.title}
        </h3>
        <Authors type="article" authors={props.authors} style="short" />
      </div>
    </Link>
  );
};
