interface Props {
  style?: React.CSSProperties | undefined;
  limit: number;
  text: string;
}

export const CharacterLimit = ({ style, limit, text }: Props) => {
  return (
    <p
      className={`sm:text-base text-sm ${
        text.length > limit
          ? "text-red-500 font-semibold"
          : "text-gray-600 dark:text-gray-300"
      }`}
      style={style}
    >
      {text.length}/{limit}
    </p>
  );
};
