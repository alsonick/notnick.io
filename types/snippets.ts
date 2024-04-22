export interface Snippets {
  snippets: Snippet[];
}

export interface Snippet {
  languageString: string;
  description?: string;
  imperialLink: string;
  framework?: string;
  title: string;
  slug: string;
  path: string;
  id: number;
  lang:
    | "swift"
    | "js"
    | "ts"
    | "rust"
    | "go"
    | "python"
    | "c"
    | "c++"
    | "java"
    | "elixir"
    | "php"
    | "perl"
    | "objective-c"
    | "dart"
    | "kotlin"
    | "lua"
    | "cobol";
}
