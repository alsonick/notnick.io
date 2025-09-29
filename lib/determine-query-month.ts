export const determineQueryMonth = (month: string): number => {
  switch (month) {
    case "christmas":
      return 11;
    case "xmas":
      return 11;
    case "santa":
      return 11;
    case "halloween":
      return 9;
    case "spooky":
      return 9;
    case "scary":
      return 9;
    default:
      return 0;
  }
};
