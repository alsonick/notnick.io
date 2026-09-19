interface Props {
  type?: "normal" | "success" | "error";
  icon?: React.ReactNode;
  title: string;
}

export const Tag = (props: Props) => {
  let color: string;

  // Deep fills with white text in light mode, bright fills with black text in
  // dark mode: both clear 4.5:1, which white on the bright fills does not.
  switch (props.type) {
    case "success":
      color = "bg-green-700 text-white dark:bg-green-500 dark:text-black";
      break;
    case "error":
      color = "bg-red-600 text-white dark:bg-red-500 dark:text-black";
      break;
    default:
      color = "bg-primary text-white dark:text-black";
  }

  return (
    <div
      title={props.title}
      className={`flex items-center p-1 px-3 font-bold rounded-full w-fit whitespace-nowrap text-sm ${color}`}
    >
      {props.title}
      {props.icon}
    </div>
  );
};
