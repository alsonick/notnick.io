import { MouseEventHandler } from "react";
import { Learn } from "../types/topic";

type Props = {
  onClick?: MouseEventHandler<HTMLOptionElement> | undefined;
  items: Learn[] & {};
};

export const SecondaryFilterBox = ({ onClick, items }: Props) => {
  return (
    <select
      className="flex p-3 font-semibold items-center text-sm justify-between 
    dark:bg-[#10161a]/50 dark:text-white rounded-lg bg-white border border-teal-100
    dark:bg-black dark:border-teal-900 focus:ring-4 ring-[#f54bff] outline-none duration-300
    focus:ring-offset-2 dark:ring-offset-black w-full"
    >
      {items.map((item) => (
        <option key={item.id} onClick={onClick}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

//
