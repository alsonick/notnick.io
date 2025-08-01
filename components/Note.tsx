import { Text } from "./Text";

type Props = {
  children: React.ReactNode;
};

export const Note = (props: Props) => {
  return (
    <div className="border-l-4 text-base pl-4 opacity-60 max-w-lg border-teal-100 dark:border-teal-900">
      <Text>Note: {props.children}</Text>
    </div>
  );
};
