import { OtherPageContainer } from "../../components/OtherPageContainer";
import { Heading } from "../../components/Heading";
import { Toggle } from "../../components/Toggle";
import { LinkT } from "../../components/Link";
import { Seo } from "../../components/Seo";

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
    <OtherPageContainer footer={true}>
      <Seo title="Goals for 2024" description="" />
      <Toggle />
      <Heading>Goals for 2024</Heading>
      <ul className="pl-10">
        <Item completed={false}>Become proficient in Swift.</Item>
        <Item completed={false}>Spend less time on social media.</Item>
        <Item completed={false}>Contribute more to the Swift ecosystem.</Item>
        <Item completed={false}>Get my driving license (Hopefully).</Item>
        <Item completed={false}>Build on more muscle.</Item>
        <Item completed={false}>
          Ship products like{" "}
          <LinkT href="https://twitter.com/levelsio" target="_blank">
            @levelsio
          </LinkT>
          .
        </Item>
        <Item completed={false}>Write more blogs.</Item>
      </ul>
    </OtherPageContainer>
  );
};

export default TZTT;
