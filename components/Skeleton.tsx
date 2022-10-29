export const Skeleton = () => {
  return (
    <div className="flex items-center justify-center animate-pulse h-12 mb-8">
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-slate-200 dark:bg-gray-800 mr-4"></div>
      <div className=" flex flex-1 bg-slate-200 dark:bg-gray-800 rounded h-12"></div>
    </div>
  );
};
