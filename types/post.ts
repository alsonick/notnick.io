import { PostSection } from "../lib/remark-section-meta";

export interface Post {
  sections?: PostSection[];
  last_updated_date: string;
  description: string;
  contentHtml: string;
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
