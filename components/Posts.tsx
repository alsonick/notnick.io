import { generateRandomId } from "../lib/generate-random-id";
import { PostsCard } from "./PostsCard";
import { Post } from "../types/post";

interface Props {
  type: "note" | "blog";
  posts: Post[];
}

export const Posts = ({ type, posts }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <ul>
        {posts.map((post) => (
          <div key={generateRandomId()}>
            {process.env.NODE_ENV === "development" ? (
              <>
                {post.finished || !post.finished ? (
                  <PostsCard post={post} type={type} />
                ) : null}
              </>
            ) : (
              <>
                {post.finished ? <PostsCard post={post} type={type} /> : null}
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};
