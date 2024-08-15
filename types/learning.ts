import { Topic } from "./topic";

export interface Learning {
  topics: Topic[] & { language?: string };
  description: string;
  language: string;
  cover: string;
}
