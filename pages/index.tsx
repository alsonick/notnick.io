import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicholas Njoki</title>
      </Head>
      <div className="flex flex-col items-center lg:items-start px-5 lg:px-10 dark:bg-black">
        <div className="flex flex-col h-full justify-center lg:w-[35rem]">
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
