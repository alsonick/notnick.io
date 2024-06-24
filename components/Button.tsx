import { THEME } from "../lib/constants";

export const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      className={`flex sm:text-base text-sm items-center p-2 rounded-lg justify-center px-6 text-black
      dark:text-white duration-300 font-semibold focus:ring-offset-2 dark:ring-offset-black bg-gray-100 hover:bg-gray-200
      dark:bg-gray-800 dark:hover:bg-gray-900 outline-none focus:ring-4 ring-[${THEME}] w-fit`}
      {...props}
    >
      {props.children}
    </button>
  );
};
