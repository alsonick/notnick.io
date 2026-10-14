interface Props {
  children?: React.ReactNode;
}

// A highlighter-pen stroke across the lower part of the text. Cloned per line
// so a phrase that wraps gets the stroke on every line it spans.
export const Highlight = (props: Props) => {
  return (
    <span
      className="text-black dark:text-white font-medium box-decoration-clone
      bg-[linear-gradient(transparent_60%,rgb(var(--color-primary)/0.3)_60%)]"
    >
      {props.children}
    </span>
  );
};
