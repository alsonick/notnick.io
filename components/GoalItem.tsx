interface Props {
  children: React.ReactNode;
  completed: boolean;
}

export const GoalItem = ({ children, completed }: Props) => {
  return (
    <li className="text-gray-600 dark:text-gray-300 list-disc">
      {children} {completed ? "✅" : "❌"}
    </li>
  );
};
