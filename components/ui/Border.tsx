interface Props {
  children?: React.ReactNode;
  /**
   * Show the site's focus ring when a control inside is keyboard-focused. The
   * circle clips anything its children draw outside it, so the ring has to
   * live on the border itself.
   */
  focusRing?: boolean;
}

export const Border = (props: Props) => {
  return (
    <div
      className={`flex w-fit border border-teal-100 dark:border-teal-900 rounded-full overflow-hidden ${
        props.focusRing
          ? "duration-300 ring-primary ring-offset-2 dark:ring-offset-black has-[:focus-visible]:ring-4"
          : ""
      }`}
    >
      {props.children}
    </div>
  );
};
