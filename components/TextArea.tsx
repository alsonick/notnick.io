export const TextArea = (
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) => {
  return (
    <textarea
      className="lex items-center p-2 rounded-lg justify-center px-4 text-black
  dark:text-white duration-300 font-semibold bg-gray-100
  dark:bg-gray-800 focus:ring-2 ring-[#f54bff] resize-none outline-none"
      {...props}
    />
  );
};
