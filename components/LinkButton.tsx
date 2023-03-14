import Link from "next/link";

interface Props {
  target: React.HTMLAttributeAnchorTarget | undefined;
  children: React.ReactNode;
  href: string;
}

export const LinkButton = ({ target, children, href }: Props) => {
  return (
    <Link
      className="flex items-center p-2 rounded-lg justify-center px-6 text-black
    dark:text-white duration-300 font-semibold focus:ring-offset-2 dark:ring-offset-black bg-gray-100 hover:bg-gray-200
    dark:bg-gray-800 dark:hover:bg-gray-900 outline-none focus:ring-4 ring-[#f54bff] w-fit"
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};
