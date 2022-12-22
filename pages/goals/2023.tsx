import { Heading } from "../../components/Heading";
import { Toggle } from "../../components/Toggle";
import { LinkT } from "../../components/Link";
import { Seo } from "../../components/Seo";
import React from "react";

const Item = ({
  children,
  completed,
}: {
  children: React.ReactNode;
  completed: boolean;
}) => {
  return (
    <li className="text-gray-600 dark:text-gray-300 list-disc">
      {children} {completed ? "✅" : "❌"}
    </li>
  );
};

const TZTT = () => {
  return (
    <div className="p-20">
      <Seo title="Goals for 2023" description="" />
      <Toggle />
      <Heading>Goals for 2023</Heading>
      <ul className="pl-10">
        <Item completed={false}>Improve my sleep schedule.</Item>
        <Item completed={false}>Spend less time on my phone.</Item>
        <Item completed={false}>Hit the gym more consistently.</Item>
        <Item completed={false}>Contribute more to open source.</Item>
        <Item completed={false}>
          Become a TS god and surpass{" "}
          <LinkT href="https://twitter.com/alistaiir" target="_blank">
            Alistair
          </LinkT>
          .
        </Item>
        <Item completed={false}>Learn PHP and master JavaScript.</Item>
        <Item completed={false}>
          Make at least 3000 contributions on GitHub.
        </Item>
        <Item completed={false}>
          Ship products like{" "}
          <LinkT href="https://twitter.com/levelsio" target="_blank">
            @levelsio
          </LinkT>
          .
        </Item>
        <Item completed={false}>Meet more like-minded people.</Item>
        <Item completed={false}>Write more blogs.</Item>
        <Item completed={true}>Spend less time on social media.</Item>
        <Item completed={false}>Listen to more podcasts.</Item>
      </ul>
    </div>
  );
};

export default TZTT;
