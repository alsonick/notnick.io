export const Heading = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
}) => {
  return (
    <h1
      className="text-4xl font-bold tracking-tight mb-6 dark:text-white"
      style={style}
    >
      {children}
    </h1>
  );
};
