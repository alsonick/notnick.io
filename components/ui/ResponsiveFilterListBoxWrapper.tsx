interface Props {
  children?: React.ReactNode;
}

export const ResponsiveFilterListBoxWrapper = (props: Props) => {
  return (
    <div className="sm:mt-0 mt-3 duration-300 sm:w-1/2 w-full">
      {props.children}
    </div>
  );
};
