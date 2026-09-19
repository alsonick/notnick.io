interface Props {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  children?: React.ReactNode;
  /**
   * The heading level. Styling is the same at every level, so pick it from the
   * page outline: `h1` for the page title, `h2` for its sections, `h3` below.
   */
  as?: "h1" | "h2" | "h3";
}

export const Heading = (props: Props) => {
  const Tag = props.as ?? "h2";

  return (
    <Tag
      className={`sm:text-4xl text-3xl font-bold mb-6 dark:text-white ${props.className}`}
      style={props.style}
    >
      {props.children}
    </Tag>
  );
};
