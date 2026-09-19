export interface Rule {
  number: number;
  title: string;
  text: string;
  id: number;
}

export interface Response {
  success: boolean;
  rules: Rule[];
  count: number;
}
