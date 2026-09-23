import { ContentUnavailable } from "../ui/ContentUnavailable";
import { MAIN_CONTENT_ID } from "../../lib/constants";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

interface Props {
  /** Rendered HTML of a long post, which gets a heading search next to the theme toggle. */
  searchableContentHtml?: string;
  supportLargeScreen?: boolean;
  backButtonLocation?: string;
  children?: React.ReactNode;
  isDisplaySpotify?: boolean;
  longLayoutFormat?: boolean;
  showBackButton?: boolean;
  /**
   * Height of a notice bar pinned to the top of the viewport. The nav drops
   * below it, and the page content drops with the nav so the gap between the
   * two stays what it is on every other page.
   */
  topNoticeHeight?: number;
}

export const Layout = (props: Props) => {
  const { supportLargeScreen = true } = props;

  return (
    <div
      className="flex flex-col items-center justify-center h-screen scrollbar-thin scrollbar-thumb-gray-700
      scrollbar-track-gray-800 scrollbar-thumb-rounded-full"
    >
      <div className={`flex flex-col h-full py-20 sm:w-[40rem] w-[95%] mt-12`}>
        {!supportLargeScreen && (
          // Shown instead of the page on small screens, so it is the page's main
          // content there (the real <main> below is hidden at that size).
          <main
            className={`${
              supportLargeScreen ? "lg:hidden block" : "lg:hidden block"
            }  w-full h-full items-center justify-center flex flex-col`}
          >
            <ContentUnavailable
              headingLevel="h1"
              showBackButton={props.showBackButton}
              backButtonLocation={props.backButtonLocation}
            />
          </main>
        )}
        <div
          className={`${supportLargeScreen ? "lg:block" : "lg:block hidden"}`}
        >
          <Nav
            searchableContentHtml={props.searchableContentHtml}
            topNoticeHeight={props.topNoticeHeight}
            isDisplaySpotify={props.isDisplaySpotify}
            longLayoutFormat={props.longLayoutFormat}
          />
          <div className="flex flex-col h-screen justify-between">
            <main
              id={MAIN_CONTENT_ID}
              className="flex flex-col flex-grow outline-none duration-300"
              style={{ paddingTop: props.topNoticeHeight || undefined }}
              tabIndex={-1}
            >
              {props.children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
