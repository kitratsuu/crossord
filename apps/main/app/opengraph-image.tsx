import { ImageResponse } from "next/og";

export const alt = "Crossord — Digital products engineered to perform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#070B17",
          color: "white",
        }}
      >
        <div style={{ fontSize: 36, color: "#6478FF", fontWeight: 700 }}>CROSSORD</div>
        <div style={{ fontSize: 72, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>
          Digital products engineered to perform.
        </div>
        <div style={{ fontSize: 30, marginTop: 28, color: "rgba(255,255,255,0.6)" }}>
          Websites · Apps · Custom Software · AI Solutions
        </div>
      </div>
    ),
    size,
  );
}
