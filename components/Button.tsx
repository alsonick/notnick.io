import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export const Button: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  return (
    <button
      className="flex flex-col items-center justify-center font-medium text-sm rounded text-white bg-black h-12 px-6"
      {...props}
    >
      {props.children}
    </button>
  );
};
