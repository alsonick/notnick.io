import { findSlugAndAssociatedContent } from "../../lib/find-slug-and-associated-content";
import { generateRandomId } from "../../lib/generate-random-id";
import { FULL_NAME, PROFESSION } from "../../lib/constants";
import { CHALLENGE_KEYS } from "../../lib/challenge-keys";
import { TdChildren } from "../../components/TdChildren";
import { Heading } from "../../components/Heading";
import { Animate } from "../../components/Animate";
import { CHALLENGES } from "../../lib/challenges";
import { GoBack } from "../../components/GoBack";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { Seo } from "../../components/Seo";
import { Key } from "../../components/Key";
import { Th } from "../../components/Th";
import { Td } from "../../components/Td";

// Next.js
import { useRouter } from "next/router";
import { NextPage } from "next";

const Slug: NextPage = () => {
  const challenge = findSlugAndAssociatedContent(useRouter(), CHALLENGES);

  return (
    <>
      <Seo
        title={`${
          !challenge?.name ? "Loading..." : challenge.name
        } - ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout longLayoutFormat={false}>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>{challenge?.name}</Heading>
          </Header>
          <div className="my-8">
            <div className="flex w-full justify-between">
              <Key>Status</Key>
              <Text>
                <Key>{challenge?.goal ?? 0}</Key> Days
              </Text>
            </div>
            <Table>
              <thead>
                <tr>
                  {["Name", "Days Completed", "Days Left"].map((k) => (
                    <Th key={k} text={k} />
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td
                    text={challenge?.name ?? "No 'name' was provided"}
                    center={true}
                  />
                  <Td
                    text={`${
                      challenge?.completedDays ??
                      "No 'completed days' was provided"
                    }`}
                    center={true}
                  />
                  <Td
                    text={`${
                      challenge?.daysLeft ?? "No 'days left' was provided"
                    }`}
                    center={true}
                  />
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="mb-4 flex flex-col">
            <Key>Challenge</Key>
            <Table>
              <thead>
                <tr>
                  {CHALLENGE_KEYS.map((key) => (
                    <Th key={key.id} text={key.text} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {challenge?.content.map((c) => (
                  <tr key={generateRandomId()}>
                    {c.map((x) => (
                      <>
                        <Td text={`${x.day}`} center={true} />
                        <Td text={x.description} center={false} />
                        <Td text={x.completed ? "✅" : "❌"} center={true} />
                        {x.preview.available ? (
                          <TdChildren>
                            <picture>
                              <img
                                src={`${x.preview.previewContent?.path}.${x.preview.previewContent?.extension}`}
                                alt={x.preview.previewContent?.alt}
                              />
                            </picture>
                          </TdChildren>
                        ) : (
                          <Td text="Preview not available" center={true} />
                        )}
                      </>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <GoBack location="/challenge" />
        </Animate>
      </Layout>
    </>
  );
};

export default Slug;
