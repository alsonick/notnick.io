import { PostsCard } from "./PostsCard";
import { Post } from "../types/post";

interface Props {
  type: "note" | "blog";
  posts: Post[];
}

export const Posts = (props: Props) => {
  // In production only finished posts are shown; in development all are.
  const visiblePosts =
    process.env.NODE_ENV === "development"
      ? props.posts
      : props.posts.filter((post) => post.finished);

  const lastPinnedIndex = visiblePosts.reduce(
    (last, post, index) => (post.pinned ? index : last),
    -1,
  );

  return (
    <div className="flex flex-col w-full">
      <ul>
        {visiblePosts.map((post, index) => (
          <div
            key={post.slug}
            className={
              // Extra breathing room between the pinned group and the rest.
              // The card's own bottom margin (mb-10) collapses into this, so
              // it needs to be larger than mb-10 to have an effect.
              index === lastPinnedIndex && index < visiblePosts.length - 1
                ? "mb-16"
                : ""
            }
          >
            <PostsCard post={post} type={props.type} />
          </div>
        ))}
      </ul>
    </div>
  );
};
