import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export const Input = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      className={`flex items-center p-2 rounded-lg justify-center px-4 text-black
      dark:text-white duration-300 sm:text-base text-sm bg-gray-100 focus:ring-offset-2 dark:ring-offset-black
      dark:bg-gray-800 focus:ring-4 ring-primary outline-none`}
      {...props}
    />
  );
};
