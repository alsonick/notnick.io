export const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      className={`flex text-base items-center p-2 rounded-lg justify-center px-6 text-black
      dark:text-white duration-300 font-semibold focus:ring-offset-2 dark:ring-offset-black bg-gray-100 md:hover:bg-gray-200
      dark:bg-gray-800 md:dark:hover:bg-gray-900 outline-none focus:ring-4 ring-primary w-fit`}
      {...props}
    >
      {props.children}
    </button>
  );
};
