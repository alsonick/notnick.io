import { PostCardTag } from "./PostCardTag";
import { THEME } from "../lib/constants";
import { Post } from "../types/post";
import { Avatar } from "./Avatar";
import { Text } from "./Text";
import { Date } from "./Date";

// Next.js
import Link from "next/link";

interface Props {
  type: "note" | "blog";
  post: Post;
}

export const Card = ({ type, post }: Props) => {
  return (
    <div className="border-b border-teal-100 dark:border-teal-900 mb-10 pb-4">
      <Link
        href={`/${type}/${post.slug}`}
        className={`flex flex-col w-full focus:ring-offset-2 dark:ring-offset-black focus:ring-4
      rounded ring-[${THEME}] outline-none duration-300`}
      >
        <div className="mb-2">
          <PostCardTag title={post.tag} />
        </div>{" "}
        <h1 className="sm:text-4xl text-3xl font-bold cursor-pointer underline dark:text-white hover:no-underline w-fit">
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
          <Avatar border={true} width={22} height={22} />
        </div>
      </Link>
    </div>
  );
};
