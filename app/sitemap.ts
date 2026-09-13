import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

/**
 * The portfolio is a single page, so the sitemap has one entry. Section anchors
 * are fragments of that URL, not separate pages, and don't belong here.
 *
 * `lastModified` is left out rather than stamped with the build time, which
 * would claim the content changed on every deploy.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: getSiteUrl().href }];
}
