import { Experience } from "../types/experience";

const MONTH_LABEL: Record<string, string> = {
  jan: "Jan",
  feb: "Feb",
  mar: "Mar",
  apr: "Apr",
  may: "May",
  jun: "Jun",
  jul: "Jul",
  aug: "Aug",
  sep: "Sep",
  oct: "Oct",
  nov: "Nov",
  dec: "Dec",
};

const MONTH_INDEX: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

const formatEndpoint = (month: string, year: number) => {
  const label = MONTH_LABEL[month];
  return label ? `${label} ${year}` : `${year}`;
};

export const getExperienceDurationString = (experience: Experience): string => {
  const start = formatEndpoint(experience.startMonth, experience.startYear);

  const now = new Date();
  const endMonthIdx = experience.current
    ? now.getMonth()
    : MONTH_INDEX[experience.endMonth] ?? 11;
  const endYear = experience.current ? now.getFullYear() : experience.endYear;

  const end = experience.current
    ? "Present"
    : formatEndpoint(experience.endMonth, experience.endYear);

  const startMonthIdx = MONTH_INDEX[experience.startMonth] ?? 0;
  const monthSpan =
    (endYear - experience.startYear) * 12 + (endMonthIdx - startMonthIdx);
  // Elapsed months between start and end, floored at 1 mo.
  const totalMonths = Math.max(monthSpan, 1);

  if (totalMonths <= 0) {
    return `${start} - ${end}`;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);

  return parts.length > 0
    ? `${start} - ${end} · ${parts.join(" ")}`
    : `${start} - ${end}`;
};
