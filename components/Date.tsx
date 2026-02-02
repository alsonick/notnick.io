import { convertDate } from "../lib/date";

interface Props {
  date: string;
}

export const Date = (props: Props) => {
  return (
    <time
      dateTime={props.date}
      className="text-gray-600 dark:text-gray-300 text-base"
    >
      {convertDate(props.date)}
    </time>
  );
};
