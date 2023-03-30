export interface Experience {
  id?: number;
  name: string;
  description: string;
  year: number;
  employmentType:
    | "contract"
    | "full-time"
    | "part-time"
    | "self-employed"
    | "freelance"
    | "internship"
    | "apprenticeship"
    | "temporary";
  remote: boolean;
  location: string;
  current: boolean;
  link: string;
  task: string;
  logo?: string;
}
