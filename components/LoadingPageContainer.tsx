interface Props {
  children?: React.ReactNode;
}

export const LoadingPageContainer = (props: Props) => {
  return (
    <div className="h-full flex items-center justify-center text-center">
      {props.children}
    </div>
  );
};
