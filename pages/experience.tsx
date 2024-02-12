import { EMAIL_ADDRESS, FULL_NAME, PROFESSION } from "../lib/constants";
import { capitalizeFirstLetter } from "../lib/capitalize-first-letter";
import { ExperienceCard } from "../components/ExperienceCard";
import { generateRandomId } from "../lib/generate-random-id";
import { FilterListBox } from "../components/FilterListBox";
import { removeDuplicates } from "../lib/remove-duplicates";
import { Experience } from "../types/experience";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { LinkTag } from "../components/LinkTag";
import { EXPERIENCE } from "../lib/experience";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Text } from "../components/Text";
import { Note } from "../components/Note";
import { Seo } from "../components/Seo";
import { useState } from "react";

// Next.js
import { NextPage } from "next";

const Experience: NextPage = () => {
  var types: Experience[] = [
    {
      id: generateRandomId(),
      name: "",
      description: "",
      year: 0,
      logo: "",
      employmentType: "full-time",
      location: "",
      remote: false,
      current: false,
      link: "",
      task: "",
      filter: capitalizeFirstLetter("all"),
    },
  ];

  EXPERIENCE.forEach((experience) => {
    types.push({
      id: generateRandomId(),
      name: experience.name,
      description: experience.description,
      year: experience.year,
      logo: experience.logo,
      employmentType: experience.employmentType,
      location: experience.location,
      remote: experience.remote,
      current: experience.current,
      link: experience.link,
      task: experience.task,
      filter: capitalizeFirstLetter(experience.filter),
    });
  });

  const [selected, setSelected] = useState(
    capitalizeFirstLetter(types[0].filter)
  );

  const filteredBlogsList = types.filter((type) => type.filter === selected);

  return (
    <>
      <Seo
        title={`Experience - ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>Experience</Heading>
            <FilterListBox
              items={removeDuplicates(types)}
              selectedItem={selected}
              onChange={setSelected}
            />
          </Header>
          <div className="mb-5">
            <Text style={{ marginTop: "10px" }}>
              Not all my professional experience is listed below here, If
              you&apos;d like to find out more then please visit my{" "}
              <LinkTag
                href="https://www.linkedin.com/in/nicholas-n-5a9187195/"
                target="_blank"
              >
                LinkedIn
              </LinkTag>{" "}
              page. For details on my past experience please drop an email to me
              by clicking{" "}
              <LinkTag href={`mailto:${EMAIL_ADDRESS}`} target="_blank">
                here
              </LinkTag>
              .
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
              {selected !== capitalizeFirstLetter("all")
                ? filteredBlogsList.length
                : EXPERIENCE.length}{" "}
              items
            </Text>
          </div>
          {selected !== capitalizeFirstLetter("all") ? (
            <>
              {" "}
              <MappedExperienceCardList list={filteredBlogsList} />
            </>
          ) : (
            <>
              <MappedExperienceCardList list={EXPERIENCE} />
            </>
          )}

          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

const MappedExperienceCardList = ({ list }: { list: Experience[] }) => {
  return (
    <>
      {list.map((experience) => (
        <ExperienceCard
          key={experience.id}
          name={experience.name}
          description={experience.description}
          employmentType={experience.employmentType}
          remote={experience.remote}
          location={experience.location}
          current={experience.current}
          link={experience.link}
          year={experience.year}
          logo={experience.logo}
          task={experience.task}
          filter={experience.filter}
        />
      ))}
    </>
  );
};

export default Experience;
