import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white border-b z-10 fixed h-20 px-4 w-full sm:px-12">
      <h1 className="text-lg font-semibold">Nicholas Njoki</h1>
      <div className="flex items-center">
        <LinkTag href="https://twitter.com/heynickn">Twitter</LinkTag>
        <LinkTag href="https://github.com/alsonick">GitHub</LinkTag>
        <div className="ml-6 sm:ml-12">
          <Button>Contact</Button>
        </div>
      </div>
    </header>
  );
};

interface Props {
  children: ReactNode;
  href: string;
}

const LinkTag: React.FC<Props> = ({ href, children }) => {
  return (
    <a className="text-sm font-medium ml-6 sm:ml-12" target="_blank">
      <Link href={href}>{children}</Link>
    </a>
  );
};
