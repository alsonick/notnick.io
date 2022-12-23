const removeTitle = (title: string) => {
  return title.substring(0, title.indexOf(" -"));
};

export const dynamicTitle = (title: string) => {
  return process.env.NODE_ENV === "production"
    ? `https://notnick.io/api/og?title=${removeTitle(title)}`
    : `http://localhost:3000/api/og?title=${removeTitle(title)}`;
};
