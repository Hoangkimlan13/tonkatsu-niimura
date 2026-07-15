// app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://niimura.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  // Bạn chỉ cần liệt kê thủ công các đường dẫn chính ở đây
  const paths = ["/", "/menu", "/store", "/reservation", "/delivery", "/about", "/news", "/contact"];

  return paths.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.75,
  }));
}