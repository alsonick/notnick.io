import { THEME } from "../lib/constants";

interface Props {
  icon?: React.ReactNode;
  title: string;
}

export const Tag = ({ title, icon }: Props) => {
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
