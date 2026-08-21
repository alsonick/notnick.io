export interface PostHeading {
  /** Text of the nearest enclosing heading, when there is one. */
  parent?: string;
  level: number;
  text: string;
  id: string;
}

/**
 * Pulls every anchored heading out of a post's rendered HTML, in document
 * order. Browser only — `DOMParser` doesn't exist on the server.
 */
export const extractHeadings = (contentHtml: string): PostHeading[] => {
  if (typeof window === "undefined") return [];

  const doc = new DOMParser().parseFromString(contentHtml, "text/html");
  // Heading text seen so far, indexed by level, so a heading can name the
  // section it sits in.
  const openHeadings: string[] = [];

  return Array.from(doc.querySelectorAll("h2[id], h3[id], h4[id]")).map(
    (heading) => {
      const level = parseInt(heading.tagName.substring(1));
      const text = heading.textContent || "";
      const parent = openHeadings.slice(0, level).reverse().find(Boolean);

      openHeadings[level] = text;
      openHeadings.length = level + 1;

      return { id: heading.id, text, level, parent };
    },
  );
};
