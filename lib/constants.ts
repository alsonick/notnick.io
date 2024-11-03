import { page } from "./page";

export const API_URL =
  process.env.NODE_ENV === "development"
    ? "https://localhost:3000/api"
    : "https://notnick.io/api";
export const WEBSOCKET_URL = "wss://api.lanyard.rest/socket";
export const SUBJECT_OF_STUDY = "Computer Science";
export const BLOGS_DIR = `posts${page.blog.path}`;
export const NOTES_DIR = `posts${page.note.path}`;
export const DISCORD_ID = "463449066672619520";
export const SECONDARY_THEME_COLOR = "#5050ff";
export const PROFESSION = "Software Engineer";
export const EMAIL_ADDRESS = "hi@notnick.io";
export const YEAR_STARTED_PROGRAMMING = 2019;
export const BLOGS_URL_PATH = page.blog.path;
export const NOTES_URL_PATH = page.note.path;
export const FULL_NAME = "Nicholas Njoki";
export const LOCATED = "United Kingdom";
export const CACHE_TOKEN = "nas-dsf";
export const FIRST_NAME = "Nicholas";
export const DOMAIN = "notnick.io";
export const LAST_NAME = "Njoki";
export const CITY = "Canterbury";
export const THEME = "#f54bff";
export const AVATAR = "Avatar";
export const COUNTRY = "UK";
