export interface Experience {
  showCurrentStatus?: boolean;
  discontinued: boolean;
  description: string;
  employmentType:
    | "apprenticeship"
    | "self-employed"
    | "internship"
    | "full-time"
    | "part-time"
    | "freelance"
    | "voluntary"
    | "temporary"
    | "contract";
  location: string;
  current: boolean;
  feature: boolean;
  remote: boolean;
  filter: string;
  logo?: string;
  note?: string;
  year: number;
  slug: string;
  task: string;
  link: string;
  name: string;
  id?: number;
}
