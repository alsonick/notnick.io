import { Article } from "../types/articles";
import { Text } from "./Text";

interface Props {
  authors: string[];
}
// TODO: fix this later
export const ArticleAuthors = ({ authors }: Props) => {
  return (
    <div className="flex text-gray-600 dark:text-gray-300">
      By&nbsp;
      {authors.map((author) => (
        <div className="flex" key={author}>
          {authors.length > 1 ? (
            <Text>{author},&nbsp;</Text>
          ) : (
            <Text>{author}</Text>
          )}
        </div>
      ))}
    </div>
  );
};
