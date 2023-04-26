import { OtherPageContainer } from "../components/OtherPageContainer";
import { Heading } from "../components/Heading";
import { Toggle } from "../components/Toggle";
import { Header } from "../components/Header";
import { GoBack } from "../components/GoBack";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";
import Link from "next/link";

const Contributors: NextPage = () => {
  const heading = "Contributors";

  return (
    <OtherPageContainer footer={true}>
      <Seo title={heading} description="Thank you contributors!" />
      <Toggle />
      <Header singleItem={true} column={true}>
        <Heading style={{ marginBottom: 0 }}>{heading}</Heading>
        <Text style={{ marginTop: "8px" }}>Thank you contributors! ❤️</Text>
      </Header>
      <Link
        className="mb-6 mt-4"
        href="https://github.com/alsonick/notnick.io/graphs/contributors"
        target="_blank"
      >
        <picture>
          <img
            src="https://contrib.rocks/image?repo=alsonick/notnick.io"
            alt=""
          />
        </picture>
      </Link>
      <GoBack />
    </OtherPageContainer>
  );
};

export default Contributors;
