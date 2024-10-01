export interface Rag {
  composer: string;
  score: string;
  title: string;
  date: number;
  id: number;
  path: Path;
}

export interface Path {
  composer: string;
  file: string;
  ext: string;
}
