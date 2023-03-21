import { Topic } from "./topic";

export interface Learning {
  topics: Topic[] & { language?: string };
  description: string;
  cover: string;
  language: string;
}
