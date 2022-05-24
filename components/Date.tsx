import { convertDate } from "../lib/date";

interface Props {
  date: string;
}

export const Date = ({ date }: Props) => {
  return (
    <time dateTime={date} className="text-gray-600 dark:text-gray-300">
      {convertDate(date)}
    </time>
  );
};
