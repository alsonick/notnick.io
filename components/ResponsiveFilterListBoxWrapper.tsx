interface Props {
  children?: React.ReactNode;
}

export const ResponsiveFilterListBoxWrapper = ({ children }: Props) => {
  return (
    <div className="sm:mt-0 mt-3 duration-300 sm:w-1/2 w-full">{children}</div>
  );
};
