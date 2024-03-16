import React from "react";

interface Props {
  children: React.ReactNode;
}

export const TdChildren = ({ children }: Props) => {
  return (
    <td className="border border-teal-100 dark:border-teal-900">{children}</td>
  );
};
