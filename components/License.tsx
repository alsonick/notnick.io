import { DOMAIN } from "../lib/constants";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { page } from "../lib/page";
import { Header } from "./Header";
import { LinkT } from "./Link";
import { Text } from "./Text";

export const License = () => {
  return (
    <Section topBorder={true}>
      <Header singleItem={false}>
        <Heading>License 📜</Heading>
      </Header>
      <Text>
        Anyone is free to take inspiration from this site as long as you make
        some changes (<LinkT href={page.credit.link}>read more here</LinkT>) to
        your version and give credit to the ordinal creator. Credits should
        include my full name and a link to my site (<LinkT>{DOMAIN}</LinkT>).
      </Text>
      <Text>
        <br />
        The source code is under the{" "}
        <LinkT href="https://mit-license.org/" target="_blank">
          MIT License
        </LinkT>
        , read more <LinkT href={page.license.link}>here</LinkT>.
      </Text>
    </Section>
  );
};
