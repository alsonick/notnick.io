interface Props {
  center: boolean;
  text: string;
}

export const Td = ({ text, center }: Props) => {
  return (
    <td
      className={`text-gray-600 dark:text-gray-300 max-w-xs border border-teal-100 dark:border-teal-900 p-2 ${
        center ? "text-center" : "text-left lg:text-center"
      }`}
    >
      {text}
    </td>
  );
};
