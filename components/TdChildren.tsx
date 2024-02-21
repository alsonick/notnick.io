import React from "react";

interface Props {
  children: React.ReactNode;
}

export const TdChildren = ({ children }: Props) => {
  return <td>{children}</td>;
};
