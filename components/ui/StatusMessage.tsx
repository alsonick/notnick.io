interface Props {
  type: "error" | "success" | "warning";
  message: string;
}

// The -600/-700 shades clear 4.5:1 on white; the -500 shades already do on black.
const COLOR = {
  error: "text-red-600 dark:text-red-500",
  success: "text-green-700 dark:text-green-500",
  warning: "text-orange-700 dark:text-orange-500",
};

export const StatusMessage = (props: Props) => {
  return (
    // Errors interrupt so they're heard right after submitting; success and
    // warnings wait for the screen reader to finish what it's saying.
    <p
      className={`text-base font-semibold ${COLOR[props.type]}`}
      role={props.type === "error" ? "alert" : "status"}
    >
      {props.message}
    </p>
  );
};
