import { MouseEventHandler, useState } from "react";
import { Learn } from "../types/topic";

type Props = {
  onClick?: MouseEventHandler<HTMLOptionElement> | undefined;
  filter: (name: string) => void;
  items: Learn[] & {};
};

export const SecondaryFilterBox = (props: Props) => {
  const [selected, setSelected] = useState<string>(props.items[0].name);

  return (
    <select
      className={`flex p-3 font-semibold items-center text-sm justify-between 
    dark:bg-[#10161a]/50 dark:text-white rounded-lg bg-white border border-teal-100
    dark:bg-black dark:border-teal-900 focus:ring-4 ring-primary outline-none duration-300
    focus:ring-offset-2 dark:ring-offset-black w-full appearance-none`}
      value={selected}
      onChange={(e) => {
        setSelected(e.target.value);
        props.filter(e.target.value);
      }}
    >
      {props.items.map((item) => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

//
