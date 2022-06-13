import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col h-full py-20 w-[90%] md:w-[40rem] mt-12">
        <Nav />
        {children}
        <Footer />
      </div>
    </div>
  );
};
