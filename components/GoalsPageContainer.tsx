interface Props {
  children?: React.ReactNode;
}

export const GoalsPageContainer = ({ children }: Props) => {
  return <ul className="pl-10">{children}</ul>;
};
