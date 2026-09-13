import { ImageResponse } from "next/og";

import { loadGoogleFont } from "@/lib/google-font";
import { site } from "@/lib/site";

export const alt = `${site.name} — Informatics Engineering student at Universitas Padjadjaran`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The page's palette, written out: the renderer has no CSS variables.
const ink = "#000000";
const paper = "#e9e0cc";
const plate = "#f4eddb";

const label = "INFORMATICS ENGINEERING STUDENT";
const affiliation = "Universitas Padjadjaran · Machine learning";
const handle = "github.com/MFDOOMs";

/**
 * The link preview for social networks and messaging apps, drawn as one comic
 * panel on halftone stock so a shared link looks like the site it opens.
 *
 * Generated once at build time. Every line is a fact already on the page.
 */
export default async function OpengraphImage() {
  // The renderer draws any text without an explicit family in the first font
  // listed, and falls back per glyph when a font lacks one. So Archivo leads,
  // and Anton is requested with every character in the image: if Archivo fails
  // to load, the footer is set wholly in Anton rather than in a mix of faces.
  const [archivo, anton] = await Promise.all([
    loadGoogleFont("Archivo", affiliation + handle),
    loadGoogleFont("Anton", label + site.name + affiliation + handle),
  ]);

  const fonts = [
    archivo && { name: "Archivo", data: archivo, weight: 400 as const },
    anton && { name: "Anton", data: anton, weight: 400 as const },
  ]
    .filter((font) => font !== null)
    .map((font) => ({ ...font, style: "normal" as const }));

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: "48px 60px 60px 48px",
        backgroundColor: paper,
        backgroundImage:
          "radial-gradient(circle, rgba(0,0,0,0.2) 1.6px, transparent 1.7px)",
        backgroundSize: "12px 12px",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 56px",
          backgroundColor: plate,
          border: `6px solid ${ink}`,
          boxShadow: `12px 12px 0 0 ${ink}`,
          color: ink,
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              padding: "8px 18px",
              backgroundColor: ink,
              color: plate,
              fontFamily: "Anton",
              fontSize: 34,
              letterSpacing: 1,
            }}
          >
            {label}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Anton",
            fontSize: 124,
            lineHeight: 0.95,
          }}
        >
          {site.name}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 24,
            fontFamily: "Archivo",
            fontSize: 28,
          }}
        >
          <div style={{ display: "flex" }}>{affiliation}</div>
          <div style={{ display: "flex" }}>{handle}</div>
        </div>
      </div>
    </div>,
    { ...size, fonts: fonts.length > 0 ? fonts : undefined },
  );
}
