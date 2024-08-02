import { FULL_NAME, PROFESSION, THEME } from "../../lib/constants";
import { Heading } from "../../components/Heading";
import { Animate } from "../../components/Animate";
import { GoBack } from "../../components/GoBack";
import { Layout } from "../../components/Layout";
import { Header } from "../../components/Header";
import { SNIPPETS } from "../../lib/snippets";
import { Text } from "../../components/Text";
import { Seo } from "../../components/Seo";
import { page } from "../../lib/page";

// TODO: Finish this page later

// Next.js
import { NextPage } from "next";
import Link from "next/link";

const Snippets: NextPage = () => {
  return (
    <>
      <Seo
        title={`Snippets • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>Snippets</Heading>
          </Header>
          <div className="flex flex-col mb-4">
            {SNIPPETS.snippets.map((snippet) => (
              <div key={snippet.id}>
                <h1>{snippet.title}</h1>
              </div>
            ))}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Snippets;
