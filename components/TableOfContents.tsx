import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  contentHtml: string;
}

export const TableOfContents = ({ contentHtml }: Props) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Parse HTML to extract h2 and h3 headings
    const parser = new DOMParser();
    const doc = parser.parseFromString(contentHtml, "text/html");
    const headingElements = doc.querySelectorAll("h2[id], h3[id]");

    const extractedHeadings: Heading[] = Array.from(headingElements).map(
      (heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.substring(1)),
      })
    );

    setHeadings(extractedHeadings);
  }, [contentHtml]);

  useEffect(() => {
    // Set up intersection observer to track active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66% 0px",
      }
    );

    // Observe all headings
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.history.pushState(null, "", `#${id}`);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="hidden xl:block fixed right-8 top-32 w-64 max-h-[calc(100vh-10rem)] overflow-auto">
      <h4 className="font-bold text-sm mb-4 text-gray-900 dark:text-white">
        Table of Contents
      </h4>
      <ul className="space-y-2 text-sm border-l-2 border-teal-100 dark:border-teal-900">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${
              heading.level === 3 ? "pl-6" : "pl-3"
            } transition-colors duration-200`}
          >
            <button
              onClick={() => handleClick(heading.id)}
              className={`text-left w-full hover:text-primary dark:hover:text-primary transition-colors duration-200 ${
                activeId === heading.id
                  ? "text-primary font-medium"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
