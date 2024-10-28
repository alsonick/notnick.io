interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode | undefined;
  title?: string | undefined;
}

export const RoundedBox = (props: Props) => {
  return (
    <button
      className={`flex items-center justify-center focus:ring-4 ring-primary outline-none bg-gray-100 text-black
      h-9 w-9 duration-300 hover:bg-gray-200 hover:translate-y-1rounded-lg ml-auto dark:bg-gray-800
    dark:hover:bg-gray-900 dark:text-white rounded-lg focus:ring-offset-2 dark:ring-offset-black`}
      onClick={props.onClick}
      title={props.title}
    >
      {props.children}
    </button>
  );
};
