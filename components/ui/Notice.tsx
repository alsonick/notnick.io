interface Props {
  children?: React.ReactNode | undefined;
}

export const Notice = (props: Props) => {
  return (
    <p className="text-xl text-center font-semibold text-gray-500 dark:text-gray-400">
      {props.children}
    </p>
  );
};
