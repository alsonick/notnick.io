interface Props {
  style?: React.CSSProperties | undefined;
  title: string;
}

export const PostCardTag = (props: Props) => {
  return (
    <div
      className="text-base rounded truncate duration-300 w-fit font-semibold
      border-teal-100 dark:border-teal-900  text-gray-600 dark:text-gray-300"
      style={props.style}
    >
      {props.title}
    </div>
  );
};
