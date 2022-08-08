import { NextPage } from "next";
import Image from "next/image";
import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { LinkTag } from "../components/LinkTag";
import { Seo } from "../components/Seo";
import { Text } from "../components/Text";

const Luffy: NextPage = () => {
  return (
    <>
      <Seo title="Monkey D. Luffy" description="" />
      <Layout>
        <div className="mt-10">
          <Image
            className="rounded-lg"
            src="/assets/luffy.gif"
            alt="Monkey D. Luffy"
            width={498}
            height={280}
            layout="responsive"
          />
        </div>
        <div className="flex flex-col mt-4 items-center mb-4 min-h-[4rem]">
          <Heading style={{ marginBottom: 0 }}>Monkey D. Luffy</Heading>
          <Text>One Piece</Text>
        </div>
        <LinkTag href="/">&larr; Go Back</LinkTag>
      </Layout>
    </>
  );
};

export default Luffy;
