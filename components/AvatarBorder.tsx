interface Props {
  children?: React.ReactNode | undefined;
}

export const AvatarBorder = ({ children }: Props) => {
  return (
    <div className="mr-3 border flex items-center justify-center rounded-full border-teal-100 dark:border-teal-900">
      {children}
    </div>
  );
};
