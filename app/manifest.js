export default function manifest() {
  return {
    name: "egxworld",
    short_name: "egxo",
    description: "Full Stack Developer. Digital Product Designer.",
    start_url: "/",
    display: "standalone",
    background_color: "#eaeaea",
    theme_color: "#eaeaea",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon-mask.png",
        type: "image/png",
        sizes: "384x384",
        purpose: "maskable",
      },
    ],
  };
}
