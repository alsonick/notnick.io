export interface Branding {
  ext: "png" | "jpeg";
  resolution: number;
  dimensions: {
    width: number;
    height: number;
  };
  size: string;
  path: string;
  name: string;
  id?: number;
}
