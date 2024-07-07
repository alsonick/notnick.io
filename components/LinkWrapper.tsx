import Link from "next/link";

interface Props {
  children?: React.ReactNode;
  title: string;
  href: string;
}

export const LinkWrapper = ({ href, children, title }: Props) => {
  return (
    <Link
      href={href}
      className={`text-2xl duration-300 focus:ring-4 focus:ring-offset-4 dark:ring-offset-black rounded
        ring-primary outline-none cursor-pointer mr-6 hover:text-black dark:hover:text-white text-gray-600
        dark:text-gray-300 hover:scale-110`}
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </Link>
  );
};
