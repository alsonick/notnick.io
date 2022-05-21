import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const LinkTag = ({ href, children }: Props) => {
  return (
    <Link href={href} rel="noreferrer">
      <a className="font-bold text-[#f54bff] hover:underline" target="_blank">
        {children}
      </a>
    </Link>
  );
};
