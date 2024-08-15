export interface Topic {
  description: string;
  language: string;
  learn: Learn[];
  cover: string;
  id?: number;
}

export interface Learn {
  completed: boolean;
  learned: {
    points: Point[];
    title: string;
    id: number;
  }[];
  image?: string;
  name: string;
  link: string;
  id?: number;
}

export interface Topics {
  description: string;
  language: string;
  content: Topic;
  name: string;
  slug: string;
  link: string;
  id?: number;
}

export interface Point {
  text: string;
  id: number;
}
