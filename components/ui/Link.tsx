import Link from "next/link";

interface Props {
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: ((e: any) => void) | undefined;
  style?: React.CSSProperties | undefined;
  title?: string | undefined;
  href?: string | undefined;
  children: React.ReactNode;
}

export const LinkT = (props: Props) => {
  return (
    <Link
      href={props.href || ""}
      title={props.title}
      className={`font-bold text-base focus:ring-offset-2 dark:ring-offset-black rounded outline-none focus:ring-primary 
      items-center inline-flex w-fit duration-300 cursor-pointer text-primary hover:underline focus:ring-4`}
      onClick={props.onClick}
      style={props.style}
      target={props.target}
    >
      {props.children}
    </Link>
  );
};
