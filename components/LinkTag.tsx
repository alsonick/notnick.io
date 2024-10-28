import Link from "next/link";

interface Props {
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: ((e: any) => void) | undefined;
  style?: React.CSSProperties | undefined;
  children: React.ReactNode;
  href: string;
}

export const LinkTag = (props: Props) => {
  return (
    <Link
      className={`font-bold  sm:text-base text-sm focus:ring-offset-2 dark:ring-offset-black rounded inline-flex items-center w-fit text-primary
      hover:underline focus:ring-4 ring-primary outline-none duration-300`}
      style={props.style}
      target={props.target}
      href={props.href}
      onClick={props.onClick}
      rel="noreferrer"
    >
      {props.children}
    </Link>
  );
};
