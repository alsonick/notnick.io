import { Subscribers } from "../types/revue";

export const getSubscribers = (): Promise<number> => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("/api/newsletter?data=subs");
    const res = (await response.json()) as Subscribers;
    if (res.success) {
      return resolve(res.count);
    }
    reject("Something went wrong");
  });
};
