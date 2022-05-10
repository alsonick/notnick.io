import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { What } from "../components/What";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicholas</title>
      </Head>
      <div className="flex flex-col items-center w-screen h-screen overflow-x-hidden">
        <Header />
        <div className="flex flex-col w-10/12">
          <Main />
          <What />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
