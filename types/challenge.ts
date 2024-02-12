export interface Challenge {
  description: string;
  content: Content[];
  name: string;
  path: string;
  slug: string;
  id: number;
}

export interface Content {
  contentCoveredDescription: string;
  daysToComplete: number;
  completedDays: number;
  description: string;
  completed: boolean;
  preview: boolean;
  id: number;
}

export interface Preview {
  previewContent?: PreviewContent;
  available: boolean;
}

export interface PreviewContent {
  extension: string;
  path: string;
  alt: string;
}
