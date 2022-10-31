import Tippy from "@tippyjs/react";
import { Text } from "./Text";

interface Props {
  type: "article" | "talk";
  style?: "short" | "long";
  authors: string[];
}

export const Authors = ({ type, authors, style }: Props) => {
  return (
    <div className="flex text-gray-600 dark:text-gray-300">
      <>
        {authors.length >= 1 ? (
          <>{type === "article" ? "By" : "Talk by"}&nbsp;</>
        ) : (
          "No authors or talkers were provided."
        )}
      </>

      {authors.map((author, index) => (
        <div key={author}>
          {authors[authors.length - 1].length !==
          authors[index].length ? null : (
            <>
              {style === "long" ? (
                <div className="flex">
                  {authors.map((a) => (
                    <Text key={a}>{a}, </Text>
                  ))}
                </div>
              ) : (
                <>
                  {authors.length > 1 ? (
                    <Tippy
                      content={`${authors.slice(1, authors.length)}`.replace(
                        ",",
                        ", "
                      )}
                    >
                      <div className="flex">
                        <Text>
                          {authors[0]} ({authors.length - 1})
                        </Text>
                      </div>
                    </Tippy>
                  ) : (
                    <Text>{author}</Text>
                  )}
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};
