import { ImageResponse } from "next/og"

import { site } from "@/content/site"

export const alt = `${site.name}: ${site.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 96,
        backgroundColor: "#FBF8F1",
        backgroundImage:
          "linear-gradient(#ECE6D8 1px, transparent 1px), linear-gradient(90deg, #ECE6D8 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        color: "#1F2430",
      }}
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#E8693F"
        strokeWidth="4.5"
        strokeLinecap="round"
      >
        <path d="M6 11.5c6.5-.9 13.5-1.2 20-.4" />
        <path d="M8 21.2c5.5-.6 11-.7 17.5.3" />
      </svg>
      <div style={{ fontSize: 96, fontWeight: 700, marginTop: 24 }}>
        Equal Math
      </div>
      <div style={{ fontSize: 44, color: "#5B6170", marginTop: 12 }}>
        Free math tutoring for all, by high school students in Oakland
      </div>
    </div>,
    size,
  )
}
