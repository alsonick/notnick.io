import { generateRandomId } from "./generate-random-id";
import { Branding } from "../types/branding";

export const BRANDING: Branding[] = [
  {
    id: generateRandomId(),
    path: "/branding/sig_avatar_one",
    ext: "png",
    name: "Sig Avatar One",
    dimensions: {
      width: 3600,
      height: 3600,
    },
    size: "246 KB",
    resolution: 288,
  },
  {
    id: generateRandomId(),
    path: "/branding/secondary_dark_short_sig_avatar",
    ext: "png",
    name: "Secondary Dark Short Sig Avatar",
    dimensions: {
      width: 3600,
      height: 3600,
    },
    size: "198 KB",
    resolution: 288,
  },
  {
    id: generateRandomId(),
    path: "/branding/secondary_light_short_sig_avatar",
    ext: "png",
    name: "Secondary Light Short Sig Avatar",
    dimensions: {
      width: 3600,
      height: 3600,
    },
    size: "269 KB",
    resolution: 288,
  },
  {
    id: generateRandomId(),
    path: "/branding/small_banner",
    ext: "png",
    name: "Small Banner",
    dimensions: {
      width: 1500,
      height: 500,
    },
    size: "1.30 KB",
    resolution: 72,
  },
  {
    id: generateRandomId(),
    path: "/branding/large_banner",
    ext: "png",
    name: "Large Banner",
    dimensions: {
      width: 2048,
      height: 1152,
    },
    size: "4.24 KB",
    resolution: 72,
  },
];
