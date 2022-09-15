export const Tag = ({ title }: { title: string }) => {
  return (
    <div
      title={title}
      className="w-fit p-1 px-3 text-white font-bold rounded-full text-sm bg-[#f54bff]"
    >
      {title}
    </div>
  );
};
