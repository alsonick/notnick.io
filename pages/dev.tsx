import { OtherPageContainer } from "../components/OtherPageContainer";
import { Heading } from "../components/Heading";
import { Toggle } from "../components/Toggle";
import { GoBack } from "../components/GoBack";
import { Header } from "../components/Header";
import { API_URL } from "../lib/constants";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { Dev as D } from "../types/dev";
import { Key } from "../components/Key";

// Next.js
import { GetStaticProps, NextPage } from "next";

const Dev: NextPage<{ dev: D }> = ({ dev }) => {
  const heading = "dev";

  return (
    <OtherPageContainer footer={true}>
      <Seo title={heading} description="" />
      <Toggle />
      <Header singleItem={true} column={true}>
        <Heading>{heading}</Heading>
      </Header>
      <div className="mb-6">
        {Object.entries(dev).map((d) => (
          <div key={d[0]} className="flex items-center">
            <Key>{d[0]}:</Key>&nbsp;
            <Text key={d[0]}>{typeof d[1] === "boolean" ? "true" : d[1]}</Text>
          </div>
        ))}
      </div>
      <GoBack />
    </OtherPageContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${API_URL}/dev`);
  const data: D = await response.json();

  return {
    props: {
      dev: data,
    },
  };
};

export default Dev;
