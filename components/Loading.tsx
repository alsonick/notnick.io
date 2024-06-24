interface Props {
  loading: boolean;
  text: string;
}

export const Loading = ({ loading, text }: Props) => {
  return (
    <>
      {loading ? (
        <p className="sm:text-base text-sm text-gray-600 dark:text-gray-300">
          {text}
        </p>
      ) : null}
    </>
  );
};
