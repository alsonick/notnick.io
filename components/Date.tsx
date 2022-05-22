import { convertDate } from "../lib/date";

interface Props {
  type: "notes" | "blogs";
  date: string;
}

export const Date = ({ type, date }: Props) => {
  return (
    <time
      dateTime={date}
      className="mt-2 mb-6 text-gray-600 dark:text-gray-300"
    >
      {type === "notes"
        ? `Last updated: ${convertDate(date)}`
        : convertDate(date)}
    </time>
  );
};
