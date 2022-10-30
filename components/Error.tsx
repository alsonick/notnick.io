interface Props {
  message: string;
}

export const Error = ({ message }: Props) => {
  return <p className="text-sm text-red-500">{message}</p>;
};
