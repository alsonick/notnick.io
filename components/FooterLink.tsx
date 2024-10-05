import Link from "next/link";

interface Props {
  children: React.ReactNode;
  title: string;
  link: string;
}

export const FooterLink = ({ children, title, link }: Props) => {
  return (
    <Link
      className={`hover:underline dark:hover:text-white hover:text-black focus:ring-4 dark:ring-offset-black opacity-100
        ring-primary focus:ring-offset-2 outline-none rounded border-none duration-300`}
      href={link}
      title={title}
      target="_blank"
    >
      <b>{children}</b>
    </Link>
  );
};
