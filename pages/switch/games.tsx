import { FULL_NAME, PROFESSION, SWITCH_FRIEND_CODE } from "../../lib/constants";
import { SWITCH_GAMES } from "../../lib/switch-games";
import { Animate } from "../../components/Animate";
import { Heading } from "../../components/Heading";
import { Layout } from "../../components/Layout";
import { Header } from "../../components/Header";
import { GoBack } from "../../components/GoBack";
import { FiExternalLink } from "react-icons/fi";
import { LinkT } from "../../components/Link";
import { Text } from "../../components/Text";
import { Seo } from "../../components/Seo";
import { page } from "../../lib/page";

const Games = () => {
  return (
    <>
      <Seo
        title={`${page.switch.games.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={true}>
            <Heading style={{ marginBottom: 0 }}>
              {page.switch.games.title}
            </Heading>
          </Header>
          <div className="mb-4">
            <Text>{SWITCH_FRIEND_CODE}</Text>
          </div>
          <div className="flex flex-col mb-4">
            {SWITCH_GAMES.map((game) => (
              <div
                className="flex w-full items-center justify-between h-12 border-b border-teal-100 dark:border-teal-900"
                key={game.id}
              >
                <Text style={{ fontWeight: 600 }}>{game.title}</Text>
                <LinkT href={game.link} target="_blank">
                  Learn more <FiExternalLink className="ml-1" />
                </LinkT>
              </div>
            ))}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Games;
