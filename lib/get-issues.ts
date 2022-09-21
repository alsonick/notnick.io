import { Issues } from "../types/revue";

export const getIssues = (): Promise<number> => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("/api/newsletter?data=issues");
    const res = (await response.json()) as Issues;
    if (res.success) {
      return resolve(res.count);
    }
    reject("Something went wrong");
  });
};
