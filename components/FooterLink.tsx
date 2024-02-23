import { THEME } from "../lib/constants";

// Next.js
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  link: string;
}

export const FooterLink = ({ children, link }: Props) => {
  return (
    <Link
      className={`hover:underline dark:hover:text-white hover:text-black focus:ring-4 dark:ring-offset-black opacity-100
        ring-[${THEME}] focus:ring-offset-2 outline-none rounded border-none duration-300`}
      href={link}
      target="_blank"
    >
      <b>{children}</b>
    </Link>
  );
};
