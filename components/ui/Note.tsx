type Props = {
  children: React.ReactNode;
};

export const Note = (props: Props) => {
  return (
    // Muted with a lighter grey rather than opacity, which would also fade any
    // links inside below readable contrast.
    <div className="border-l-4 text-base pl-4 max-w-lg border-teal-100 dark:border-teal-900">
      <p className="text-gray-500 dark:text-gray-400 text-base">
        {props.children}
      </p>
    </div>
  );
};
