import { Experience } from "../types/experience";

export const getEmploymentTypeString = (props?: Experience) => {
  switch (props?.employmentType) {
    case "apprenticeship":
      return "Apprenticeship";
    case "contract":
      return "Contract";
    case "freelance":
      return "Freelance";
    case "full-time":
      return "Full-Time";
    case "internship":
      return "Internship";
    case "part-time":
      return "Part-Time";
    case "self-employed":
      return "Self-Employed";
    case "voluntary":
      return "Voluntary";
    default:
      return "Temporary";
  }
};
