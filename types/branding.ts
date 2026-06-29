export interface BrandingSource {
  ext: "png" | "jpeg";
  path: string;
  name: string;
  id?: number;
}

export interface Branding extends BrandingSource {
  resolution: number;
  dimensions: {
    width: number;
    height: number;
  };
  size: string;
}
