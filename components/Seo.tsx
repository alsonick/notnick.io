import { dynamicTitle } from "../lib/dynamic-title";
import { fireworks } from "../lib/fireworks";
import { useEffect, useState } from "react";

// Next.js
import { useRouter } from "next/router";
import Script from "next/script";
import Head from "next/head";

interface Props {
  description: string;
  title: string;
}

export const Seo = ({ description, title }: Props) => {
  const [validPostPathState, setValidPostPathState] = useState<boolean>(false);

  const date = new Date();

  const router = useRouter();

  if (typeof window === "object") {
    if (
      (date.getMonth() + 1 === 1 && date.getDate() === 1) ||
      (date.getMonth() + 1 === 3 && date.getDate() === 4)
    ) {
      // Happy new year & Happy birthday!
      fireworks();
    }
  }

  const validPostPath = () => {
    const pathname = router.pathname;

    if (pathname.includes("notes") || pathname.includes("blogs")) {
      console.log("includes note or blog");
      setValidPostPathState(true);
      return;
    }

    setValidPostPathState(false);
  };

  useEffect(() => {
    validPostPath();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#f54bff" />
        <meta name="description" content={description} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="twitter:creator" content="@heynickn" />
        <meta property="twitter:site" content="@nick" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Nicholas Njoki" />
        <meta property="og:url" content="https://notnick.io/" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <>
          {validPostPathState ? (
            <>
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:image" content={dynamicTitle(title)} />
              <meta property="og:image" content={dynamicTitle(title)} />
            </>
          ) : (
            <>
              <meta
                property="twitter:image"
                content={"https://notnick.io/pfp.png"}
              />
              <meta
                property="og:image"
                content={"https://notnick.io/pfp.png"}
              />
            </>
          )}
        </>
      </Head>
      <Script async defer src="https://buttons.github.io/buttons.js" />
      {date.getMonth() + 1 >= 12 && date.getDate() >= 1 ? (
        <Script src="https://app.embed.im/snow.js" defer />
      ) : null}
    </>
  );
};
