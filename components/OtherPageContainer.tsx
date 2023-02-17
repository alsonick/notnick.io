import { Footer } from "./Footer";

export const OtherPageContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="md:p-20 p-8 duration-300">
      {children} <Footer />
    </div>
  );
};
