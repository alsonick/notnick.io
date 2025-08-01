interface Props {
  children?: React.ReactNode;
}

export const Key = (props: Props) => {
  return (
    <span className="text-black dark:text-white font-bold text-base">
      {props.children}
    </span>
  );
};
