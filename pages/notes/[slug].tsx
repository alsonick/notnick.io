import { getAllNoteSlugs, getNoteData } from "../../lib/notes";
import { GetStaticProps, NextPage } from "next";
import { Post } from "../../components/Post";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const note = await getNoteData(params!.slug);
  return {
    props: {
      note,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllNoteSlugs();
  return {
    paths,
    fallback: false,
  };
};

interface Props {
  note: {
    title: string;
    description: string;
    slug: string;
    date: string;
    contentHtml: string;
  };
}

const Note: NextPage<Props> = ({ note }) => {
  return <Post type="notes" post={note} />;
};

export default Note;
