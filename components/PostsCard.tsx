import { Post } from "../types/post";
import { Card } from "./Card";

interface Props {
  type: "note" | "blog";
  post: Post;
}

export const PostsCard = ({ type, post }: Props) => {
  return (
    <div>
      <Card type={type} post={post} />
    </div>
  );
};
