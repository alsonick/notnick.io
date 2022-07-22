import { Text } from "./Text";
import { Date } from "./Date";
import { Tag } from "./Tag";

// Next.js
import Link from "next/link";

interface Props {
  type: "notes" | "blogs";
  slug: string;
  description: string;
  tag: string;
  title: string;
  cover?: string;
  date: string;
}

export const Card = ({
  type,
  slug,
  description,
  tag,
  title,
  cover,
  date,
}: Props) => {
  return (
    <div className="flex flex-col w-full mb-10 border-b pb-4 border-teal-100 dark:border-teal-900">
      <Tag title={tag} />
      {cover ? (
        <img
          className="rounded-xl border mt-2 mb-4 border-teal-100 dark:border-teal-900"
          src={cover}
          alt="Cover Picture"
        />
      ) : null}
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
