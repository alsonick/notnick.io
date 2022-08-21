import { Card } from "./Card";

// Next.js
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tag: string;
  cover?: string;
  mins: string;
}

interface Props {
  type: "notes" | "blogs";
  items: Post[];
}

export const Posts = ({ type, items }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <ul>
        {items.map((item) => (
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
        ))}
      </ul>
    </div>
  );
};
