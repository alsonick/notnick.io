import { capitalizeFirstLetter } from "../lib/utils/capitalize-first-letter";
import { FULL_NAME, NOTES_DIR, PROFESSION } from "../lib/constants";
import { generateRandomId } from "../lib/utils/generate-random-id";
import { removeDuplicates } from "../lib/utils/remove-duplicates";
import { FilterListBox } from "../components/ui/FilterListBox";
import { getSortedPostData } from "../lib/post";
import { Heading } from "../components/ui/Heading";
import { Animate } from "../components/layout/Animate";
import { Layout } from "../components/layout/Layout";
import { GoBack } from "../components/layout/GoBack";
import { Header } from "../components/layout/Header";
import { NoPost } from "../components/posts/NoPost";
import { Posts } from "../components/posts/Posts";
import { Seo } from "../components/layout/Seo";
import { Post } from "../types/post";
import { page } from "../lib/page";
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
        title={`${page.note.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <div className="flex flex-col min-h-[calc(100vh-8rem)]">
            <Header singleItem={false}>
              <Heading as="h1" style={{ marginBottom: 0 }}>
                {page.note.title}
              </Heading>
              {notes.length ? (
                <FilterListBox
                  items={removeDuplicates(tags)}
                  selectedItem={selected}
                  onChange={setSelected}
                  label="Filter notes by tag"
                />
              ) : null}
            </Header>
            {!notes.length && <NoPost type="notes" />}
            <Posts
              posts={filteredNotesList.length ? filteredNotesList : notes}
              type="note"
            />
            <div className="mt-auto">
              <GoBack />
            </div>
          </div>
        </Animate>
      </Layout>
    </>
  );
};

export default Note;
