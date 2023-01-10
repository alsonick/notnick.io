import { FilterListBox } from "../components/FilterListBox";
import { getSortedPostData } from "../lib/post";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Layout } from "../components/Layout";
import { GoBack } from "../components/GoBack";
import { Header } from "../components/Header";
import { NoPost } from "../components/NoPost";
import { NOTES_DIR } from "../lib/constants";
import { Posts } from "../components/Posts";
import { Seo } from "../components/Seo";
import { Post } from "../types/post";
import { useState } from "react";

// Next.js
import { GetStaticProps, NextPage } from "next";

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
  let tags = [{ tag: "All", slug: "", finished: false }];

  notes.forEach((note) => {
    if (note.finished) {
      tags.push({ tag: note.tag, slug: note.slug, finished: note.finished });
    }
  });

  const [selectedTag, setSelectedTag] = useState(tags[0].tag);

  const filteredNotesList = notes.filter((note) => note.tag === selectedTag);

  return (
    <>
      <Seo
        title="Notes - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>Notes</Heading>
            {notes.length ? (
              <FilterListBox
                items={tags}
                selectedItem={selectedTag}
                onChange={setSelectedTag}
              />
            ) : null}
          </Header>
          {!notes.length && <NoPost type="notes" />}
          <Posts
            posts={filteredNotesList.length ? filteredNotesList : notes}
            type="notes"
          />
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Notes;
