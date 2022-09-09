import { Subscribers } from "../types/revue";

export const getSubscribers = (): Promise<Subscribers | string> => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("/api/newsletter");
    const subs = await response.json();
    if (subs) return resolve(subs);
    reject("Something went wrong");
  });
};
