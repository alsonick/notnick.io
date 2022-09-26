import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { GoBack } from "../components/GoBack";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { Tag } from "../components/Tag";
import { NextPage } from "next";

// Next.js
import Image from "next/image";

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
          <Tag title="idk lol" />
          <Heading style={{ marginBottom: "0.5rem" }}>Monkey D. Luffy</Heading>
          <Text>One Piece</Text>
        </div>
        <GoBack />
      </Layout>
    </>
  );
};

export default Luffy;
