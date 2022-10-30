interface Props {
  text: string;
}

export const Text = ({ text }: Props) => {
  return <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>;
};
