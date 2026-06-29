import { Branding } from "../types/branding";
import { BRANDING } from "./branding";
import { CDN } from "./constants";
import sharp from "sharp";

const formatBytes = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(2)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
};

// Reads the real dimensions, DPI (resolution) and file size of each branding
// asset straight from the CDN at build time, so they never have to be hardcoded.
export const getBranding = async (): Promise<Branding[]> => {
  return Promise.all(
    BRANDING.map(async (branding) => {
      const res = await fetch(`${CDN}${branding.path}.${branding.ext}`);

      if (!res.ok) {
        throw new Error(
          `Failed to fetch branding asset "${branding.name}" (${res.status})`
        );
      }

      const buffer = Buffer.from(await res.arrayBuffer());
      const { width, height, density } = await sharp(buffer).metadata();

      return {
        ...branding,
        dimensions: {
          width: width ?? 0,
          height: height ?? 0,
        },
        resolution: Math.round(density ?? 72),
        size: formatBytes(buffer.length),
      };
    })
  );
};
