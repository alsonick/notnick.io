import { DOMAIN, FULL_NAME, THEME } from "../lib/constants";
import { seoKeywords } from "../lib/seo-keywords";
import { fireworks } from "../lib/fireworks";
import { social } from "../lib/social-links";

// Next.js
import Script from "next/script";
import Head from "next/head";

interface Props {
  description: string;
  cover?: string;
  title: string;
}

export const Seo = (props: Props) => {
  const date = new Date();

  if (typeof window === "object") {
    if (
      (date.getMonth() + 1 === 1 && date.getDate() === 1) ||
      (date.getMonth() + 1 === 3 && date.getDate() === 4)
    ) {
      // Happy new year! or Happy birthday!
      fireworks();
    }
  }

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="theme-color" content={THEME} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="description" content={props.description} key="desc" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta property="twitter:creator" content={`@${social.x.username}`} />
        <meta property="twitter:site" content="@nick" />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content={props.title} />
        <meta property="og:site_name" content={`${FULL_NAME}`} />
        <meta property="og:url" content={`https://${DOMAIN}/`} />
        <meta property="og:description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta
          property="twitter:image"
          content={`https://${DOMAIN}/branding/secondary_dark_short_sig_avatar.png`}
        />
        <meta
          property="og:image"
          content={`https://${DOMAIN}/branding/secondary_dark_short_sig_avatar.png`}
        />
      </Head>
      <Script async defer src="https://buttons.github.io/buttons.js" />
      {date.getMonth() + 1 >= 12 && date.getDate() >= 1 ? (
        <Script src="https://app.embed.im/snow.js" defer />
      ) : null}
    </>
  );
};
