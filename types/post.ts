export interface Post {
  last_updated_date: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  contentHtml: string;
  finished: boolean;
  cover?: string;
  tag: string;
  mins: string;
  filter: string;
}
