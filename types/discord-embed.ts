// The subset of Discord's message components that a component embed (the
// custom link preview Discord renders in place of the Open Graph card) is
// allowed to contain. Anything outside this set invalidates the whole payload,
// so the types here are deliberately narrower than the message component API.
// https://discord.com/developers/docs/link-previews/component-embeds

export const ComponentType = {
  MediaGallery: 12,
  TextDisplay: 10,
  Container: 17,
  Separator: 14,
  Thumbnail: 11,
  ActionRow: 1,
  Section: 9,
  Button: 2,
} as const;

// Link is the only button style a component embed accepts.
export const LINK_BUTTON_STYLE = 5;

export interface UnfurledMedia {
  // Discord fills in the dimensions, content type and proxy URL itself once it
  // has fetched the file, so `url` is the only key we're allowed to send.
  url: string;
}

export interface DiscordEmoji {
  animated?: boolean;
  name?: string;
  id?: string;
}

export interface LinkButton {
  type: typeof ComponentType.Button;
  style: typeof LINK_BUTTON_STYLE;
  emoji?: DiscordEmoji;
  disabled?: boolean;
  label?: string;
  url: string;
}

export interface TextDisplay {
  type: typeof ComponentType.TextDisplay;
  content: string;
}

export interface Thumbnail {
  type: typeof ComponentType.Thumbnail;
  media: UnfurledMedia;
  description?: string;
  spoiler?: boolean;
}

export interface MediaGalleryItem {
  media: UnfurledMedia;
  description?: string;
  spoiler?: boolean;
}

export interface MediaGallery {
  type: typeof ComponentType.MediaGallery;
  items: MediaGalleryItem[];
}

export interface Separator {
  type: typeof ComponentType.Separator;
  spacing?: 1 | 2;
  divider?: boolean;
}

export interface Section {
  type: typeof ComponentType.Section;
  accessory: LinkButton | Thumbnail;
  components: TextDisplay[];
}

export interface ActionRow {
  type: typeof ComponentType.ActionRow;
  components: LinkButton[];
}

export type ContainerChild =
  | MediaGallery
  | TextDisplay
  | Separator
  | ActionRow
  | Section;

export interface Container {
  type: typeof ComponentType.Container;
  components: ContainerChild[];
  accent_color?: number;
  spoiler?: boolean;
}

export interface ComponentEmbed {
  component: Container;
}
