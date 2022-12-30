interface Props {
  message: string;
}

export const Error = ({ message }: Props) => {
  return <p className="text-sm font-semibold text-red-500">{message}</p>;
};
