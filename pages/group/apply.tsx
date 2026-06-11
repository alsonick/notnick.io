import {
  YEAR_STARTED_PROGRAMMING,
  SUBJECT_OF_STUDY,
  PROFESSION,
  FULL_NAME,
} from "../../lib/constants";
import { ApplyForm } from "../../components/ApplyForm";
import { Callout } from "../../components/Callout";
import { Heading } from "../../components/Heading";
import { Animate } from "../../components/Animate";
import { Section } from "../../components/Section";
import { LinkTag } from "../../components/LinkTag";
import { Layout } from "../../components/Layout";
import { Header } from "../../components/Header";
import { Avatar } from "../../components/Avatar";
import { social } from "../../lib/social-links";
import { FaXTwitter } from "react-icons/fa6";
import { Text } from "../../components/Text";
import { Note } from "../../components/Note";
import { FiLinkedin } from "react-icons/fi";
import { Seo } from "../../components/Seo";
import { page } from "../../lib/page";

// Next.js
import { NextPage } from "next";
import Link from "next/link";

const Apply: NextPage = () => {
  return (
    <>
      <Seo
        title={`${page.group.apply.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={true}>
            <Heading style={{ marginBottom: 0 }}>
              {page.group.apply.title}
            </Heading>
          </Header>
          <Text>
            Looking for a group for the third year group project? I&apos;m
            putting together a team that wants to build something worth being
            proud of. If you enjoy writing code and shipping things, fill in the
            form below and I&apos;ll get back to you on Discord.
          </Text>
          <div className="mt-6">
            <Section topBorder={true}>
              <Heading style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                Who am I? <span className="wave">👋</span>
              </Heading>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Avatar height={64} width={64} border={true} />
                  <div className="ml-4 flex flex-col">
                    <Heading
                      style={{
                        lineHeight: "1.5rem",
                        fontSize: "1.2rem",
                        marginBottom: 0,
                      }}
                    >
                      {FULL_NAME}
                    </Heading>
                    <Text
                      style={{
                        lineHeight: "1.4rem",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      {PROFESSION}
                    </Text>
                    <div className="flex flex-col mt-2">
                      <Text
                        style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }}
                      >
                        Studying {SUBJECT_OF_STUDY} @ University of Kent
                      </Text>
                      <Text
                        style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }}
                      >
                        Grade: Distinction (1st - First Class Honours)
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3"
                  style={{ height: "1.5rem" }}
                >
                  <Link
                    className="text-lg duration-300 focus:ring-4 focus:ring-offset-4 dark:ring-offset-black rounded
                    ring-primary outline-none cursor-pointer hover:text-black dark:hover:text-white text-gray-600
                    dark:text-gray-300 hover:scale-110"
                    title={social.x.name}
                    href={social.x.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    className="text-lg duration-300 focus:ring-4 focus:ring-offset-4 dark:ring-offset-black rounded
                    ring-primary outline-none cursor-pointer hover:text-black dark:hover:text-white text-gray-600
                    dark:text-gray-300 hover:scale-110"
                    title={social.linkedin.name}
                    href={social.linkedin.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLinkedin />
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <Text>
                  Hey, I&apos;m Nicholas! I&apos;ve been programming since{" "}
                  <b>{YEAR_STARTED_PROGRAMMING}</b>, long before I started my
                  degree. Outside of my studies I spend most of my time building
                  and shipping projects, tinkering with new technologies and
                  solving <b>LeetCode</b> problems.
                </Text>
                <Text>
                  Want to know more before applying? Check out my{" "}
                  <LinkTag href={page.experience.link}>experience</LinkTag> to
                  see what I&apos;ve worked on. If you have any questions, or
                  just want a chat before applying, feel free to reach out on
                  any of my <LinkTag href={page.socials.link}>socials</LinkTag>,
                  I&apos;m always happy to talk.
                </Text>
                <Note>
                  I&apos;m most active on <b>X</b> and <b>LinkedIn</b>.
                </Note>
              </div>
            </Section>
          </div>
          <hr className="border-teal-100 dark:border-teal-900 -mt-7" />
          <Callout title="Before you apply">
            <Text>
              Experience with <b>TypeScript</b>, <b>React</b>, <b>Node.js</b>,{" "}
              <b>SQL</b>, <b>Git</b>, <b>Agile Development</b>, <b>CSS</b> (or
              any CSS framework), interacting with <b>third party APIs</b>,
              familiarity with <b>developer tooling</b> and an eye for clean
              interfaces is preferred, but not required.
            </Text>
            <Text>
              Having a project to your name, big or small, is just insurance
              that you can ship something that isn&apos;t an assignment or
              coursework. It shows initiative and a drive to build things. No
              projects yet? If you&apos;re passionate about programming and
              eager to learn, I still encourage you to apply.
            </Text>
          </Callout>
          <Callout title="The goal" variant="happy">
            <Text>
              The goal is to build a <b>medium to hard</b> project, something we
              can proudly show off on our CVs. I also want this to be something
              we <b>ship live</b> for anyone to use. I might be too eager, but
              that&apos;s just how I am. If this is something you seriously want
              to show off, be sure to apply!
            </Text>
          </Callout>
          <div>
            <ApplyForm />
            <Callout title="Privacy" variant="privacy">
              <Text>
                All applications are sent via a webhook straight to a private
                Discord channel that only I can see. If you&apos;d like your
                application deleted once it&apos;s been reviewed, just select
                that option in the form above.
              </Text>
            </Callout>
            <p className="text-7xl text-center mt-16 mb-16">🛠️🛠️🛠️</p>
          </div>
        </Animate>
      </Layout>
    </>
  );
};

export default Apply;
