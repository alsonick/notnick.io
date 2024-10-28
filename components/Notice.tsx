interface Props {
  children?: React.ReactNode | undefined;
}

export const Notice = (props: Props) => {
  return (
    <h1 className="text-xl text-center font-semibold opacity-30 dark:text-white">
      {props.children}
    </h1>
  );
};
