import { OtherPageContainer } from "../../components/OtherPageContainer";
import { GoalsPageContainer } from "../../components/GoalsPageContainer";
import { FULL_NAME, PROFESSION } from "../../lib/constants";
import { GoalItem } from "../../components/GoalItem";
import { Heading } from "../../components/Heading";
import { Toggle } from "../../components/Toggle";
import { LinkT } from "../../components/Link";
import { Seo } from "../../components/Seo";

const TZTT = () => {
  return (
    <OtherPageContainer footer={false}>
      <Seo
        title={`Goals for 2024 • ${FULL_NAME}`}
        description={`${FULL_NAME} • ${PROFESSION}`}
      />
      <Toggle />
      <Heading>Goals for 2024</Heading>
      <GoalsPageContainer>
        <GoalItem completed={false}>Become proficient in Swift.</GoalItem>
        <GoalItem completed={false}>Spend less time on social media.</GoalItem>
        <GoalItem completed={false}>
          Contribute more to the Swift ecosystem.
        </GoalItem>
        <GoalItem completed={false}>
          Get my driving license (Hopefully).
        </GoalItem>
        <GoalItem completed={false}>Build on more muscle.</GoalItem>
        <GoalItem completed={false}>Learn to play the piano.</GoalItem>
        <GoalItem completed={false}>Read more books.</GoalItem>
        <GoalItem completed={false}>Get closer to god.</GoalItem>
        <GoalItem completed={false}>
          Ship products like{" "}
          <LinkT href="https://twitter.com/levelsio" target="_blank">
            @levelsio
          </LinkT>
          .
        </GoalItem>
        <GoalItem completed={false}>Write more blogs.</GoalItem>
      </GoalsPageContainer>
    </OtherPageContainer>
  );
};

export default TZTT;
