interface Props {
  style?: React.CSSProperties | undefined;
  limit: number;
  text: string;
}

export const CharacterLimit = (props: Props) => {
  return (
    <p
      className={`text-base ${
        props.text.length > props.limit
          ? "text-red-500 font-semibold"
          : "text-gray-600 dark:text-gray-300"
      }`}
      style={props.style}
    >
      {props.text.length}/{props.limit}
    </p>
  );
};
