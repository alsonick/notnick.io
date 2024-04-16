import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Layout } from "../components/Layout";
import { GoBack } from "../components/GoBack";
import { Header } from "../components/Header";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { Tag } from "../components/Tag";

// Next.js
import { NextPage } from "next";

const Luffy: NextPage = () => {
  return (
    <>
      <Seo
        title={`Monkey D. Luffy • ${FULL_NAME}`}
        description={`${FULL_NAME} • ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <div className="mt-10">
            <picture>
              <img
                className="rounded-lg"
                src="/assets/luffy.gif"
                alt="Monkey D. Luffy"
                style={{ width: "100%" }}
              />
            </picture>
          </div>
          <Header column={true} singleItem={false}>
            <Tag title="idk lol" />
            <Heading style={{ marginBottom: "0.5rem" }}>
              Monkey D. Luffy
            </Heading>
            <Text>One Piece</Text>
          </Header>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Luffy;
