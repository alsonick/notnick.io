import Script from "next/script";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

export const Seo = ({ title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#f54bff" />
        <meta name="description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Script src="https://app.embed.im/snow.js" defer />
    </>
  );
};
