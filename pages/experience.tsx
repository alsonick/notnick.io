import { ResponsiveFilterListBoxWrapper } from "../components/ResponsiveFilterListBoxWrapper";
import { MappedExperienceCardList } from "../components/MappedExperienceCardList";
import { EMAIL_ADDRESS, FULL_NAME, PROFESSION } from "../lib/constants";
import { capitalizeFirstLetter } from "../lib/capitalize-first-letter";
import { generateRandomId } from "../lib/generate-random-id";
import { FilterListBox } from "../components/FilterListBox";
import { removeDuplicates } from "../lib/remove-duplicates";
import { Experience as E } from "../types/experience";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { LinkTag } from "../components/LinkTag";
import { EXPERIENCE } from "../lib/experience";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { social } from "../lib/social-links";
import { Text } from "../components/Text";
import { Note } from "../components/Note";
import { Seo } from "../components/Seo";
import { Key } from "../components/Key";
import { page } from "../lib/page";
import { useState } from "react";

// Next.js
import { NextPage } from "next";

const Experience: NextPage = () => {
  var types: E[] = [
    {
      filter: capitalizeFirstLetter("all"),
      employmentType: "full-time",
      showCurrentStatus: true,
      id: generateRandomId(),
      discontinued: false,
      description: "",
      current: false,
      remote: false,
      feature: true,
      location: "",
      name: "",
      task: "",
      link: "",
      logo: "",
      slug: "",
      year: 0,
    },
  ];

  EXPERIENCE.forEach((experience) => {
    types.push({
      filter: capitalizeFirstLetter(experience.filter),
      showCurrentStatus: experience.showCurrentStatus,
      employmentType: experience.employmentType,
      discontinued: experience.discontinued,
      description: experience.description,
      location: experience.location,
      current: experience.current,
      feature: experience.feature,
      remote: experience.remote,
      id: generateRandomId(),
      note: experience.note,
      name: experience.name,
      year: experience.year,
      logo: experience.logo,
      link: experience.link,
      task: experience.task,
      slug: experience.slug,
    });
  });

  const [selected, setSelected] = useState(
    capitalizeFirstLetter(types[0].filter)
  );

  const filteredBlogsList = types.filter((type) => type.filter === selected);

  return (
    <>
      <Seo
        title={`${page.experience.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false} mobileColumnLayout={true}>
            <Heading style={{ marginBottom: 0 }}>
              {page.experience.title}
            </Heading>
            <ResponsiveFilterListBoxWrapper>
              <FilterListBox
                items={removeDuplicates(types)}
                selectedItem={selected}
                onChange={setSelected}
                fullWidth={true}
              />
            </ResponsiveFilterListBoxWrapper>
          </Header>
          <div className="mb-5">
            <Text style={{ marginTop: "10px" }}>
              Not all my professional experience is listed below here, If
              you&apos;d like to find out more then please visit my{" "}
              <LinkTag href={`${social.linkedin.link}`} target="_blank">
                LinkedIn
              </LinkTag>{" "}
              page. For details on my past experience please drop an email to me
              by clicking{" "}
              <LinkTag href={`mailto:${EMAIL_ADDRESS}`} target="_blank">
                here
              </LinkTag>
              .
            </Text>
            <br />
            <Text>
              This is a only a few select of things I&apos;ve worked on that
              I&apos;ve decided to showcase. If you&apos;d like to know more,
              please shoot me an{" "}
              <LinkTag href={`mailto:${EMAIL_ADDRESS}`} target="_blank">
                email
              </LinkTag>{" "}
              and I&apos;ll get back to you with my complete CV.
            </Text>
          </div>
          <div className="mb-5">
            <Note>
              Freelance work and jobs that are not related to any profession
              that I&apos;m not interested in will not be listed.
            </Note>
          </div>
          <div className="w-full flex">
            <Text style={{ marginLeft: "auto" }}>
              <Key>
                {selected !== capitalizeFirstLetter("all")
                  ? filteredBlogsList.length
                  : EXPERIENCE.length}
              </Key>{" "}
              {filteredBlogsList.length && (
                <>
                  {filteredBlogsList.length === 1 &&
                  filteredBlogsList[0].filter !== "All"
                    ? "item"
                    : "items"}
                </>
              )}
            </Text>
          </div>
          {selected !== capitalizeFirstLetter("all") ? (
            <>
              {" "}
              <MappedExperienceCardList
                list={filteredBlogsList.filter((exp) => exp.feature)}
              />
            </>
          ) : (
            <>
              <MappedExperienceCardList
                list={EXPERIENCE.filter((exp) => exp.feature)}
              />
            </>
          )}

          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Experience;
