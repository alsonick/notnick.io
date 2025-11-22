import Tippy from "@tippyjs/react";
import { Text } from "./Text";

interface Props {
  type: "article" | "talk";
  style?: "short" | "long";
  authors: string[];
}

export const Authors = (props: Props) => {
  if (!props.authors || props.authors.length === 0) {
    return (
      <div className="flex text-gray-600 dark:text-gray-300 text-base">
        No authors or talkers were provided.
      </div>
    );
  }

  const label = props.type === "article" ? "By" : "Talk by";

  return (
    <div className="flex text-gray-600 dark:text-gray-300 text-base items-baseline">
      {label}&nbsp;
      {props.style === "long" ? (
        <div className="flex flex-wrap">
          <Text>{props.authors.join(", ")}</Text>
        </div>
      ) : (
        <div className="flex">
          {props.authors.length > 1 ? (
            <Tippy content={props.authors.slice(1).join(", ")}>
              <div className="flex">
                <Text>
                  {props.authors[0]} (+{props.authors.length - 1})
                </Text>
              </div>
            </Tippy>
          ) : (
            <Text>{props.authors[0]}</Text>
          )}
        </div>
      )}
    </div>
  );
};
