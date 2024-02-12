import { capitalizeFirstLetter } from "../lib/capitalize-first-letter";
import { FULL_NAME, NOTES_DIR, PROFESSION } from "../lib/constants";
import { generateRandomId } from "../lib/generate-random-id";
import { removeDuplicates } from "../lib/remove-duplicates";
import { FilterListBox } from "../components/FilterListBox";
import { getSortedPostData } from "../lib/post";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Layout } from "../components/Layout";
import { GoBack } from "../components/GoBack";
import { Header } from "../components/Header";
import { NoPost } from "../components/NoPost";
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

const Note: NextPage<Props> = ({ notes }) => {
  let tags = [
    {
      filter: capitalizeFirstLetter("all"),
      slug: "",
      finished: false,
      id: generateRandomId(),
    },
  ];

  notes.forEach((note) => {
    if (note.finished) {
      tags.push({
        filter: note.filter,
        slug: note.slug,
        finished: note.finished,
        id: generateRandomId(),
      });
    }
  });

  const [selected, setSelected] = useState(tags[0].filter);

  const filteredNotesList = notes.filter((note) => note.filter === selected);

  return (
    <>
      <Seo
        title={`Note - ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>Note</Heading>
            {notes.length ? (
              <FilterListBox
                items={removeDuplicates(tags)}
                selectedItem={selected}
                onChange={setSelected}
              />
            ) : null}
          </Header>
          {!notes.length && <NoPost type="notes" />}
          <Posts
            posts={filteredNotesList.length ? filteredNotesList : notes}
            type="note"
          />
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Note;
