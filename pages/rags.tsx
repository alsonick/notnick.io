import { FULL_NAME, PROFESSION } from "../lib/constants";
import { TdChildren } from "../components/TdChildren";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { ICON } from "../lib/tailwindcss/icon";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { GoBack } from "../components/GoBack";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import { Table } from "../components/Table";
import { LinkT } from "../components/Link";
import { FiRepeat } from "react-icons/fi";
import { Text } from "../components/Text";
import { Note } from "../components/Note";
import { Seo } from "../components/Seo";
import { Td } from "../components/Td";
import { Th } from "../components/Th";
import { RAGS } from "../lib/rags";
import { page } from "../lib/page";

// Next.js
import { NextPage } from "next";
import Image from "next/image";

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
        title={`${page.rags.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout
        longLayoutFormat={false}
        supportLargeScreen={false}
        showBackButton={true}
      >
        <Animate>
          <Header column={false} singleItem={false}>
            <Heading style={{ marginBottom: "0.5rem" }}>
              {page.rags.title}
            </Heading>
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
            <Note>
              After clicking play, wait a few seconds (1-2 seconds) for the
              audio to start playing.
            </Note>
          </div>
          <div className="flex items-center">
            <Image
              className="rounded-full duration-300 mr-1 border border-teal-100 dark:border-teal-900"
              title="itsRemco's YouTube Profile Picture"
              src="/itsRemco.jpg"
              height={20}
              alt="itsRemco's YouTube Profile Picture"
              width={20}
              quality={100}
            />
            <Text>
              Synthesia audio from <b>itsRemco | Piano</b> on{" "}
              <LinkT
                href="https://www.youtube.com/@itsRemco"
                title="itsRemco | Piano on YouTube"
                target="_blank"
              >
                YouTube
              </LinkT>
              .
            </Text>
          </div>
          <div className="my-4">
            <Note>
              Some of these pieces aren&apos;t considered &quot;ragtime&quot; or
              &quot;rags&quot;. A lot these ragtime composers had composed a
              good number of{" "}
              <LinkT
                href="https://en.wikipedia.org/wiki/March_(music)"
                title="marches"
                target="_blank"
              >
                marches
              </LinkT>{" "}
              and{" "}
              <LinkT
                href="https://en.wikipedia.org/wiki/Waltz"
                title="waltzes"
                target="_blank"
              >
                waltzes
              </LinkT>
              .
            </Note>
          </div>
          <div className="my-4">
            <Button style={{ marginLeft: "auto" }} onClick={shuffleRags}>
              Shuffle <FiRepeat className={ICON} />
            </Button>
          </div>
          <div className="my-4 w-full">
            <div className="my-4 flex flex-col w-full">
              <Table>
                <thead>
                  <tr>
                    {["Composer", "Title", "Publication", "Audio"].map(
                      (key) => (
                        <Th key={key} text={key} />
                      )
                    )}
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
                          <div className="flex flex-col w-full items-center justify-center">
                            <audio
                              className="ml-4 mr-4 mt-4 p-1 w-64"
                              controls
                              src={`${page.rags.path}/${rag.path.composer}/${rag.path.file}.${rag.path.ext}`}
                            >
                              Your browser does not support the
                              <code>audio</code> element.
                            </audio>
                            <div className="m-2">
                              <LinkT
                                href={rag.score}
                                title={`${rag.composer} - ${rag.title} Sheet Music`}
                                target="_blank"
                              >
                                [sheet music]
                              </LinkT>
                            </div>
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
