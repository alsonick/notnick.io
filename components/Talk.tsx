import { Talk as T } from "../types/talk";
import { Authors } from "./Authors";
import { Heading } from "./Heading";
import { Tag } from "./Tag";

// Next.js
import Link from "next/link";

export const Talk = ({ title, link, type, authors }: T) => {
  const url = `https://www.youtube.com/embed/${link.id}`;

  return (
    <div className="flex flex-col w-full border-b mb-5 dark:border-teal-900 pb-4">
      <Tag title={type} />
      <Link href={url}>
        <a target="_blank">
          <Heading style={{ marginBottom: 0 }}>{title}</Heading>
        </a>
      </Link>
      <div className="my-3">
        <iframe
          className="rounded-lg  border border-teal-100 dark:border-teal-900"
          width="100%"
          height="330"
          src={url}
        />
      </div>
      <div className="flex text-gray-600 dark:text-gray-300">
        <Authors type="talk" authors={authors} style="long" /> View on YouTube
      </div>
    </div>
  );
};
