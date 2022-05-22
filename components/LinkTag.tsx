import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}

export const LinkTag = ({ href, children, style, target }: Props) => {
  return (
    <Link href={href} rel="noreferrer">
      <a
        className="font-bold w-fit text-[#f54bff] hover:underline"
        style={style}
        target={target}
      >
        {children}
      </a>
    </Link>
  );
};
