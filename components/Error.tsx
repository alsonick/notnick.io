interface Props {
  message: string;
}

export const Error = ({ message }: Props) => {
  return (
    <p className="sm:text-base text-sm font-semibold text-red-500">{message}</p>
  );
};
