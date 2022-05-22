import { GetStaticProps, NextPage } from "next";
import { getSortedNotesData } from "../lib/notes";
import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { Posts } from "../components/Posts";
import { Seo } from "../components/Seo";
import { LinkTag } from "../components/LinkTag";

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
      <Seo
        title="Notes - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Heading>Notes</Heading>
        <Posts type="notes" items={notes} />
        <LinkTag href="/">&larr; Go Back</LinkTag>
      </Layout>
    </>
  );
};

export default Notes;
