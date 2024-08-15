export interface Presence {
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
  discord_user: DiscordUser;
  discord_status: string;
  activities: Activity[];
  spotify: Spotify;
}

export interface Activity {
  application_id?: number;
  timestamps: Timestamps;
  session_id?: string;
  created_at: number;
  sync_id?: string;
  details: string;
  assets: Assets;
  flags?: number;
  state: string;
  party?: Party;
  name: string;
  type: number;
  id: string;
}

export interface Assets {
  small_image?: string;
  large_image: string;
  small_text?: string;
  large_text: string;
}

export interface Party {
  id: string;
}

export interface Timestamps {
  start: number;
  end?: number;
}

export interface DiscordUser {
  discriminator: string;
  public_flags: number;
  avatar: string;
  username: string;
  id: string;
}

export interface Spotify {
  timestamps: Timestamps;
  album_art_url: string;
  track_id: string;
  artist: string;
  album: string;
  song: string;
}
