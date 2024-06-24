import Link from "next/link";
import { THEME } from "../lib/constants";

interface Props {
  className?: string | undefined;
  children: React.ReactNode;
  to: string;
}

export const NavLinkTag = ({ children, to, className }: Props) => {
  return (
    <Link
      className={`mr-8 text-gray-600 focus:ring-offset-2 dark:ring-offset-black focus:ring-4 ring-[${THEME}]
        outline-none dark:text-gray-300  sm:text-base text-sm duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg ${className}`}
      href={to}
    >
      {children}
    </Link>
  );
};
