import { Challenge } from "../types/challenge";

export const returnChallengeStatus = (
  challenge: Challenge | undefined
): string => {
  let status: string;

  if (challenge?.completed) {
    status = "Completed";
  } else if (!challenge?.active) {
    status = "Not Active";
  } else if (challenge?.active) {
    status = "Active";
  } else {
    status = "";
  }

  return status;
};
