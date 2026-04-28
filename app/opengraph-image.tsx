import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(165deg, #071127 0%, #0b1f43 55%, #10264d 100%)",
          color: "#f1e7cf",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#d4ad5e",
          }}
        >
          LawLead
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", fontSize: 60, lineHeight: 1.1 }}>
            Smart Leads for Family Law Firms
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#d9e1ef" }}>
            Organized intake. Better lead quality. Faster WhatsApp response.
          </div>
        </div>
      </div>
    ),
    size
  );
}
