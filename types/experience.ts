export interface Experience {
  id?: number;
  name: string;
  description: string;
  year: number;
  partTime: boolean;
  remote: boolean;
  location: string;
  current: boolean;
  task: string;
  logo?: string;
}
