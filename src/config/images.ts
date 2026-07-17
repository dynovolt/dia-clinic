export interface ImagePaths {
  logo: string;
  favicon: string;
  defaultOgImage: string;
  heroBackground?: string;
}

export interface ImagesConfig {
  paths: ImagePaths;
}

export const imagesConfig: ImagesConfig = {
  paths: {
    logo: "/logo.png",
    favicon: "/favicon.ico",
    defaultOgImage: "/og-image.png"
  }
};
