export interface Token {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  avatar_decoration: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string;
  banner_color: string;
  accent_color: number;
  locale: string;
  mfa_enabled: boolean;
  premium_type: number;
}

export interface Response {
  success: boolean;
  user: ClientUser;
}

export interface ClientUser {
  id: string;
  name: string;
  username: string;
  avatar: string;
}
