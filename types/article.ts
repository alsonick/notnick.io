export interface Article {
  id: number;
  title: string;
  type: string;
  link: string;
  authors: string[];
  tags: Tag[];
}

export interface Tag {
  id: number;
  filter: string;
}
