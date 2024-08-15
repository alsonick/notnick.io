export interface Dev {
  success: boolean;
  dev: {
    platform: string;
    NODE_ENV: string;
    version: string;
    ipv6: boolean;
    arch: string;
    node: string;
    lts: string;
    v8: string;
  };
}
