import Link from "next/link";

interface Props {
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: ((e: any) => void) | undefined;
  style?: React.CSSProperties | undefined;
  title?: string | undefined;
  href?: string | undefined;
  children: React.ReactNode;
}

export const LinkT = ({
  children,
  onClick,
  target,
  style,
  title,
  href,
}: Props) => {
  return (
    <Link
      href={href || ""}
      title={title}
      className={`font-bold focus:ring-offset-2 dark:ring-offset-black rounded outline-none focus:ring-[#f54bff] 
      items-center inline-flex w-fit duration-300 cursor-pointer text-[#f54bff] hover:underline focus:ring-4`}
      onClick={onClick}
      style={style}
      target={target}
    >
      {children}
    </Link>
  );
};
