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
    | "temporary"
    | "voluntary";
  remote: boolean;
  location: string;
  current: boolean;
  feature: boolean;
  slug: string;
  link: string;
  task: string;
  logo?: string;
  filter: string;
}
