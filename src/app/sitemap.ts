import type { MetadataRoute } from "next";
import { SITE_META } from "@/constants/wedding";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_META.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
