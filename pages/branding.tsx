import { computedAltTitleTag } from "../lib/utils/computed-alt-title-tag";
import { FULL_NAME, PROFESSION, CDN } from "../lib/constants";
import { Branding as BrandingType } from "../types/branding";
import { getBranding } from "../lib/get-branding";
import { Heading } from "../components/ui/Heading";
import { Animate } from "../components/layout/Animate";
import { ICON } from "../lib/tailwindcss/icon";
import { Button } from "../components/ui/Button";
import { GoBack } from "../components/layout/GoBack";
import { Header } from "../components/layout/Header";
import { Layout } from "../components/layout/Layout";
import { FiDownload } from "react-icons/fi";
import { LinkT } from "../components/ui/Link";
import { Text } from "../components/ui/Text";
import { Seo } from "../components/layout/Seo";
import { Key } from "../components/ui/Key";
import { saveAs } from "file-saver";
import { page } from "../lib/page";

// Next.js
import { GetStaticProps, NextPage } from "next";

interface Props {
  branding: BrandingType[];
}

const Branding: NextPage<Props> = ({ branding: BRANDING }) => {
  return (
    <>
      <Seo
        title={`${page.branding.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={true} column={true}>
            <Heading as="h1" style={{ marginBottom: 0 }}>
              {page.branding.title}
            </Heading>
            <Text style={{ marginTop: "15px" }}>
              The personal branding I use throughout my social media platforms.
              <br />
              Click <LinkT href="/socials">here</LinkT> to check out my socials.
            </Text>
            <br />
            <Text>
              Signatures are drawn by{" "}
              <LinkT href="https://twitter.com/thesigboy" target="_blank">
                PedroC
              </LinkT>
              . Hit him up!
            </Text>
          </Header>
          <div className="flex flex-col border-t border-teal-100 dark:border-teal-900 pt-5">
            {BRANDING.map((branding) => (
              <div className="mb-10 sm:w-fit w-full" key={branding.id}>
                <Heading>{branding.name}</Heading>
                <picture>
                  <img
                    className="sm:w-fit w-full"
                    src={`${CDN}${branding.path}.${branding.ext}`}
                    title={computedAltTitleTag(branding.name)}
                    alt={computedAltTitleTag(branding.name)}
                  />
                </picture>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex justify-center flex-col">
                    <Text>
                      <Key>Dimensions:</Key> {branding.dimensions.width}x
                      {branding.dimensions.height}
                    </Text>
                    <Text>
                      <Key>Resolution:</Key> {branding.resolution}x
                      {branding.resolution}
                    </Text>
                    <Text>
                      <Key>Size:</Key> {branding.size}
                    </Text>
                  </div>
                  <Button
                    onClick={() => {
                      saveAs(
                        `${CDN}${branding.path}.${branding.ext}`,
                        branding.name,
                      );
                    }}
                  >
                    Download <FiDownload className={ICON} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const branding = await getBranding();
  return {
    props: {
      branding,
    },
  };
};

export default Branding;
