interface Props {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  children?: React.ReactNode;
}

export const Heading = (props: Props) => {
  return (
    <h1
      className={`sm:text-4xl text-3xl font-bold mb-6 dark:text-white ${props.className}`}
      style={props.style}
    >
      {props.children}
    </h1>
  );
};
