import { getAllNoteSlugs, getNoteData } from "../../lib/post";
import { GetStaticProps, NextPage } from "next";
import { NOTES_DIR } from "../../lib/constants";
import { Post } from "../../components/Post";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const note = await getNoteData(params!.slug, NOTES_DIR);
  return {
    props: {
      note,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllNoteSlugs(NOTES_DIR);
  return {
    paths,
    fallback: false,
  };
};

interface Props {
  note: {
    title: string;
    description: string;
    tag: string;
    mins: string;
    slug: string;
    date: string;
    contentHtml: string;
  };
}

const Note: NextPage<Props> = ({ note }) => {
  return <Post post={note} />;
};

export default Note;
