import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({
  children,
  isDisplaySpotify,
}: {
  children?: React.ReactNode;
  isDisplaySpotify?: boolean;
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen scrollbar-thin scrollbar-thumb-gray-700
    scrollbar-track-gray-800 scrollbar-thumb-rounded-full"
    >
      <div className="flex flex-col h-full py-20 w-[90%] md:w-[40rem] mt-12">
        <Nav isDisplaySpotify={isDisplaySpotify} />
        {children}
        <Footer />
      </div>
    </div>
  );
};
