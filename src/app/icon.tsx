import { ImageResponse } from "next/og";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "white", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: 2 }}>
          <div style={{ width: 8, height: 8, background: "#22d3ee", borderRadius: 2 }} />
          <div style={{ width: 8, height: 8, background: "#e94e8f", borderRadius: 2 }} />
          <div style={{ width: 8, height: 8, background: "#a56cc1", borderRadius: 2 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
