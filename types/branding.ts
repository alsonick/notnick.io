export interface Branding {
  path: string;
  id?: number;
  ext: "png" | "jpeg";
  name: string;
  dimensions: {
    width: number;
    height: number;
  };
  size: string;
}
