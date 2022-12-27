import { Text } from "./Text";

type Props = {
  text: string;
};

export const Note = ({ text }: Props) => {
  return (
    <div className="border-l-4 pl-4 opacity-60 max-w-lg border-teal-100 dark:border-teal-900">
      <Text>{text}</Text>
    </div>
  );
};
