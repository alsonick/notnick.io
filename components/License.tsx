import { Heading } from "./Heading";
import { Link } from "./Link";
import { Text } from "./Text";

export const License = () => {
  return (
    <section className="flex flex-col border-t border-teal-100 dark:border-teal-900 pt-5 mb-12">
      <Heading>License 📜</Heading>
      <Text>
        Anyone is free to take inspiration from this site as long as you make
        some changes to your version and give credit to the ordinal creator.
        Credits should include my full name (<b>Nicholas Njoki</b>) and a link
        to my site (<Link>notnick.io</Link>).
      </Text>
      <br />
      <Text>
        The source code is under the{" "}
        <Link href="https://mit-license.org/" target="_blank">
          MIT License
        </Link>
        , read more <Link href="/license">here</Link>.
      </Text>
    </section>
  );
};
