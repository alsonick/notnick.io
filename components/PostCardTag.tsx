export const PostCardTag = ({ title }: { title: string }) => {
  return (
    <div className="text-sm border rounded duration-300 w-fit p-[3px] mt-3 border-teal-100 dark:border-teal-900 px-3 text-gray-600 dark:text-gray-300">
      {title}
    </div>
  );
};
