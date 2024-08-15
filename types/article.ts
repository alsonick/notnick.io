export interface Article {
  authors: string[];
  title: string;
  type: string;
  link: string;
  tags: Tag[];
  id: number;
}

export interface Tag {
  filter: string;
  id: number;
}
