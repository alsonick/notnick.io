import { PostSection } from "../lib/remark/section-meta";

export interface PostAudio {
  /** Path to the MP3 under public/. */
  src: string;
  /** Length in seconds. */
  duration: number;
  /** When each word is read, for following along. Null until timed. */
  timings: string | null;
}

export interface Post {
  audio?: PostAudio | null;
  last_updated_date: string;
  sections?: PostSection[];
  description: string;
  contentHtml: string;
  lineCount?: number;
  finished: boolean;
  pinned?: boolean;
  filter: string;
  labs?: string;
  cover?: string;
  title: string;
  slug: string;
  date: string;
  mins: string;
  tag: string;
}
