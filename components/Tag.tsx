import { THEME } from "../lib/constants";

export const Tag = ({ title }: { title: string }) => {
  return (
    <div
      title={title}
      className={`w-fit p-1 px-3 text-white font-bold rounded-full text-sm bg-[${THEME}]`}
    >
      {title}
    </div>
  );
};
