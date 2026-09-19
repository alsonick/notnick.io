import { FULL_NAME, PROFESSION, SWITCH_FRIEND_CODE } from "../../lib/constants";
import { SWITCH_GAMES } from "../../lib/data/switch-games";
import { Animate } from "../../components/layout/Animate";
import { Heading } from "../../components/ui/Heading";
import { Layout } from "../../components/layout/Layout";
import { Header } from "../../components/layout/Header";
import { GoBack } from "../../components/layout/GoBack";
import { FiExternalLink } from "react-icons/fi";
import { LinkT } from "../../components/ui/Link";
import { Text } from "../../components/ui/Text";
import { Seo } from "../../components/layout/Seo";
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
          <div className="flex flex-col min-h-[calc(100vh-8rem)]">
            <Header singleItem={true}>
              <Heading as="h1" style={{ marginBottom: 0 }}>
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
            <div className="mt-auto">
              <GoBack />
            </div>
          </div>
        </Animate>
      </Layout>
    </>
  );
};

export default Games;
