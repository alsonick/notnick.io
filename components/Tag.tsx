import { THEME } from "../lib/constants";

export const Tag = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      title={title}
      className={`flex items-center w-fit p-1 px-3 text-white font-bold rounded-full text-sm bg-[${THEME}]`}
    >
      {title}
      {icon}
    </div>
  );
};
