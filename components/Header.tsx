interface Props {
  mobileColumnLayout?: boolean;
  children?: React.ReactNode;
  singleItem: boolean;
  column?: boolean;
}

export const Header = (props: Props) => {
  return (
    <header
      className={`flex ${
        props.mobileColumnLayout && "sm:flex-row flex-col w-full"
      } ${props.column ? "flex-col" : "flex-row"} my-4 mt-5 min-h-[4rem] ${
        !props.singleItem &&
        `justify-between ${
          props.mobileColumnLayout ? "items-start" : "items-center"
        }`
      }`}
    >
      {props.children}
    </header>
  );
};
