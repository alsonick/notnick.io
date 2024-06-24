interface Props {
  message: string;
}

export const Success = ({ message }: Props) => {
  return (
    <p className="sm:text-base text-sm font-semibold text-green-500">
      {message}
    </p>
  );
};
