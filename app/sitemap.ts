import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  const baseUrl = siteUrl.replace(/\/$/, "");
  return ["", "/work", "/about", "/contact", ...caseStudies.map((caseStudy) => `/work/${caseStudy.slug}`)].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}
