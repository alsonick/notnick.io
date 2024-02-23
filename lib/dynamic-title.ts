import { DOMAIN } from "./constants";

const removeTitle = (title: string) => {
  return title.substring(0, title.indexOf(" -"));
};

export const dynamicTitle = (title: string, description: string) => {
  return process.env.NODE_ENV === "production"
    ? `https://${DOMAIN}/api/og?title=${removeTitle(
        title
      )}&description=${description}`
    : `http://localhost:3000/api/og?title=${removeTitle(
        title
      )}&description=${description}`;
};
