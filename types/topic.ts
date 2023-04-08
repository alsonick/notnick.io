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
    title: string;
    points: Point[];
  }[];
  completed: boolean;
  image?: string;
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

export interface Point {
  id: number;
  text: string;
}
