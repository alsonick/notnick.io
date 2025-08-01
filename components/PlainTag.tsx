interface Props {
  text: string;
}

export const PlainTag = (props: Props) => {
  return (
    <div
      className="duration-300 items-center w-fit font-medium
      bg-gray-100 dark:bg-gray-800 p-2 px-3 rounded-lg justify-center"
    >
      <p className="text-black truncate text-base dark:text-white">
        {props.text}
      </p>
    </div>
  );
};
