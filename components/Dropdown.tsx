import { Menu } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";

// Next.js
import Link from "next/link";

interface Item {
  dropdown?: string | undefined;
  text: string;
  id: number;
  to: string;
}

interface Props {
  items: Item[];
}

export const Dropdown = (props: Props) => {
  return (
    <div className="flex relative items-center justify-center">
      <Menu>
        <Menu.Button className="focus:ring-4 ring-primary focus:ring-offset-2 dark:ring-offset-black rounded outline-none duration-300">
          <FiMenu className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer hover:text-black dark:hover:text-white duration-300" />
        </Menu.Button>
        <Menu.Items>
          <div className="flex flex-col focus:ring-4 ring-primary p-1 absolute top-8 w-36 sm:text-base text-sm justify-between left-0 py-2 rounded-lg bg-white border border-teal-100 dark:bg-[#10161a]/100 dark:border-teal-900">
            {props.items.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <Link
                    className={`p-2 px-3 text-black rounded-lg dark:text-white ${
                      active
                        ? "bg-primary dark:bg-primary duration-300 text-white"
                        : " "
                    }`}
                    href={item.to}
                  >
                    {item.dropdown ? item.dropdown : item.text}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};
