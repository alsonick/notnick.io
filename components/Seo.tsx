import {
  AVATAR,
  AVATAR_FILE_EXTENSION,
  CDN,
  CITY,
  DOMAIN,
  EMAIL_ADDRESS,
  FULL_NAME,
  PROFESSION,
  THEME,
} from "../lib/constants";
import { seoKeywords } from "../lib/seo-keywords";
import { fireworks } from "../lib/fireworks";
import { social } from "../lib/social-links";

// Next.js
import { useRouter } from "next/router";
import Script from "next/script";
import Head from "next/head";

interface Props {
  description: string;
  cover?: string;
  title: string;
}

export const Seo = (props: Props) => {
  const { query, asPath } = useRouter();
  const date = new Date();
  const ogImage = props.cover || "/og.png";
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `https://${DOMAIN}${ogImage}`;
  const pagePath = asPath.split(/[?#]/)[0];
  const pageUrl = `https://${DOMAIN}${pagePath === "/" ? "" : pagePath}`;
  const avatarUrl = `${CDN}/branding/${AVATAR}.${AVATAR_FILE_EXTENSION}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: FULL_NAME,
      alternateName: [DOMAIN, FULL_NAME.split(" ")[0]],
      url: `https://${DOMAIN}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: FULL_NAME,
      url: `https://${DOMAIN}`,
      image: avatarUrl,
      jobTitle: PROFESSION,
      email: `mailto:${EMAIL_ADDRESS}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: CITY,
        addressCountry: "GB",
      },
      sameAs: Object.values(social).map((s) => s.link),
    },
  ];
  const month = date.getMonth() + 1;
  const showSnow = (month >= 12 && date.getDate() >= 1) || query.decoration === "christmas";

  if (typeof window === "object") {
    if (
      (month === 1 && date.getDate() === 1) ||
      (month === 3 && date.getDate() === 4)
    ) {
      // Happy new year! or Happy birthday!
      fireworks();
    }
  }

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="canonical" href={pageUrl} />
        <meta name="theme-color" content={THEME} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={DOMAIN} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:creator" content={`@${social.x.username}`} />
        <meta
          name="twitter:site"
          content={`@${FULL_NAME.split(" ")[0].toLowerCase()}`}
        />
        {pagePath === "/" ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        ) : null}
      </Head>
      <Script async defer src="https://buttons.github.io/buttons.js" />
      {showSnow ? (
        <Script src="https://app.embed.im/snow.js" defer />
      ) : null}
    </>
  );
};
