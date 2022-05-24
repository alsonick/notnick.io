import { Card } from "./Card";

import Link from "next/link";

interface Props {
  type: "notes" | "blogs";
  items: [
    {
      slug: string;
      title: string;
      date: string;
      description: string;
      mins: string;
    }
  ];
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
              type={type}
              slug={item.slug}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
};
