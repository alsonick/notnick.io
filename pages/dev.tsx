import { OtherPageContainer } from "../components/OtherPageContainer";
import { Heading } from "../components/Heading";
import { Toggle } from "../components/Toggle";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { Dev as D } from "../types/dev";
import { Key } from "../components/Key";

// Next.js
import { NextPage } from "next";

const Dev: NextPage = () => {
  const [dev, setDev] = useState<D | null>(null);

  const heading = "dev";

  const fetchDevData = async () => {
    const response = await fetch(`/api/dev`);
    const data: D = await response.json();
    setDev(data);
  };

  useEffect(() => {
    fetchDevData();
  }, []);

  return (
    <OtherPageContainer footer={false}>
      <Seo title={heading} description="" />
      <Toggle />
      <Header singleItem={true} column={true}>
        <Heading>{heading}</Heading>
      </Header>
      <div className="mb-6">
        {dev ? (
          Object.entries(dev).map((d) => (
            <div key={d[0]} className="flex items-center">
              <Key>{d[0]}:</Key>&nbsp;
              <Text key={d[0]}>
                {typeof d[1] === "boolean" ? "true" : d[1]}
              </Text>
            </div>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </div>
    </OtherPageContainer>
  );
};

export default Dev;
