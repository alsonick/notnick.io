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
} from "../../lib/constants";
import {
  COMPONENT_EMBED_SCRIPT_ID,
  serializeComponentEmbed,
  buildPageEmbed,
} from "../../lib/discord-embed";
import { ComponentEmbed } from "../../types/discord-embed";
import { seoKeywords } from "../../lib/data/seo-keywords";
import { fireworks } from "../../lib/fireworks";
import { social } from "../../lib/data/social-links";

// Next.js
import { useRouter } from "next/router";
import Script from "next/script";
import Head from "next/head";

interface Props {
  // Discord renders this in place of the Open Graph card. Pass a payload to
  // tailor the preview, or `null` to opt the page out and keep the card.
  embed?: ComponentEmbed | null;
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

  // Pages that don't build their own payload still get a preview, and the
  // serializer hands back null for anything Discord would reject — in which
  // case the Open Graph tags below carry the preview on their own.
  const componentEmbed =
    props.embed === null
      ? null
      : props.embed ||
        buildPageEmbed({
          description: props.description,
          title: props.title,
          url: pageUrl,
        });
  const componentEmbedJson = componentEmbed
    ? serializeComponentEmbed(componentEmbed)
    : null;

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
        {componentEmbedJson ? (
          <script
            dangerouslySetInnerHTML={{ __html: componentEmbedJson }}
            id={COMPONENT_EMBED_SCRIPT_ID}
            key={COMPONENT_EMBED_SCRIPT_ID}
            type="application/json"
          />
        ) : null}
        {pagePath === "/"
          ? structuredData.map((schema) => (
              <script
                key={`ld-json-${schema["@type"]}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
              />
            ))
          : null}
      </Head>
      <Script async defer src="https://buttons.github.io/buttons.js" />
      {showSnow ? (
        <Script src="https://app.embed.im/snow.js" defer />
      ) : null}
    </>
  );
};
