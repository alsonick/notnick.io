import { FULL_NAME, PROFESSION } from "../lib/constants";
import { TdChildren } from "../components/TdChildren";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { GoBack } from "../components/GoBack";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import { Table } from "../components/Table";
import { LinkT } from "../components/Link";
import { FiRepeat } from "react-icons/fi";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { Td } from "../components/Td";
import { Th } from "../components/Th";
import { RAGS } from "../lib/rags";

// Next.js
import { NextPage } from "next";

const Rags: NextPage = () => {
  const [rags, setRags] = useState(RAGS);

  const shuffleRags = () => {
    let r = [];

    const shuffled = RAGS.map((rag) => ({
      rag,
      sort: Math.random(),
    }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ rag }) => rag);
    r.push(shuffled);
    setRags(r[0]);
  };

  useEffect(() => {
    shuffleRags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Seo
        title={`Rags • ${FULL_NAME}`}
        description={`${FULL_NAME} • ${PROFESSION}`}
      />
      <Layout
        longLayoutFormat={false}
        supportLargeScreen={false}
        showBackButton={true}
      >
        <Animate>
          <Header column={false} singleItem={false}>
            <Heading style={{ marginBottom: "0.5rem" }}>Rags</Heading>
          </Header>
          <Text>
            This is a collection of my favorite rags. All these compositions
            were published before the year 1929 so therefore they are all in the{" "}
            <LinkT
              href="https://en.wikipedia.org/wiki/Public_domain"
              target="_blank"
            >
              public domain
            </LinkT>
            .
          </Text>
          <div className="my-4">
            <Button style={{ marginLeft: "auto" }} onClick={shuffleRags}>
              Shuffle{" "}
              <FiRepeat className="text-xl ml-2 hover:scale-110 duration-150" />
            </Button>
          </div>
          <div className="my-4">
            <div className="my-4 flex flex-col">
              <Table>
                <thead>
                  <tr>
                    {["Composer", "Title", "Date", "File"].map((key) => (
                      <Th key={key} text={key} />
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rags.map((rag) => (
                    <tr key={rag.id}>
                      <>
                        <Td text={rag.composer} center={true} />
                        <Td text={rag.title} center={true} />
                        <Td text={rag.date.toString()} center={true} />
                        <TdChildren>
                          <div className="flex w-full items-center justify-center">
                            <audio
                              className="m-4 p-1"
                              controls
                              src={`/rags/${rag.path.composer}/${rag.path.file}.${rag.path.ext}`}
                            >
                              Your browser does not support the
                              <code>audio</code> element.
                            </audio>
                          </div>
                        </TdChildren>
                      </>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Rags;
