import { PostsCard } from "./PostsCard";
import { Post } from "../types/post";

interface Props {
  type: "notes" | "blogs";
  items: Post[];
}

export const Posts = ({ type, items }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <ul>
        {items.map((item) => (
          <>
            {process.env.NODE_ENV === "development" ? (
              <>
                {item.finished || !item.finished ? (
                  <PostsCard item={item} type={type} />
                ) : null}
              </>
            ) : (
              <>
                {item.finished ? <PostsCard item={item} type={type} /> : null}
              </>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};
