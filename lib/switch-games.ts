import { generateRandomId } from "./generate-random-id";
import { SwitchGame } from "../types/switch";

export const SWITCH_GAMES: SwitchGame[] = [
  {
    link: "https://www.nintendo.com/en-gb/Games/Nintendo-Switch-games/New-Super-Mario-Bros-U-Deluxe-1438640.html",
    title: "New Super Mario Bros. U Deluxe",
    id: generateRandomId(),
  },
  {
    link: "https://www.nintendo.com/en-gb/Games/Nintendo-Switch-games/Super-Mario-3D-All-Stars-1832369.html",
    title: "Super Mario 3D All-Stars",
    id: generateRandomId(),
  },
  {
    link: "https://www.nintendo.com/en-gb/Games/Nintendo-Switch-download-software/THE-NEW-DENPA-MEN-2618000.html",
    title: "The New Denpa Men",
    id: generateRandomId(),
  },
  {
    link: "https://www.nintendo.com/en-gb/Games/Nintendo-Switch-games/Nintendo-Switch-Sports-2168292.html",
    title: "Nintendo Switch Sports",
    id: generateRandomId(),
  },
];
