import { ContentUnavailable } from "./ContentUnavailable";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({
  supportLargeScreen = true,
  isDisplaySpotify,
  longLayoutFormat,
  children,
}: {
  supportLargeScreen?: boolean;
  children?: React.ReactNode;
  isDisplaySpotify?: boolean;
  longLayoutFormat?: boolean;
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen scrollbar-thin scrollbar-thumb-gray-700
    scrollbar-track-gray-800 scrollbar-thumb-rounded-full"
    >
      <div
        className={`flex flex-col h-full py-20 w-[90%] md:w-[${
          longLayoutFormat ? "60rem" : "40rem"
        }] mt-12`}
      >
        <Nav
          isDisplaySpotify={isDisplaySpotify}
          longLayoutFormat={longLayoutFormat}
        />
        {!supportLargeScreen && (
          <div
            className={`${
              supportLargeScreen ? "lg:hidden block" : "lg:hidden block"
            }  w-full h-full items-center justify-center flex`}
          >
            <ContentUnavailable />
          </div>
        )}
        <div
          className={`${
            supportLargeScreen ? "lg:block w-full" : "lg:block hidden"
          }`}
        >
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};
