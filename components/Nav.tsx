import { Toggle } from "./Toggle";

import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="flex top-7 px-6 fixed bg-white  border border-teal-100 dark:border-teal-900 dark:bg-black rounded-lg justify-between w-[90%] md:w-[45rem] h-14 items-center">
      <div>
        <LinkTag to="/">Home</LinkTag>
        <LinkTag to="/notes">Notes</LinkTag>
        <LinkTag to="/blogs">Blogs</LinkTag>
      </div>
      <Toggle />
    </nav>
  );
};

const LinkTag = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <Link href={to}>
      <a className="mr-8 text-black dark:text-white hover:underline">
        {children}
      </a>
    </Link>
  );
};
