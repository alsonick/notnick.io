import Link from "next/link";

interface Props {
  href?: string | undefined;
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: ((e: any) => void) | undefined;
}

export const LinkT = ({ href, style, target, children, onClick }: Props) => {
  return (
    <Link
      href={href || ""}
      className="font-bold focus:ring-offset-2 dark:ring-offset-black rounded outline-none focus:ring-[#f54bff] 
      items-center inline-flex w-fit duration-300 cursor-pointer text-[#f54bff] hover:underline focus:ring-4"
      onClick={onClick}
      style={style}
      target={target}
    >
      {children}
    </Link>
  );
};
