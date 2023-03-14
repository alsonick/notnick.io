export interface Experience {
  id?: number;
  name: string;
  description: string;
  year: number;
  partTime: boolean;
  remote: boolean;
  location: string;
  current: boolean;
  link: string;
  task: string;
  logo?: string;
}
