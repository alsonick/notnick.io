import { FULL_NAME, MAIN_CONTENT_ID } from "../lib/constants";
import { Seo } from "../components/layout/Seo";
import { NextPage } from "next";

const HelloWorld: NextPage = () => {
  return (
    <main id={MAIN_CONTENT_ID}>
      <Seo title={FULL_NAME} description="Hello, World!" />
      <h1 className="text-black dark:text-white p-10 font-serif text-4xl">
        Hello, World!
      </h1>
    </main>
  );
};

export default HelloWorld;
