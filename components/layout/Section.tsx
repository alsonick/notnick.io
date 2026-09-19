interface Props {
  children: React.ReactNode;
  topBorder?: boolean;
}

export const Section = (props: Props) => {
  return (
    <section
      className={`flex flex-col mb-12 ${
        props.topBorder && "border-t border-teal-100 dark:border-teal-900 pt-5"
      }`}
    >
      {props.children}
    </section>
  );
};
