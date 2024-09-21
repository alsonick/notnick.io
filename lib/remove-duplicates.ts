export const removeDuplicates = <T extends { filter: string }>(
  arr: T[]
): T[] => {
  const uniqueTypes = new Set<string>();
  const uniqueArray = arr.filter((obj: T) => {
    if (uniqueTypes.has(obj.filter)) {
      return false;
    }
    uniqueTypes.add(obj.filter);
    return true;
  });

  return uniqueArray;
};
