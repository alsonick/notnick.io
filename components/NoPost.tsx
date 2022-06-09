export const NoPost = ({ type }: { type: "notes" | "blogs" }) => {
  return (
    <div className="text-center h-full items-center justify-center flex mb-4">
      <h2 className="text-xl font-semibold opacity-30 dark:text-white">
        I&apos;ve not written any {type === "notes" ? "notes" : "blogs"} yet.
      </h2>
    </div>
  );
};
