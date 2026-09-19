import { OtherPageContainer } from "../components/layout/OtherPageContainer";
import { DOMAIN, FULL_NAME } from "../lib/constants";
import { Heading } from "../components/ui/Heading";
import { Toggle } from "../components/layout/Toggle";
import { Header } from "../components/layout/Header";
import { GoBack } from "../components/layout/GoBack";
import { social } from "../lib/data/social-links";
import { Text } from "../components/ui/Text";
import { Seo } from "../components/layout/Seo";
import { page } from "../lib/page";

// Next.js
import { NextPage } from "next";
import Link from "next/link";

const Contributors: NextPage = () => {
  return (
    <OtherPageContainer footer={false}>
      <Seo
        title={`${page.contributors.title} • ${FULL_NAME}`}
        description="Thank you contributors!"
      />
      <Toggle />
      <Header singleItem={true} column={true}>
        <Heading as="h1" style={{ marginBottom: 0 }}>
          {page.contributors.title}
        </Heading>
        <Text style={{ marginTop: "8px" }}>Thank you contributors! ❤️</Text>
      </Header>
      <Link
        className="mb-6 mt-4"
        href={`${social.github.link}/${DOMAIN}/graphs/contributors`}
        target="_blank"
      >
        <picture>
          <img
            src={`https://contrib.rocks/image?repo=${social.github.username}/${DOMAIN}`}
            alt={`Contributors to ${DOMAIN} on ${social.github.name}`}
          />
        </picture>
      </Link>
      <GoBack />
    </OtherPageContainer>
  );
};

export default Contributors;
