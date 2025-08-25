import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import { useState } from "react";

// Next.js
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

interface Item {
  dropdown?: string | undefined;
  text: string;
  id: number;
  to: string;
}

interface Props {
  items: Item[];
}

export const NavDropdown = ({ items }: Props) => {
  const router = useRouter();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="focus:ring-4 ring-primary focus:ring-offset-2 dark:ring-offset-black rounded-lg outline-none duration-300">
        <FiMenu className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer hover:text-black dark:hover:text-white duration-300" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-36 bg-white border border-teal-100 dark:bg-[#10161a]/100 dark:border-teal-900"
        align="start"
      >
        {items.map((item) => (
          <DropdownMenuItem key={item.id} asChild>
            <Link
              href={item.to}
              className={`w-full cursor-pointer text-black dark:text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white duration-300 ${
                (
                  item.to === "/"
                    ? router.pathname === item.to
                    : router.pathname.includes(item.to)
                )
                  ? "bg-gray-100 dark:bg-gray-800"
                  : ""
              }`}
            >
              {item.dropdown ? item.dropdown : item.text}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
