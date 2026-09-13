/**
 * Fetches a Google Font as TrueType for `ImageResponse`, which cannot read the
 * woff2 files `next/font` serves to the page.
 *
 * Only the glyphs in `text` are requested, so the download stays a few
 * kilobytes. Returns `null` on any failure: generated images then fall back to
 * the renderer's built-in font instead of failing the build.
 */
export async function loadGoogleFont(
  family: string,
  text: string,
): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(cssUrl)).text();
    const source = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
    );
    if (!source) return null;

    const font = await fetch(source[1]);
    return font.ok ? await font.arrayBuffer() : null;
  } catch {
    return null;
  }
}
