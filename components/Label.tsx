interface Props {
  text: string;
}

export const Label = (props: Props) => {
  return (
    <label className="font-bold text-sm text-gray-700 dark:text-gray-300">
      {props.text.toUpperCase()}
    </label>
  );
};
