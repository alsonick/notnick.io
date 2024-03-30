import { findSlugAndAssociatedContent } from "../../lib/find-slug-and-associated-content";
import { DownloadXCodeProject } from "../../components/DownloadXcodeProject";
import { ContentUnavailable } from "../../components/ContentUnavailable";
import { generateRandomId } from "../../lib/generate-random-id";
import { FULL_NAME, PROFESSION } from "../../lib/constants";
import { TdChildren } from "../../components/TdChildren";
import { Heading } from "../../components/Heading";
import { Animate } from "../../components/Animate";
import { CHALLENGES } from "../../lib/challenges";
import { GoBack } from "../../components/GoBack";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import { LinkT } from "../../components/Link";
import { Note } from "../../components/Note";
import { Text } from "../../components/Text";
import { FiDownload } from "react-icons/fi";
import { Seo } from "../../components/Seo";
import { Key } from "../../components/Key";
import { Th } from "../../components/Th";
import { Td } from "../../components/Td";
import { page } from "../../lib/page";
import { saveAs } from "file-saver";

// Next.js
import { useRouter } from "next/router";
import { NextPage } from "next";

const Slug: NextPage = () => {
  const router = useRouter();

  const challenge = findSlugAndAssociatedContent(router, CHALLENGES);
  const query = router.query;
  const d = query.day;

  let mapped = challenge?.content;
  const day = Number(d);

  if (day !== undefined) {
    if (Number.isNaN(day)) {
      mapped = challenge?.content;
    } else {
      const challengeQuery = challenge?.content.find((c) => c.day === day);

      if (challengeQuery) {
        mapped = [challengeQuery];
      }
    }
  }

  return (
    <>
      <Seo
        title={`${
          !challenge?.name ? "Loading..." : challenge.name
        } - ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout
        longLayoutFormat={true}
        supportLargeScreen={false}
        backButtonLocation={page.challenge.link}
        showBackButton={true}
      >
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>{challenge?.name}</Heading>
          </Header>
          <Text>{challenge?.description}</Text>
          {challenge?.note ? (
            <div className="my-4">
              <Note>{challenge.note}</Note>
            </div>
          ) : null}
          {challenge?.usefulLinks ? (
            <div className="flex flex-col mt-4">
              <Key>Useful links:</Key>
              {challenge.usefulLinks.map((link) => (
                <LinkT key={link} href={link} target="_blank">
                  {link.slice(8).replaceAll("www.", "")}
                </LinkT>
              ))}
            </div>
          ) : null}
          <div className="my-8">
            <Key>Status</Key>
            <Table>
              <thead>
                <tr>
                  {challenge?.statusKeys.map((k) => (
                    <Th key={k} text={k} />
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td
                    text={challenge?.name ?? "No 'name' was provided."}
                    center={true}
                  />
                  <Td
                    text={`${
                      challenge?.completedDays ??
                      "No 'completed days' was provided."
                    }`}
                    center={true}
                  />
                  <Td
                    text={`${
                      challenge?.daysLeft ?? "No 'days left' was provided."
                    }`}
                    center={true}
                  />
                  <Td
                    text={`${
                      `${challenge?.goal} Days` ?? "No 'goal' was provided."
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
                  {challenge?.keys.map((key) => (
                    <Th key={key} text={key} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {mapped?.map((c) => (
                  <tr key={generateRandomId()}>
                    <>
                      <Td text={`${c.day}`} center={true} />
                      <Td text={c.description} center={false} />
                      <Td text={c.completed ? "✅" : "❌"} center={true} />
                      {c.preview.available ? (
                        <TdChildren>
                          <div className="flex justify-center text-center items-center my-4">
                            {c.preview.previewContent ? (
                              <picture className="mb-2">
                                <img
                                  className="w-80"
                                  src={`${c.preview.previewContent.path}${c.day}.${c.preview.previewContent.extension}`}
                                  alt={`Day ${c.day} Preview`}
                                />
                              </picture>
                            ) : null}
                            {!c.preview.previewContent && (
                              <ContentUnavailable message="No preview content was found." />
                            )}
                          </div>
                          <div className="flex items-center flex-col">
                            {c.code && <DownloadXCodeProject c={c} />}
                            <div className="mb-3 mt-1">
                              <Button
                                title={`Download Day ${c.day} Preview`}
                                onClick={() => {
                                  if (c.preview.previewContent) {
                                    saveAs(
                                      `${c.preview.previewContent.path}${c.day}.${c.preview.previewContent.extension}`,
                                      `Day ${c.day} Preview`
                                    );
                                  }
                                }}
                              >
                                Download <FiDownload className="text-xl ml-2" />
                              </Button>
                            </div>
                          </div>
                        </TdChildren>
                      ) : (
                        <>
                          {c.code ? (
                            <TdChildren>
                              <DownloadXCodeProject c={c} />
                            </TdChildren>
                          ) : (
                            <Td text="Preview not available." center={true} />
                          )}
                        </>
                      )}
                    </>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <GoBack location={page.challenge.link} />
        </Animate>
      </Layout>
    </>
  );
};

export default Slug;
