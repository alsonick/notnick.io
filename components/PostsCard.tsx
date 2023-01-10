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
    <div>
      <Card type={type} post={post} />
    </div>
  );
};
