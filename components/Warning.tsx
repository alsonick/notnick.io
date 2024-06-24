interface Props {
  message: string;
}

export const Warning = ({ message }: Props) => {
  return (
    <p className="sm:text-base text-sm font-semibold text-orange-500">
      {message}
    </p>
  );
};
