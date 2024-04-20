import { NextPage } from "next";
import { Seo } from "../components/Seo";

const HelloWorld: NextPage = () => {
  return (
    <div>
      <Seo title="Nicholas Njoki" description="Hello, World!" />
      <h1 className="text-black dark:text-white p-10 font-serif text-4xl">
        Hello, World!
      </h1>
    </div>
  );
};

export default HelloWorld;
