import { FilterListBox } from "../components/FilterListBox";
import { getSortedPostData } from "../lib/post";
import { LinkTag } from "../components/LinkTag";
import { GetStaticProps, NextPage } from "next";
import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { NoPost } from "../components/NoPost";
import { NOTES_DIR } from "../lib/constants";
import { Posts } from "../components/Posts";
import { Seo } from "../components/Seo";
import { Post } from "../types/post";
import { useState } from "react";

export const getStaticProps: GetStaticProps = () => {
  const notes = getSortedPostData(NOTES_DIR);
  return {
    props: {
      notes,
    },
  };
};

interface Props {
  notes: Post[];
}

const Notes: NextPage<Props> = ({ notes }) => {
  const nte = {
    notes: [{ tag: "" }],
  };
  const ntes = notes.length ? notes[0].tag : nte.notes[0].tag;
  const [selectedTag, setSelectedTag] = useState(ntes);
  const filteredNotesList = notes.filter((n) => n.tag === selectedTag);

  return (
    <>
      <Seo
        title="Notes - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <div className="flex items-center mb-4 min-h-[4rem] justify-between">
          <Heading style={{ marginBottom: 0 }}>Notes</Heading>
          {notes.length ? (
            <FilterListBox
              items={notes}
              selectedItem={selectedTag}
              onChange={setSelectedTag}
            />
          ) : null}
        </div>
        {!notes.length && <NoPost type="notes" />}
        <Posts type="notes" items={selectedTag ? filteredNotesList : notes} />
        <LinkTag href="/">&larr; Go Back</LinkTag>
      </Layout>
    </>
  );
};

export default Notes;
