interface Props {
  message: string;
}

export const Success = ({ message }: Props) => {
  return <p className="text-sm text-green-500">{message}</p>;
};
