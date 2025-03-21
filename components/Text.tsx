interface Props {
  style?: React.CSSProperties | undefined;
  children: React.ReactNode;
  sliceText?: boolean;
  slice?: number;
}

export const Text = (props: Props) => {
  return (
    <p
      className="text-gray-600 dark:text-gray-300 sm:text-base text-sm"
      style={props.style}
    >
      {!props.sliceText
        ? props.children
        : `${String(props.children).slice(0, props.slice).trim()}...`}
    </p>
  );
};
