interface Props {
  children?: React.ReactNode;
}

export const Table = ({ children }: Props) => {
  return (
    <table className="table-auto border w-full border-teal-100 dark:border-teal-900">
      {children}
    </table>
  );
};
