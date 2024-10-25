interface Props {
  type: "error" | "success" | "warning";
  message: string;
}

export const StatusMessage = (props: Props) => {
  return (
    <>
      {props.type === "error" && (
        <p className="sm:text-base text-sm font-semibold text-red-500">
          {props.message}
        </p>
      )}
      {props.type === "success" && (
        <p className="sm:text-base text-sm font-semibold text-green-500">
          {props.message}
        </p>
      )}
      {props.type === "warning" && (
        <p className="sm:text-base text-sm font-semibold text-orange-500">
          {props.message}
        </p>
      )}
    </>
  );
};
