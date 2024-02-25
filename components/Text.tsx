interface Props {
  style?: React.CSSProperties | undefined;
  children: React.ReactNode;
  sliceText?: boolean;
  slice?: number;
}

export const Text = ({ children, style, sliceText, slice }: Props) => {
  return (
    <p className="text-gray-600 dark:text-gray-300" style={style}>
      {!sliceText ? children : `${String(children).slice(0, slice).trim()}...`}
    </p>
  );
};
