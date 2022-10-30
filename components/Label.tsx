interface Props {
  text: string;
}

export const Label = ({ text }: Props) => {
  return (
    <label className="font-bold text-sm text-gray-700 dark:text-gray-300">
      {text.toUpperCase()}
    </label>
  );
};
