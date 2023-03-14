export interface Topic {
  id?: number;
  name: string;
  learned: {
    id: number;
    text: string;
  }[];
  completed: boolean;
  link: string;
}
