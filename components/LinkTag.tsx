import { THEME } from "../lib/constants";

// Next.js
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: ((e: any) => void) | undefined;
}

export const LinkTag = ({ href, children, style, target, onClick }: Props) => {
  return (
    <Link
      className={`font-bold focus:ring-offset-2 dark:ring-offset-black rounded inline-flex items-center w-fit text-[${THEME}]
      hover:underline focus:ring-4 ring-[${THEME}] outline-none duration-300`}
      style={style}
      target={target}
      href={href}
      onClick={onClick}
      rel="noreferrer"
    >
      {children}a
    </Link>
  );
};
