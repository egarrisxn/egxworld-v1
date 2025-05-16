import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/preview/",
      },
    ],
    sitemap: "https://egxworld.vercel.app/sitemap.xml",
  };
}
