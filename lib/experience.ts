import { Experience } from "./../types/experience";

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    name: "Aviato",
    description: "React Engineer",
    year: 2023,
    logo: "/companies/logo/Aviato.png",
    partTime: true,
    location: "Carmel, Indiana - United States",
    remote: true,
    current: true,
    task: "Helped out with building, maintaining, implementing, and improving the user experience on Aviato.",
  },
  {
    id: 2,
    name: "Watchou",
    description: "Frontend Engineer",
    year: 2021,
    logo: "/companies/logo/Watchou.jpeg",
    partTime: true,
    location: "Mississauga, Ontario - Canada",
    remote: true,
    current: false,
    task: "One primary task was to convert the React app to from consuming a RESTful API to a GraphQL API.",
  },
];
