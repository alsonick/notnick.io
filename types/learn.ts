export interface Course {
  usefulLinks?: string[];
  completedLessons: number;
  statusKeys: string[];
  description: string;
  modules: Module[];
  completed: boolean;
  active: boolean;
  keys: string[];
  note?: string;
  name: string;
  path: string;
  slug: string;
  id: number;
}

export interface Module {
  lessons: Lesson[];
  name: string;
  id: number;
}

export interface Lesson {
  completed: boolean;
  title: string;
  learnt: string;
  id: number;
}
