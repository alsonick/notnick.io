interface Props {
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
  action?: string | undefined;
  children?: React.ReactNode;
}

export const Form = ({ onSubmit, action, children }: Props) => {
  return <form
    className="flex flex-col w-full dark:bg-[#10161a]/50 rounded-lg p-4 mt-5 
    duration-300 border border-teal-100 dark:border-teal-900"
    onSubmit={onSubmit}
    action={action}
  >
    {children}
  </form>;
};
