import { GetStaticProps, NextPage } from "next";
import { getSortedNotesData } from "../lib/notes";
import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { Posts } from "../components/Posts";

import Head from "next/head";

export const getStaticProps: GetStaticProps = () => {
  const notes = getSortedNotesData();
  return {
    props: {
      notes,
    },
  };
};

interface Props {
  notes: [{ slug: string; title: string; date: string; description: string }];
}

const Notes: NextPage<Props> = ({ notes }) => {
  return (
    <>
      <Head>
        <title>Notes - Nicholas Njoki</title>
        <meta
          name="description"
          content="Nicholas Njoki - Full-Stack Developer"
        />
      </Head>
      <Layout>
        <Heading>Notes</Heading>
        <Posts type="notes" items={notes} />
      </Layout>
    </>
  );
};

export default Notes;
