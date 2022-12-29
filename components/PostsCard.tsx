import { Post } from "../types/post";
import { Card } from "./Card";

// Next.js
import Link from "next/link";

interface Props {
  type: "notes" | "blogs";
  item: Post;
}

export const PostsCard = ({ type, item }: Props) => {
  return (
    <Link key={item.slug} href={`${type}/${item.slug}`}>
      <Card
        title={item.title}
        date={item.date}
        description={item.description}
        tag={item.tag}
        type={type}
        cover={item.cover}
        slug={item.slug}
        mins={item.mins}
      />
    </Link>
  );
};
