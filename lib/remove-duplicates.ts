export const removeDuplicates = <T extends { filter: string }>(
  arr: T[]
): T[] => {
  const uniqueTypes = new Set<string>();

  // Use filter to create a new array with unique objects based on the "type" property
  const uniqueArray = arr.filter((obj: T) => {
    if (uniqueTypes.has(obj.filter)) {
      // Duplicate found, return false to filter it out
      return false;
    }

    // Add the type to the Set to track uniqueness
    uniqueTypes.add(obj.filter);

    // Not a duplicate, return true to include it in the filtered array
    return true;
  });

  return uniqueArray;
};
