import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// The icon.svg monogram at 180px. iOS has no dark variant for home-screen
// icons, so this is the light-mode drawing, and iOS rounds the corners itself.
const scale = size.width / 32;

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: "#000000",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 6 * scale,
          top: 6 * scale,
          width: 20 * scale,
          height: 5 * scale,
          backgroundColor: "#e9e0cc",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 13.5 * scale,
          top: 6 * scale,
          width: 5 * scale,
          height: 20 * scale,
          backgroundColor: "#e9e0cc",
        }}
      />
    </div>,
    size,
  );
}
