export interface Music {
  feature: boolean;
  name: string;
  link: string;
  path: string;
  id: number;
  type:
    | "ragtime"
    | "travel"
    | "coding"
    | "summer"
    | "chill"
    | "anime"
    | "edm"
    | "rap";
}
