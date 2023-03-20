export interface Topic {
  id?: number;
  language: string;
  description: string;
  cover: string;
  learn: Learn[];
}

export interface Learn {
  id?: number;
  name: string;
  learned: {
    id: number;
    text: string;
  }[];
  completed: boolean;
  link: string;
}

export interface Topics {
  id?: number;
  name: string;
  slug: string;
  link: string;
  description: string;
  language: string;
  content: Topic;
}
