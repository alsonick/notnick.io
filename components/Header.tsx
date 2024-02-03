interface Props {
  children?: React.ReactNode;
  singleItem: boolean;
  column?: boolean;
}

export const Header = ({ children, singleItem, column }: Props) => {
  return (
    <header
      className={`flex ${
        column ? "flex-col" : "flex-row"
      } my-4 mt-5 min-h-[4rem] ${
        !singleItem && "justify-between items-center"
      }`}
    >
      {children}
    </header>
  );
};
