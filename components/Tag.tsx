interface Props {
  type?: "normal" | "success" | "error";
  icon?: React.ReactNode;
  title: string;
}

export const Tag = ({ type, title, icon }: Props) => {
  let color: string;

  switch (type) {
    case "success":
      color = "bg-green-500";
      break;
    case "error":
      color = "bg-red-500";
      break;
    default:
      color = `bg-primary`;
  }

  return (
    <div
      title={title}
      className={`flex items-center p-1 px-3 text-white font-bold rounded-full w-fit whitespace-nowrap text-sm ${color}`}
    >
      {title}
      {icon}
    </div>
  );
};
