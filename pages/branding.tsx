import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Button } from "../components/Button";
import { GoBack } from "../components/GoBack";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { FiDownload } from "react-icons/fi";
import { BRANDING } from "../lib/branding";
import { LinkT } from "../components/Link";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { saveAs } from "file-saver";

// Next.js
import { NextPage } from "next";

const Branding: NextPage = () => {
  const computedAltTitleTag = (name: string) => {
    return name.toLowerCase().includes("banner") ? name : `${name} Logo`;
  };

  const description =
    "The personal branding I use throughout my social media platforms.";

  return (
    <>
      <Seo title="Branding - Nicholas Njoki" description={description} />
      <Layout>
        <Animate>
          <Header singleItem={true} column={true}>
            <Heading style={{ marginBottom: 0 }}>Branding</Heading>
            <Text style={{ marginTop: "15px" }}>
              {description}
              <br />
              Click <LinkT href="/socials">here</LinkT> to check out my socials.
            </Text>
          </Header>
          <div className="flex flex-col border-t border-teal-100 dark:border-teal-900 pt-5">
            {BRANDING.map((branding) => (
              <div className="mb-10 sm:w-fit w-full" key={branding.id}>
                <Heading>{branding.name}</Heading>
                <picture>
                  <img
                    className="sm:w-fit w-full"
                    src={`${branding.path}.${branding.ext}`}
                    title={computedAltTitleTag(branding.name)}
                    alt={computedAltTitleTag(branding.name)}
                  />
                </picture>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex justify-center flex-col">
                    <Text>
                      Dimensions: {branding.dimensions.width}x
                      {branding.dimensions.height}
                    </Text>
                    <Text>Size: {branding.size}</Text>
                  </div>
                  <Button
                    onClick={() => {
                      saveAs(`${branding.path}.${branding.ext}`, branding.name);
                    }}
                  >
                    Download <FiDownload className="text-xl ml-2" />
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

export default Branding;
