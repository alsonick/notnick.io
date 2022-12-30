interface Props {
  style?: React.CSSProperties | undefined;
  limit: number;
  text: string;
}

export const CharacterLimit = ({ style, limit, text }: Props) => {
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
