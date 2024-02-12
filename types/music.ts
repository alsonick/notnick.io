export interface Music {
  id: number;
  type:
    | "anime"
    | "chill"
    | "coding"
    | "edm"
    | "ragtime"
    | "rap"
    | "summer"
    | "travel";
  name: string;
  path: string;
  link: string;
  feature: boolean;
}
