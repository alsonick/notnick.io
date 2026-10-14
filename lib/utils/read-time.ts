// "C" marks a continuously updated post with no fixed read time.
export const readTime = (mins: string) =>
  mins === "C" ? "In progress..." : `${mins} min read`;
