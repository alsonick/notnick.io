import { PostSection } from "../lib/remark-section-meta";

export interface Post {
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
