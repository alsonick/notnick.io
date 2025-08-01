import Link from "next/link";

interface Props {
  className?: string | undefined;
  children: React.ReactNode;
  title?: string;
  to: string;
}

export const NavLinkTag = (props: Props) => {
  return (
    <Link
      className={`mr-8 text-gray-600 focus:ring-offset-2 dark:ring-offset-black focus:ring-4 ring-primary
          outline-none dark:text-gray-300 text-base duration-300 hover:bg-gray-100
        dark:hover:bg-gray-800 p-2 rounded-lg ${props.className}`}
      title={props.title}
      href={props.to}
    >
      {props.children}
    </Link>
  );
};
