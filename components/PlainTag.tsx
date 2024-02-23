interface Props {
  text: string;
}

export const PlainTag = ({ text }: Props) => {
  return (
    <div
      className="duration-300 items-center bg-gray-100 dark:bg-gray-800
      p-2 px-3 rounded-lg justify-center"
    >
      <p className="text-black truncate dark:text-white">{text}</p>
    </div>
  );
};
