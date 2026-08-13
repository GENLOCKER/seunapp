import { ImageResponse } from "next/og";

export const alt = "Ogunruku Seun | Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#0a192f",
          color: "#CBD5F6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ color: "#66FFDB", fontSize: 28, marginBottom: 16 }}>
          Hi, my name is
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, color: "#CBD5F6" }}>
          Ogunruku Oluwaseun
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, color: "#66FFDB" }}>
          I build things for the web.
        </div>
      </div>
    ),
    { ...size }
  );
}
