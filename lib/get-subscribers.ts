import { Subscribers } from "../types/revue";

export const getSubscribers = async (): Promise<Subscribers> => {
  const response = await fetch("/api/newsletter");
  const subs = await response.json();
  return subs;
};
