import { PostsCard } from "./PostsCard";
import { Post } from "../types/post";

interface Props {
  type: "notes" | "blogs";
  posts: Post[];
}

export const Posts = ({ type, posts }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <ul>
        {posts.map((post) => (
          <>
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
          </>
        ))}
      </ul>
    </div>
  );
};
