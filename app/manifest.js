import { meta } from "@/components/meta";

export default function manifest() {
  return {
    name: meta.applicationName,
    short_name: meta.applicationName,
    description: meta.description,
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#fff",
    scope: "/",
    lang: "cs",
    theme_color: meta.themeColor,
    categories: ["music", "event"],
    icons: [
      { src: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
  };
}
