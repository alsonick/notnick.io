export interface Challenge {
  completedDays: number;
  content: Content[];
  description: string;
  daysLeft: number;
  name: string;
  path: string;
  slug: string;
  goal: number;
  id: number;
}

export interface Content {
  description: string;
  previewPath: string;
  completed: boolean;
  preview: Preview;
  day: number;
  code?: Code;
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

export interface Code {
  icon: "xcode" | "vscode";
  image: {
    extension: string;
  };
  link: string;
}
