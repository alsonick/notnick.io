export const computedAltTitleTag = (name: string) => {
  return name.toLowerCase().includes("banner") ? name : `${name} Logo`;
};
