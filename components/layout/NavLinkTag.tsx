import Link from "next/link";

interface Props {
  className?: string | undefined;
  children: React.ReactNode;
  /** Full name of the page, since the visible text is abbreviated ("exp", "/"). */
  label?: string;
  current?: boolean;
  to: string;
}

export const NavLinkTag = (props: Props) => {
  return (
    <Link
      className={`mr-8 text-gray-600 focus:ring-offset-2 dark:ring-offset-black focus:ring-4 ring-primary
          outline-none dark:text-gray-300 text-base duration-300 hover:bg-gray-100
        dark:hover:bg-gray-800 p-2 rounded-lg border ${props.className}`}
      aria-current={props.current ? "page" : undefined}
      aria-label={props.label}
      title={props.label}
      href={props.to}
    >
      {props.children}
    </Link>
  );
};
