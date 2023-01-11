import { Post } from "../types/post";
import { Avatar } from "./Avatar";
import { Text } from "./Text";
import { Date } from "./Date";
import { Tag } from "./Tag";

// Next.js
import Link from "next/link";

interface Props {
  type: "notes" | "blogs";
  post: Post;
}

export const Card = ({ type, post }: Props) => {
  return (
    <Link
      href={`/${type}/${post.slug}`}
      className="flex flex-col w-full focus:ring-offset-2 dark:ring-offset-black mb-10 focus:ring-4 rounded ring-[#f54bff] outline-none duration-300 p-2 border-b pb-4 border-teal-100 dark:border-teal-900 "
    >
      <Tag title={post.tag} />
      <h1 className="text-3xl font-bold cursor-pointer underline dark:text-white hover:no-underline w-fit">
        {post.title}
      </h1>
      <div className="max-w-lg">
        <Text style={{ margin: "0.5rem 0 0.25rem 0" }}>
          {!post.description ? "No description." : post.description}
        </Text>
      </div>
      <div className="flex items-center">
        <Date date={post.date} />
        <Text>&nbsp;&bull; {post.mins} min read &bull;&nbsp; </Text>
        <Avatar width={22} height={22} />
      </div>
    </Link>
  );
};
