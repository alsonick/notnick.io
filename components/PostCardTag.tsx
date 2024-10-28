interface Props {
  style?: React.CSSProperties | undefined;
  title: string;
}

export const PostCardTag = (props: Props) => {
  return (
    <div
      className="text-sm border rounded truncate duration-300 w-fit p-[3px] mt-3
      border-teal-100 dark:border-teal-900 px-3 text-gray-600 dark:text-gray-300"
      style={props.style}
    >
      {props.title}
    </div>
  );
};
