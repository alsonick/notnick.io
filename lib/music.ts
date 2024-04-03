import { generateRandomId } from "./generate-random-id";
import { Music } from "../types/music";

export const MUSIC: Music[] = [
  {
    id: generateRandomId(),
    type: "anime",
    name: "Anime",
    path: "/spotify/anime.jpg",
    link: "https://open.spotify.com/playlist/0Wtm1mJRMoW0NeX8OnuBUj?si=aa5098fa12b3461a",
    feature: true,
  },
  {
    id: generateRandomId(),
    type: "chill",
    name: "Chill",
    path: "/spotify/chill.jpg",
    link: "https://open.spotify.com/playlist/3gBVUEwwgS8CRy8H3hv8Bf?si=efebd638974b4a54",
    feature: true,
  },
  {
    id: generateRandomId(),
    type: "coding",
    name: "Coding",
    path: "/spotify/coding.jpg",
    link: "https://open.spotify.com/playlist/1TOUK6GycbdQqUIQHCV1aX?si=06e5e6b5e46b4694",
    feature: false,
  },
  {
    id: generateRandomId(),
    type: "edm",
    name: "EDM",
    path: "/spotify/edm.jpg",
    link: "https://open.spotify.com/playlist/3lGZDsozMDEXVTyFo8nQxd?si=e64f0ddc4d484ab4",
    feature: false,
  },
  {
    id: generateRandomId(),
    type: "rap",
    name: "Rap",
    path: "/spotify/rap.jpg",
    link: "https://open.spotify.com/playlist/3rbuHFPd34pKchnj82JQNq?si=2af981fe67a24a6b",
    feature: false,
  },
  {
    id: generateRandomId(),
    type: "summer",
    name: "Summer",
    path: "/spotify/summer.jpg",
    link: "https://open.spotify.com/playlist/2D61TAYDwu29oECg3dpJX4?si=6635afc33e644203",
    feature: true,
  },
  {
    id: generateRandomId(),
    type: "travel",
    name: "Travel",
    path: "/spotify/travel.jpg",
    link: "https://open.spotify.com/playlist/3c2Ag0wboNkpOfUlNKmVoh?si=31e4ccb9257d48f0",
    feature: false,
  },
];
