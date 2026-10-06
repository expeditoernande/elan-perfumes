import { ImageResponse } from "next/og";
import { brand } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ÉLAN Perfumes — fragrâncias autorais em pequenos lotes";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#07060b",
          backgroundImage:
            "radial-gradient(circle at 50% -10%, rgba(199,162,90,0.35) 0%, rgba(7,6,11,0) 60%)",
          padding: "72px 80px",
          color: "#f6e9c8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 999,
              border: "2px solid #c7a25a",
              display: "flex",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: 12,
              color: "#ecd9a6",
            }}
          >
            {brand.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Fragrâncias autorais em pequenos lotes
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 32,
              color: "rgba(246,233,200,0.65)",
            }}
          >
            Peça 3 amostras grátis · Entrega em todo o Brasil
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "rgba(246,233,200,0.45)",
          }}
        >
          <div style={{ display: "flex" }}>elanperfumes.com.br</div>
          <div style={{ display: "flex" }}>{brand.city}</div>
        </div>
      </div>
    ),
    size,
  );
}