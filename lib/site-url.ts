/**
 * The site's absolute origin, for the metadata that must be a full URL: the
 * canonical link, Open Graph image, sitemap, robots file, and structured data.
 *
 * The production domain is not hard-coded, because it doesn't exist until the
 * site is deployed. In order of preference:
 *
 * 1. `SITE_URL`, set explicitly, e.g. once a custom domain is attached.
 * 2. `VERCEL_PROJECT_PRODUCTION_URL`, the production domain Vercel provides to
 *    every build, so shared links point at production even from a preview.
 * 3. `http://localhost:3000` for local builds.
 *
 * Read on the server only; neither variable is exposed to the browser.
 */
export function getSiteUrl(): URL {
  if (process.env.SITE_URL) {
    return new URL(process.env.SITE_URL);
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }

  return new URL(`http://localhost:${process.env.PORT ?? 3000}`);
}
