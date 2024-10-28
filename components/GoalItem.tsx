interface Props {
  children: React.ReactNode;
  completed: boolean;
}

export const GoalItem = (props: Props) => {
  return (
    <li className="text-gray-600 dark:text-gray-300 list-disc">
      {props.children} {props.completed ? "✅" : "❌"}
    </li>
  );
};
