import Tippy from "@tippyjs/react";
import { Text } from "./Text";

interface Props {
  type: "article" | "talk";
  style?: "short" | "long";
  authors: string[];
}

export const Authors = (props: Props) => {
  return (
    <div className="flex text-gray-600 dark:text-gray-300 text-base">
      <>
        {props.authors.length >= 1 ? (
          <>{props.type === "article" ? "By" : "Talk by"}&nbsp;</>
        ) : (
          "No authors or talkers were provided."
        )}
      </>

      {props.authors.map((author, index) => (
        <div key={author}>
          {props.authors[props.authors.length - 1].length !==
          props.authors[index].length ? null : (
            <>
              {props.style === "long" ? (
                <div className="flex">
                  {props.authors.map((a) => (
                    <Text key={a}>{a}, </Text>
                  ))}
                </div>
              ) : (
                <>
                  {props.authors.length > 1 ? (
                    <Tippy
                      content={`${props.authors.slice(
                        1,
                        props.authors.length
                      )}`.replace(",", ", ")}
                    >
                      <div className="flex">
                        <Text>
                          {props.authors[0]} ({props.authors.length - 1})
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
