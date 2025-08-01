interface Props {
  type: "error" | "success" | "warning";
  message: string;
}

export const StatusMessage = (props: Props) => {
  return (
    <>
      {props.type === "error" && (
        <p className="text-base font-semibold text-red-500">{props.message}</p>
      )}
      {props.type === "success" && (
        <p className="text-base font-semibold text-green-500">
          {props.message}
        </p>
      )}
      {props.type === "warning" && (
        <p className="text-base font-semibold text-orange-500">
          {props.message}
        </p>
      )}
    </>
  );
};
