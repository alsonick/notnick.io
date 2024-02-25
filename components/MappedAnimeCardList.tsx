import { Anime } from "../types/anime";
import { AnimeCard } from "./AnimeCard";

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
