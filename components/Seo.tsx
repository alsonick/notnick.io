import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

export const Seo = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content="#f54bff" />
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title} />
      <script src="https://app.embed.im/snow.js" defer></script>
      <meta name="twitter:description" content={description} />
    </Head>
  );
};
