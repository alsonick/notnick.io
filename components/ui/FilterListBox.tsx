import {
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
} from "./dropdown-menu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { Toast, ToastMessage } from "./Toast";
import { useState } from "react";

interface Props<T> {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  selectedItem: string;
  fullWidth?: boolean;
  /** What is being filtered, e.g. "Filter posts by tag". Read out by screen readers. */
  label: string;
  items: T[];
}

// Built on the same Radix dropdown as the rest of the site (see Dropdown and
// ApplyForm), so filters open, animate and highlight the same way.
export const FilterListBox = <T extends unknown>(props: Props<T>) => {
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const handleChange = (value: string) => {
    // Radix reports a pick even when it's the option already selected.
    if (value === props.selectedItem) return;
    props.onChange(value);

    // Every filter lists its "All" option first, and picking it clears the filter.
    const cleared = value === (props.items[0] as { filter?: string })?.filter;
    setToast({
      id: Date.now(),
      text: cleared ? "Filter cleared" : `Filter applied: ${value}`,
    });
  };

  return (
    <div
      className={`flex duration-300 relative flex-col ${
        props.fullWidth ? "w-full" : "w-1/2"
      }`}
    >
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger
          aria-label={`${props.label}: ${props.selectedItem}`}
          className={`flex p-3 font-semibold items-center text-base justify-between
          dark:bg-[#10161a]/50 dark:text-white rounded-lg bg-white border border-teal-100
          dark:bg-black dark:border-teal-900 focus:ring-4 ring-primary outline-none duration-300
          focus:ring-offset-2 dark:ring-offset-black`}
        >
          {props.selectedItem} <FiChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] bg-white border border-teal-100 dark:bg-[#10161a]/100 dark:border-teal-900"
          align="start"
        >
          <DropdownMenuRadioGroup
            value={props.selectedItem}
            onValueChange={handleChange}
          >
            {props.items.map((item: any) => (
              // The shared RadioItem reserves a left gutter for its dot, which
              // pushes the text in; use the other dropdowns' padding and mark
              // the selected option with a check on the right instead.
              <DropdownMenuPrimitive.RadioItem
                className="relative flex w-full cursor-pointer select-none items-center justify-between gap-4 rounded-lg
                px-2 py-1.5 text-base outline-none text-black dark:text-white hover:bg-primary hover:text-white
                focus:bg-primary focus:text-white dark:hover:text-black dark:focus:text-black transition-colors duration-300"
                value={item.filter}
                key={item.id}
              >
                {item.filter}
                <DropdownMenuPrimitive.ItemIndicator>
                  <FiCheck />
                </DropdownMenuPrimitive.ItemIndicator>
              </DropdownMenuPrimitive.RadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Toast toast={toast} />
    </div>
  );
};
