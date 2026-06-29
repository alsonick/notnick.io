import { generateRandomId } from "./generate-random-id";
import { BrandingSource } from "../types/branding";

export const BRANDING: BrandingSource[] = [
  {
    id: generateRandomId(),
    path: "/branding/Avatar",
    ext: "png",
    name: "Chibi Avatar",
  },
  {
    id: generateRandomId(),
    path: "/branding/Sig_Avatar_One",
    ext: "png",
    name: "Sig Avatar One",
  },
  {
    id: generateRandomId(),
    path: "/branding/Secondary_Dark_Short_Sig_Avatar",
    ext: "png",
    name: "Secondary Dark Short Sig Avatar",
  },
  {
    id: generateRandomId(),
    path: "/branding/Secondary_Light_Short_Sig_Avatar",
    ext: "png",
    name: "Secondary Light Short Sig Avatar",
  },
  {
    id: generateRandomId(),
    path: "/branding/Small_Banner",
    ext: "png",
    name: "Small Banner",
  },
  {
    id: generateRandomId(),
    path: "/branding/Large_Banner",
    ext: "png",
    name: "Large Banner",
  },
];
