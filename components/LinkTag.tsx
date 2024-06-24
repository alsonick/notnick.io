import { THEME } from "../lib/constants";

// Next.js
import Link from "next/link";

interface Props {
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: ((e: any) => void) | undefined;
  style?: React.CSSProperties | undefined;
  children: React.ReactNode;
  href: string;
}

export const LinkTag = ({ href, children, style, target, onClick }: Props) => {
  return (
    <Link
      className={`font-bold  sm:text-base text-sm focus:ring-offset-2 dark:ring-offset-black rounded inline-flex items-center w-fit text-[${THEME}]
      hover:underline focus:ring-4 ring-[${THEME}] outline-none duration-300`}
      style={style}
      target={target}
      href={href}
      onClick={onClick}
      rel="noreferrer"
    >
      {children}
    </Link>
  );
};
