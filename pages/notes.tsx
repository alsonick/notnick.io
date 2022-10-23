import { FilterListBox } from "../components/FilterListBox";
import { getSortedPostData } from "../lib/post";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Layout } from "../components/Layout";
import { GoBack } from "../components/GoBack";
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
  let tags = [{ tag: "All", slug: "" }];

  notes.forEach((note) => {
    tags.push({ tag: note.tag, slug: note.slug });
  });

  const [selectedTag, setSelectedTag] = useState(tags[0].tag);

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].tag === tags[i].tag) {
      setSelectedTag(tags[i].tag);
    }
  }

  const filteredNotesList = notes.filter((note) => note.tag === selectedTag);

  return (
    <>
      <Seo
        title="Notes - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <div className="flex items-center mb-4 min-h-[4rem] justify-between">
            <Heading style={{ marginBottom: 0 }}>Notes</Heading>
            {notes.length ? (
              <FilterListBox
                items={tags}
                selectedItem={selectedTag}
                onChange={setSelectedTag}
              />
            ) : null}
          </div>
          {!notes.length && <NoPost type="notes" />}
          <Posts
            type="notes"
            items={filteredNotesList.length ? filteredNotesList : notes}
          />
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Notes;
