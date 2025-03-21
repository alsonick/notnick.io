import { FiChevronDown, FiCheck } from "react-icons/fi";
import { Listbox } from "@headlessui/react";
import { Fragment } from "react";

interface Props<T> {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  selectedItem: string;
  fullWidth?: boolean;
  items: T[];
}

export const FilterListBox = <T extends unknown>(props: Props<T>) => {
  return (
    <Listbox value={props.selectedItem} onChange={props.onChange}>
      <div
        className={`flex duration-300 relative flex-col ${
          props.fullWidth ? "w-full" : "w-1/2"
        }`}
      >
        <Listbox.Button
          className={`flex p-3 font-semibold items-center sm:text-base text-sm justify-between 
        dark:bg-[#10161a]/50 dark:text-white rounded-lg bg-white border border-teal-100
        dark:bg-black dark:border-teal-900 focus:ring-4 ring-primary outline-none duration-300
        focus:ring-offset-2 dark:ring-offset-black`}
        >
          {props.selectedItem} <FiChevronDown />
        </Listbox.Button>
        <Listbox.Options
          className={`flex z-10 outline-none absolute w-full p-1 focus:ring-4 ring-primary flex-col border bg-white
        border-teal-100 dark:bg-black dark:border-teal-900 rounded-lg mt-16`}
        >
          {props.items.map((item: any) => (
            <Listbox.Option key={item.id} value={item.filter} as={Fragment}>
              {(props: { selected: boolean; active: boolean }) => (
                <li
                  className={`flex cursor-pointer font-semibold sm:text-base text-sm dark:bg-black
                  dark:text-white items-center justify-between p-3 rounded-lg ${
                    props.active
                      ? `bg-primary dark:bg-primary duration-300 text-white`
                      : "bg-white text-black"
                  }`}
                >
                  {item.filter}
                  {props.selected && <FiCheck />}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
