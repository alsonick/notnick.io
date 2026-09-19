import { MAIN_CONTENT_ID } from "../../lib/constants";
import { Footer } from "./Footer";

interface Props {
  children: React.ReactNode;
  footer: boolean;
}

export const OtherPageContainer = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex flex-col h-full py-10 w-[90%] md:w-[40rem] mt-12">
        <main
          id={MAIN_CONTENT_ID}
          className="flex flex-col outline-none"
          tabIndex={-1}
        >
          {props.children}
        </main>{" "}
        {props.footer ? <Footer /> : null}
      </div>
    </div>
  );
};
