import { Menu } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";

// Next.js
import Link from "next/link";

interface Item {
  id: number;
  text: string;
  to: string;
}

interface Props {
  items: Item[];
}

export const Dropdown = ({ items }: Props) => {
  return (
    <div className="flex relative items-center justify-center">
      <Menu>
        <Menu.Button>
          <FiMenu className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer hover:text-black dark:hover:text-white duration-300" />
        </Menu.Button>
        <Menu.Items>
          <div className="flex flex-col absolute top-8 w-36 text-sm justify-between left-0 py-2  rounded-lg bg-white border border-teal-100 dark:bg-black dark:border-teal-900">
            {items.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <Link href={item.to}>
                    <a
                      className={`p-2 px-3 text-gray-600 dark:text-gray-300 ${
                        active
                          ? "bg-[#f54bff] dark:bg-[#f54bff] duration-300 text-white"
                          : " "
                      }`}
                    >
                      {item.text}
                    </a>
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
