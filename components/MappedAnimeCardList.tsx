import { AnimeCard } from "./AnimeCard";
import { Anime } from "../types/anime";

interface Props {
  showExtendedDescription: boolean;
  list: Anime[];
}

export const MappedAnimeCardList = ({
  showExtendedDescription,
  list,
}: Props) => {
  return (
    <>
      {list.map((anime) => (
        <AnimeCard
          showExtendedDescription={showExtendedDescription}
          key={anime.id}
          anime={anime}
        />
      ))}
    </>
  );
};
