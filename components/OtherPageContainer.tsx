import { Footer } from "./Footer";

export const OtherPageContainer = ({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: boolean;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex flex-col h-full py-10 w-[90%] md:w-[40rem] mt-12">
        {children} {footer ? <Footer /> : null}
      </div>
    </div>
  );
};
