import { convertDate } from "../lib/date";

import Link from "next/link";

interface Props {
  type: "notes" | "blogs";
  slug: string;
  title: string;
  date: string;
}

export const Card = ({ type, slug, title, date }: Props) => {
  return (
    <div className="flex flex-col w-full mb-10">
      <Link href={`/${type}/${slug}`}>
        <a className="text-3xl font-bold cursor-pointer underline dark:text-white hover:no-underline w-fit">
          {title}
        </a>
      </Link>
      <time dateTime={date} className="mt-2 text-gray-600 dark:text-gray-400">
        {type === "notes"
          ? `Last updated: ${convertDate(date)}`
          : convertDate(date)}
      </time>
    </div>
  );
};
