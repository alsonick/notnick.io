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
        title={`Goals for 2023 - ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Toggle />
      <Heading>Goals for 2023</Heading>
      <GoalsPageContainer>
        <GoalItem completed={false}>
          Become a TS god and surpass{" "}
          <LinkT href="https://twitter.com/alistaiir" target="_blank">
            Alistair
          </LinkT>
          .
        </GoalItem>
        <GoalItem completed={true}>Spend less time on social media.</GoalItem>
        <GoalItem completed={true}>Contribute more to open source.</GoalItem>
        <GoalItem completed={false}>Get my driving license.</GoalItem>
        <GoalItem completed={false}>Meet more like-minded people.</GoalItem>
        <GoalItem completed={true}>Hit the gym more consistently.</GoalItem>
        <GoalItem completed={false}>
          Make at least 3000 contributions on GitHub.
        </GoalItem>
        <GoalItem completed={true}>Spend less time on my phone.</GoalItem>
        <GoalItem completed={false}>
          Ship products like{" "}
          <LinkT href="https://twitter.com/levelsio" target="_blank">
            @levelsio
          </LinkT>
          .
        </GoalItem>
        <GoalItem completed={true}>Write more blogs.</GoalItem>
        <GoalItem completed={true}>Improve my sleep schedule.</GoalItem>
        <GoalItem completed={true}>Listen to more podcasts.</GoalItem>
      </GoalsPageContainer>
    </OtherPageContainer>
  );
};

export default TZTT;
