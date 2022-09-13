import { Heading } from "../components/Heading";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { SOCIALS } from "../lib/socials";
import { Seo } from "../components/Seo";
import { NextPage } from "next";

const Socials: NextPage = () => {
  return (
    <>
      <Seo
        title="Socials - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <div className="flex items-center mb-4 min-h-[4rem] justify-between">
          <Heading style={{ marginBottom: 0 }}>Socials</Heading>
        </div>
        <div className="flex flex-col mb-4">
          {SOCIALS.map((social) => (
            <div
              key={social.id}
              className="flex w-full items-center justify-between p-1 h-12 border-b border-teal-100 dark:border-teal-900"
            >
              <Text style={{ fontWeight: 600 }}>{social.title}</Text>
              <Text>{social.username}</Text>
            </div>
          ))}
        </div>
        <GoBack />
      </Layout>
    </>
  );
};

export default Socials;
