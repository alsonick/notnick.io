export interface ISRCResponse {
  tracks: {
    items: [
      {
        href: string;
        id: string;
        album: {
          images: [
            {
              url: string;
              height: number;
              width: number;
            }
          ];
        };
        external_urls: {
          spotify: string;
        };
        name: string;
        artists: [
          {
            name: string;
          }
        ];
        external_ids: {
          isrc: string;
        };
      }
    ];
  };
  error?: {
    message: string;
    status: number;
  };
}

export interface SpotifyAccessToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}
