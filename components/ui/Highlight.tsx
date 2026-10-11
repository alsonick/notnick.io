interface Props {
  children?: React.ReactNode;
}

export const Highlight = (props: Props) => {
  return (
    <span
      className="text-black dark:text-white font-medium underline decoration-dotted decoration-2
      underline-offset-4 decoration-primary"
    >
      {props.children}
    </span>
  );
};
