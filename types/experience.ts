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
  startMonth:
    | ""
    | "jan"
    | "feb"
    | "mar"
    | "apr"
    | "may"
    | "jun"
    | "jul"
    | "aug"
    | "sep"
    | "oct"
    | "nov"
    | "dec";
  endMonth:
    | ""
    | "jan"
    | "feb"
    | "mar"
    | "apr"
    | "may"
    | "jun"
    | "jul"
    | "aug"
    | "sep"
    | "oct"
    | "nov"
    | "dec";
  startYear: number;
  location: string;
  current: boolean;
  feature: boolean;
  remote: boolean;
  endYear: number;
  filter: string;
  logo?: string;
  note?: string;
  slug: string;
  task: string;
  link: string;
  name: string;
  id?: number;
}
