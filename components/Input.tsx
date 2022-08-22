import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export const Input = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      className="flex items-center p-2 rounded-lg justify-center px-4 text-black
      dark:text-white duration-300 font-semibold bg-gray-100
      dark:bg-gray-800"
      {...props}
    />
  );
};
