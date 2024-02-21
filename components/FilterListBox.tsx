import { FiChevronDown, FiCheck } from "react-icons/fi";
import { Listbox } from "@headlessui/react";
import { THEME } from "../lib/constants";
import { Fragment } from "react";

interface Props<T> {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  selectedItem: string;
  fullWidth?: boolean;
  items: T[];
}

export const FilterListBox = <T extends unknown>({
  onChange,
  selectedItem,
  fullWidth = false,
  items,
}: Props<T>) => {
  return (
    <Listbox value={selectedItem} onChange={onChange}>
      <div
        className={`flex duration-300 relative flex-col ${
          fullWidth ? "w-full" : "w-1/2"
        }`}
      >
        <Listbox.Button
          className={`flex p-3 font-semibold items-center text-sm justify-between 
        dark:bg-[#10161a]/50 dark:text-white rounded-lg bg-white border border-teal-100
        dark:bg-black dark:border-teal-900 focus:ring-4 ring-[${THEME}] outline-none duration-300
        focus:ring-offset-2 dark:ring-offset-black`}
        >
          {selectedItem} <FiChevronDown />
        </Listbox.Button>
        <Listbox.Options
          className="flex z-10 absolute w-full flex-col border bg-white
        border-teal-100 dark:bg-black dark:border-teal-900 rounded-lg mt-16"
        >
          {items.map((item: any) => (
            <Listbox.Option key={item.id} value={item.filter} as={Fragment}>
              {({
                active,
                selected,
              }: {
                active: boolean;
                selected: boolean;
              }) => (
                <li
                  className={`flex cursor-pointer font-semibold text-sm dark:bg-black
                  dark:text-white items-center justify-between p-3 rounded-lg ${
                    active
                      ? `bg-[${THEME}] dark:bg-[#f54bff]  duration-300 text-white`
                      : "bg-white text-black"
                  }`}
                >
                  {item.filter}
                  {selected && <FiCheck />}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
