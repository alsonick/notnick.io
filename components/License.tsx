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
        Feel free to use this site as inspiration for your own projects and make
        it your own. While giving credit is not required, it would be greatly
        appreciated if you <LinkT href={page.credit.link}>gave credit</LinkT>{" "}
        to the original creator by including my full name and a link to{" "}
        <LinkT>{DOMAIN}</LinkT>.
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
