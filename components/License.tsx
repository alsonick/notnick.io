import { FULL_NAME } from "../lib/constants";
import { Heading } from "./Heading";
import { Header } from "./Header";
import { LinkT } from "./Link";
import { Text } from "./Text";

export const License = () => {
  return (
    <section className="flex flex-col border-t border-teal-100 dark:border-teal-900 pt-5 mb-12">
      <Header singleItem={false}>
        <Heading>License 📜</Heading>
      </Header>
      <Text>
        Anyone is free to take inspiration from this site as long as you make
        some changes to your version and give credit to the ordinal creator.
        Credits should include my full name (<b>{FULL_NAME}</b>) and a link to
        my site (<LinkT>notnick.io</LinkT>).
      </Text>
      <br />
      <Text>
        The source code is under the{" "}
        <LinkT href="https://mit-license.org/" target="_blank">
          MIT License
        </LinkT>
        , read more <LinkT href="/license">here</LinkT>.
      </Text>
    </section>
  );
};
