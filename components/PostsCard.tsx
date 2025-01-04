import { Post } from "../types/post";
import { Card } from "./Card";

interface Props {
  type: "note" | "blog";
  post: Post;
}

export const PostsCard = (props: Props) => {
  return (
    <>
      <Card type={props.type} post={props.post} />
    </>
  );
};
