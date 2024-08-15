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
    | "objective-c"
    | "python"
    | "kotlin"
    | "elixir"
    | "swift"
    | "cobol"
    | "rust"
    | "java"
    | "perl"
    | "dart"
    | "c++"
    | "php"
    | "lua"
    | "js"
    | "ts"
    | "go"
    | "c";
}
