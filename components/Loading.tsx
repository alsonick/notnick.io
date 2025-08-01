interface Props {
  loading: boolean;
  text: string;
}

export const Loading = (props: Props) => {
  return (
    <>
      {props.loading ? (
        <p className="text-base text-gray-600 dark:text-gray-300">
          {props.text}
        </p>
      ) : null}
    </>
  );
};
