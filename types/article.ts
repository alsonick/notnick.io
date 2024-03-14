export interface Article {
  authors: string[];
  title: string;
  type: string;
  link: string;
  tags: Tag[];
  id: number;
}

export interface Tag {
  id: number;
  filter: string;
}
