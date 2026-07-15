import type { MetadataRoute } from "next";
import { extendedSitemap } from "./data";

const baseUrl = "https://niimura.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const uniquePaths = Array.from(
    new Set(extendedSitemap.map((item) => item.href.split("#")[0])),
  );

  return uniquePaths.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-07-09"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.75,
    alternates: {
      languages: {
        ja: `${baseUrl}${path === "/" ? "" : path}`,
        en: `${baseUrl}/en${path === "/" ? "" : path}`,
        vi: `${baseUrl}/vi${path === "/" ? "" : path}`,
      },
    },
  }));
}
