interface Props {
  style?: React.CSSProperties | undefined;
  children: React.ReactNode;
}

export const Text = ({ children, style }: Props) => {
  return (
    <p className="text-gray-600 dark:text-gray-300" style={style}>
      {children}
    </p>
  );
};
