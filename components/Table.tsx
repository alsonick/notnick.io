export const Table = ({ children }: { children?: React.ReactNode }) => {
  return (
    <table className="table-auto border w-full border-teal-100 dark:border-teal-900">
      {children}
    </table>
  );
};