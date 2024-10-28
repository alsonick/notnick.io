import { PostCardTag } from "./PostCardTag";
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

export const Card = (props: Props) => {
  return (
    <div className="border-b border-teal-100 dark:border-teal-900 mb-10 pb-4">
      <Link
        href={`/${props.type}/${props.post.slug}`}
        className={`flex flex-col w-full focus:ring-offset-2 dark:ring-offset-black focus:ring-4
      rounded ring-primary outline-none duration-300`}
      >
        <div className="mb-2">
          <PostCardTag title={props.post.tag} />
        </div>{" "}
        <h1 className="sm:text-3xl text-2xl font-bold cursor-pointer underline dark:text-white hover:no-underline w-fit">
          {props.post.title}
        </h1>
        <div className="max-w-lg">
          <Text style={{ margin: "0.5rem 0 0.25rem 0" }}>
            {!props.post.description
              ? "No description."
              : props.post.description}
          </Text>
        </div>
        <div className="flex items-center">
          <Date date={props.post.date} />
          <Text>&nbsp;&bull; {props.post.mins} min read &bull;&nbsp; </Text>
          <Avatar border={true} width={22} height={22} />
        </div>
      </Link>
    </div>
  );
};
