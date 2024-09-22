import type { MetadataRoute } from "next";
import AppData from "./AppData";
import variables from "./variables.module.scss";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: AppData.name,
    short_name: AppData.shortName,
    description: AppData.description,
    start_url: "/",
    id: "/",
    display: "standalone",
    background_color: variables.background,
    theme_color: variables.primary,
    icons: [
      {
        src: "icon_72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "icon_72_maskable.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "icon_128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "icon_128_maskable.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "icon_144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "icon_144_maskable.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "icon_192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icon_192_maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "icon_512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "icon_512_maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
