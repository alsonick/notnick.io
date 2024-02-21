interface Props {
  mobileColumnLayout?: boolean;
  children?: React.ReactNode;
  singleItem: boolean;
  column?: boolean;
}

export const Header = ({
  mobileColumnLayout,
  singleItem,
  children,
  column,
}: Props) => {
  return (
    <header
      className={`flex ${mobileColumnLayout && "sm:flex-row flex-col w-full"} ${
        column ? "flex-col" : "flex-row"
      } my-4 mt-5 min-h-[4rem] ${
        !singleItem &&
        `justify-between ${mobileColumnLayout ? "items-start" : "items-center"}`
      }`}
    >
      {children}
    </header>
  );
};
