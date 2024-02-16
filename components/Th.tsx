export const Th = ({ text }: { text: string }) => {
  return (
    <th className="text-black dark:text-white font-bold border border-teal-100 dark:border-teal-900 p-2">
      {text}
    </th>
  );
};
