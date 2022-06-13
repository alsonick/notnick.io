export const Heading = ({
  className,
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
}) => {
  return (
    <h1
      className={`text-4xl font-bold tracking-tight mb-6 dark:text-white ${className}`}
      style={style}
    >
      {children}
    </h1>
  );
};
