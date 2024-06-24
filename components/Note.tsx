import { Text } from "./Text";

type Props = {
  children: React.ReactNode;
};

export const Note = ({ children }: Props) => {
  return (
    <div className="border-l-4 sm:text-base text-sm pl-4 opacity-60 max-w-lg border-teal-100 dark:border-teal-900">
      <Text>Note: {children}</Text>
    </div>
  );
};
