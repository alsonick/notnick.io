interface Props {
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
  style?: React.CSSProperties | undefined;
  action?: string | undefined;
  hoverBorder?: boolean;
  children?: React.ReactNode;
}

export const Form = (props: Props) => {
  return (
    <form
      className={`flex flex-col w-full dark:bg-[#10161a]/50 rounded-lg p-4 mt-5
      duration-300 border border-teal-100 dark:border-teal-900 z-10 ${
        props.hoverBorder
          ? "sm:hover:border-primary sm:dark:hover:border-primary"
          : ""
      }`}
      onSubmit={props.onSubmit}
      action={props.action}
      style={props.style}
    >
      {props.children}
    </form>
  );
};
