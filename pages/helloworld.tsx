import { FULL_NAME } from "../lib/constants";
import { Seo } from "../components/Seo";
import { NextPage } from "next";

const HelloWorld: NextPage = () => {
  return (
    <div>
      <Seo title={FULL_NAME} description="Hello, World!" />
      <h1 className="text-black dark:text-white p-10 font-serif text-4xl">
        Hello, World!
      </h1>
    </div>
  );
};

export default HelloWorld;
