export const Text = ({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: React.CSSProperties | undefined;
}) => {
  return (
    <p className="text-gray-600 dark:text-gray-300" style={style}>
      {children}
    </p>
  );
};
