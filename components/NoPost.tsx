interface Props {
  type: "notes" | "blogs";
}

export const NoPost = (props: Props) => {
  return (
    <div className="text-center h-full items-center justify-center flex mb-4">
      <h2 className="text-xl font-semibold opacity-30 dark:text-white">
        I&apos;ve not written any {props.type === "notes" ? "notes" : "blogs"}{" "}
        yet.
      </h2>
    </div>
  );
};
