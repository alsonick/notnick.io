interface Props {
  text: string;
  limit: number;
  style?: React.CSSProperties | undefined;
}

export const CharacterLimit = ({ text, limit, style }: Props) => {
  return (
    <p
      className={`text-sm ${
        text.length > limit
          ? "text-red-500"
          : "text-gray-600 dark:text-gray-300"
      }`}
      style={style}
    >
      {text.length}/{limit}
    </p>
  );
};
