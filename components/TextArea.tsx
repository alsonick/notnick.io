export const TextArea = (
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) => {
  return (
    <textarea
      className={`flex items-center text-base font-medium p-2 rounded-lg justify-center px-4 text-black
    dark:text-white duration-300 bg-gray-100 focus:ring-offset-2 dark:ring-offset-black
    dark:bg-gray-800 focus:ring-4 ring-primary resize-none outline-none`}
      {...props}
    />
  );
};
