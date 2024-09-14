interface Props {
  children?: React.ReactNode;
}

export const Border = ({ children }: Props) => {
  return (
    <div className="flex w-fit border border-teal-100 dark:border-teal-900 rounded-full">
      {children}
    </div>
  );
};
