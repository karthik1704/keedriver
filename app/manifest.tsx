import { MetadataRoute } from 'next'

export default function manifest():MetadataRoute.Manifest {
  return {
    name: "Keedriver - Rent car",
    short_name: "keedriver",
    description:
      "We are concerntarting and giving more vacancies to driver job for various acting drivers and we are mainly covering areas for the drivers in chennai.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
