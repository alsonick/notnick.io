import { OtherPageContainer } from "../components/OtherPageContainer";
import { DOMAIN, FULL_NAME } from "../lib/constants";
import { Heading } from "../components/Heading";
import { Toggle } from "../components/Toggle";
import { Header } from "../components/Header";
import { GoBack } from "../components/GoBack";
import { social } from "../lib/social-links";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";
import Link from "next/link";

const Contributors: NextPage = () => {
  return (
    <OtherPageContainer footer={false}>
      <Seo
        title={`Contributors - ${FULL_NAME}`}
        description="Thank you contributors!"
      />
      <Toggle />
      <Header singleItem={true} column={true}>
        <Heading style={{ marginBottom: 0 }}>Contributors</Heading>
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
            alt=""
          />
        </picture>
      </Link>
      <GoBack />
    </OtherPageContainer>
  );
};

export default Contributors;
