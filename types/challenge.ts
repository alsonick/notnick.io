export interface Challenge {
  usefulLinks?: string[];
  completedDays: number;
  statusKeys: string[];
  description: string;
  content: Content[];
  daysLeft: number;
  keys: string[];
  note?: string;
  name: string;
  path: string;
  slug: string;
  goal: number;
  id: number;
}

export interface Content {
  description: string;
  completed: boolean;
  preview: Preview;
  slug: string;
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
}

export interface Code {
  icon: "xcode" | "vscode";
  image: {
    extension: string;
  };
  link: string;
}
