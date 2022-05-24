import { Date } from "./Date";
import { Text } from "./Text";

import Link from "next/link";

interface Props {
  type: "notes" | "blogs";
  slug: string;
  description: string;
  title: string;
  date: string;
}

export const Card = ({ type, slug, description, title, date }: Props) => {
  return (
    <div className="flex flex-col w-full mb-10">
      <Link href={`/${type}/${slug}`}>
        <a className="text-3xl font-bold cursor-pointer underline dark:text-white hover:no-underline w-fit">
          {title}
        </a>
      </Link>
      <Text style={{ margin: "0.5rem 0 0.25rem 0" }}>{description}</Text>
      <Date date={date} />
    </div>
  );
};
