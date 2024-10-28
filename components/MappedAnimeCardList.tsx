import { AnimeCard } from "./AnimeCard";
import { Anime } from "../types/anime";

interface Props {
  showExtendedDescription: boolean;
  list: Anime[];
}

export const MappedAnimeCardList = (props: Props) => {
  return (
    <>
      {props.list.map((anime) => (
        <AnimeCard
          showExtendedDescription={props.showExtendedDescription}
          key={anime.id}
          anime={anime}
        />
      ))}
    </>
  );
};
