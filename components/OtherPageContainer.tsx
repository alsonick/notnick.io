import { Footer } from "./Footer";

export const OtherPageContainer = ({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: boolean;
}) => {
  return (
    <div className="md:p-20 p-8 duration-300">
      {children} {footer ? <Footer /> : null}
    </div>
  );
};
