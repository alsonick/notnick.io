import { generateRandomId } from "./generate-random-id";
import { Music } from "../types/music";

export const MUSIC: Music[] = [
  {
    id: generateRandomId(),
    name: "Gaming",
    path: "/spotify/gaming.jpg",
    link: "https://music.youtube.com/playlist?list=PL1neWfMX2BxR_hPBOYHgMxTt6hTfpV0ld&si=GbJYXGBv0MGhd9BV",
    feature: true,
  },
  {
    id: generateRandomId(),
    name: "Anime",
    path: "/spotify/anime.jpg",
    link: "https://music.youtube.com/playlist?list=PL1neWfMX2BxRpKXg_ci0h-1Rn6IuCHZdR&si=1spela8ocRWH40ZR",
    feature: true,
  },
  {
    id: generateRandomId(),
    name: "Chill",
    path: "/spotify/chill.jpg",
    link: "https://music.youtube.com/playlist?list=PL1neWfMX2BxQQL_35si0Ybqpm1xjhfzJ6&si=WbUzOgjsuerH-mLe",
    feature: false,
  },
  {
    id: generateRandomId(),
    name: "Rap",
    path: "/spotify/rap.jpg",
    link: "https://music.youtube.com/playlist?list=PL1neWfMX2BxQ_ToVlebZq8hF2mTd2yrPU&si=CKdsLNbLQsvZSoQZ",
    feature: false,
  },
  {
    id: generateRandomId(),
    name: "Summer",
    path: "/spotify/summer.jpg",
    link: "https://music.youtube.com/playlist?list=PL1neWfMX2BxT1darSn-Akm3d0Dyvm50WG&si=8y14cA8LlAKpY3ZS",
    feature: true,
  },
  {
    id: generateRandomId(),
    name: "Travel",
    path: "/spotify/travel.jpg",
    link: "https://music.youtube.com/playlist?list=PL1neWfMX2BxQXu4wjPS_lBrcZAq6LojDk&si=eNFGP12PhlRGvQF5",
    feature: false,
  },
  {
    id: generateRandomId(),
    name: "Ragtime",
    path: "/spotify/ragtime.jpg",
    link: "https://music.youtube.com/playlist?list=PL1neWfMX2BxRte1X2DX1QeSYCUoE6H8tw&si=1mWg7Flj7o-U3BjZ",
    feature: false,
  },
  {
    id: generateRandomId(),
    name: "Christmas",
    path: "/spotify/christmas.jpg",
    link: "https://music.youtube.com/playlist?list=PL1neWfMX2BxRmm0ofJkKTDhLLRC4KRS9k&si=e8Xr1pIMUVN4NtCJ",
    feature: false,
  },
];
