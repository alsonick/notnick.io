interface Props {
  children?: React.ReactNode;
}

export const LoadingPageContainer = ({ children }: Props) => {
  return (
    <div className="h-full flex items-center justify-center text-center">
      {children}
    </div>
  );
};
