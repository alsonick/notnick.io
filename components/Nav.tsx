import { Toggle } from "./Toggle";

import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="flex px-6 top-8 fixed border border-teal-100 w-[90%] md:w-[40rem] dark:border-teal-900 backdrop-blur-md mb-12 rounded-lg justify-between h-14 items-center">
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
      <a className="mr-8 text-black text-sm font-light dark:text-white hover:underline">
        {children}
      </a>
    </Link>
  );
};
