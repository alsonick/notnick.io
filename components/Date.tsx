import { convertDate } from "../lib/date";

interface Props {
  date: string;
}

export const Date = (props: Props) => {
  return (
    <time
      dateTime={props.date}
      className="text-gray-600 text-base dark:text-gray-300"
    >
      {convertDate(props.date)}
    </time>
  );
};
