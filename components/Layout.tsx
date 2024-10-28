import { ContentUnavailable } from "./ContentUnavailable";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

interface Props {
  supportLargeScreen?: boolean;
  backButtonLocation?: string;
  children?: React.ReactNode;
  isDisplaySpotify?: boolean;
  longLayoutFormat?: boolean;
  showBackButton?: boolean;
}

export const Layout = (props: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen scrollbar-thin scrollbar-thumb-gray-700
      scrollbar-track-gray-800 scrollbar-thumb-rounded-full"
    >
      <div className={`flex flex-col h-full py-20 sm:w-[40rem] w-[95%] mt-12`}>
        {!props.supportLargeScreen && (
          <div
            className={`${
              props.supportLargeScreen ? "lg:hidden block" : "lg:hidden block"
            }  w-full h-full items-center justify-center flex flex-col`}
          >
            <ContentUnavailable
              showBackButton={props.showBackButton}
              backButtonLocation={props.backButtonLocation}
            />
          </div>
        )}
        <div
          className={`${
            props.supportLargeScreen ? "lg:block" : "lg:block hidden"
          }`}
        >
          <Nav
            isDisplaySpotify={props.isDisplaySpotify}
            longLayoutFormat={props.longLayoutFormat}
          />
          {props.children}
          <Footer />
        </div>
      </div>
    </div>
  );
};
