import { Date } from "./Date";

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
      <Date type={type} date={date} />
    </div>
  );
};
