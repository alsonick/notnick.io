import { Post } from "../types/post";
import { Card } from "./Card";

// Next.js
import Link from "next/link";

interface Props {
  type: "notes" | "blogs";
  post: Post;
}

export const PostsCard = ({ type, post }: Props) => {
  return (
    <Link key={post.slug} href={`${type}/${post.slug}`}>
      <Card
      type={type}
        post={post}
      />
    </Link>
  );
};
