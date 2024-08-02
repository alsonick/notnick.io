import { MappedAnimeCardList } from "../components/MappedAnimeCardList";
import { capitalizeFirstLetter } from "../lib/capitalize-first-letter";
import { generateRandomId } from "../lib/generate-random-id";
import { removeDuplicates } from "../lib/remove-duplicates";
import { FilterListBox } from "../components/FilterListBox";
import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Switch } from "../components/Switch";
import { LinkT } from "../components/Link";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { Key } from "../components/Key";
import { Anime } from "../types/anime";
import { ANIME } from "../lib/anime";
import { useState } from "react";

const Anime = () => {
  var animes: Anime[] = [
    {
      filter: capitalizeFirstLetter("all"),
      id: generateRandomId(),
      description: "",
      anilistId: 0,
      english: "",
      watch: "",
      name: "",
      slug: "",
      path: ",",
    },
  ];

  ANIME.forEach((anime) => {
    animes.push({
      filter: capitalizeFirstLetter(anime.filter),
      description: anime.description,
      anilistId: anime.anilistId,
      english: anime.english,
      watch: anime.watch,
      name: anime.name,
      slug: anime.slug,
      path: anime.path,
      id: anime.id,
    });
  });

  const [showExtendedDescription, setShowExtendedDescription] = useState(true);
  const [selected, setSelected] = useState(
    capitalizeFirstLetter(animes[0].filter)
  );

  const toggleShowExtendedDescription = () => {
    setShowExtendedDescription(!showExtendedDescription);
  };

  const filteredAnimeList = animes.filter((anime) => anime.filter === selected);

  return (
    <>
      <Seo
        title={`Anime • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>Anime</Heading>
            <FilterListBox
              items={removeDuplicates(animes)}
              selectedItem={selected}
              onChange={setSelected}
              fullWidth={false}
            />
          </Header>
          <div className="mb-5">
            <Text style={{ marginTop: "10px" }}>
              This is the entire collection of anime shows that&apos;ve seen
              (probably have seen more), or that I&apos;m currently watching.
              Yes I know I have such an amazing taste.
            </Text>
            <br />
            <Text>
              Credit to{" "}
              <LinkT href="https://anilist.co" target="_blank">
                anilist.co
              </LinkT>{" "}
              for all the images and descriptions.
            </Text>
          </div>
          <div className="flex items-center justify-between w-full mt-3 sm:my-4">
            <Key>Show extended description:</Key>{" "}
            <Switch
              setEnabled={toggleShowExtendedDescription}
              enabled={showExtendedDescription}
            />
          </div>
          <div className="sm:hidden flex items-center justify-between w-full mb-4 mt-2">
            <Key>Mobile users:</Key> <Text>Tap the description.</Text>
          </div>
          <div className="flex flex-col">
            {selected !== capitalizeFirstLetter("all") ? (
              <MappedAnimeCardList
                showExtendedDescription={showExtendedDescription}
                list={filteredAnimeList}
              />
            ) : (
              <MappedAnimeCardList
                showExtendedDescription={showExtendedDescription}
                list={ANIME}
              />
            )}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Anime;
