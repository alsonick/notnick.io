export interface LinkPreview {
  /** The URL the preview ended up on, after any redirects. */
  url: string;
  description: string | null;
  siteName: string | null;
  favicon: string | null;
  title: string | null;
  image: string | null;
}
