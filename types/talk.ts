export interface Talk {
  id: number;
  title: string;
  link: Link;
  type: string;
  authors: string[];
}

interface Link {
  id: string;
}
