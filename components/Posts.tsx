import { Post } from "../types/post";
import { Card } from "./Card";

// Next.js
import Link from "next/link";

interface Props {
  type: "notes" | "blogs";
  items: Post[];
}

export const Posts = ({ type, items }: Props) => {
  console.log(items);
  return (
    <div className="flex flex-col w-full">
      <ul>
        {items.map((item) => (
          <>
            {process.env.NODE_ENV === "development" ? (
              <>
                {item.finished || !item.finished ? (
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
                ) : null}
              </>
            ) : (
              <>
                {item.finished ? (
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
                ) : null}
              </>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};
