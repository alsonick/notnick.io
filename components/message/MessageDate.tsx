import { format } from "date-fns";

interface Props {
  date: Date;
}

export const MessageDate = ({ date }: Props) => {
  return (
    <p className="text-gray-500 dark:text-gray-400">
      {format(new Date(date), "d MMM yyyy 'at' h:mm bb")}
    </p>
  );
};
