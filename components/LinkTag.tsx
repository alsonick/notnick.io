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
      className="font-bold inline-flex items-center w-fit text-[#f54bff] hover:underline"
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
