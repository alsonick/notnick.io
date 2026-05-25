import { ImageResponse } from "@vercel/og";

import type { NextRequest } from "next/server";

export const config = { runtime: "edge" };

const interRegular = fetch(
  new URL("../../assets/Inter-Regular.ttf", import.meta.url),
).then((res) => res.arrayBuffer());
const interBold = fetch(
  new URL("../../assets/Inter-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());
const interExtraBold = fetch(
  new URL("../../assets/Inter-ExtraBold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

const truncate = (input: string, max: number) => {
  if (input.length <= max) return input;
  return `${input.slice(0, max - 1).trimEnd()}…`;
};

const formatDate = (input: string) => {
  if (!input) return "";
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const title = truncate(searchParams.get("title") || "Nicholas Njoki", 110);
  const description = truncate(searchParams.get("description") || "", 180);
  const tag = searchParams.get("tag") || "";
  const date = formatDate(searchParams.get("date") || "");
  const mins = searchParams.get("mins") || "";

  const [interRegularData, interBoldData, interExtraBoldData] =
    await Promise.all([interRegular, interBold, interExtraBold]);
  const avatarSrc = new URL("/Chibi.jpg", req.url).toString();

  const SCALE = 2;
  const W = 1200 * SCALE;
  const H = 630 * SCALE;
  const s = (n: number) => n * SCALE;

  const meta = [date, mins ? `${mins} min read` : null]
    .filter(Boolean)
    .join("  ·  ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 92% 8%, rgba(48,209,88,0.22), transparent 45%), radial-gradient(circle at 6% 96%, rgba(48,209,88,0.14), transparent 50%), linear-gradient(180deg, #0a0a0a 0%, #050505 100%)",
          padding: `${s(72)}px ${s(80)}px`,
          fontFamily: "Inter",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: s(6),
            display: "flex",
            backgroundImage:
              "linear-gradient(90deg, #30D158 0%, #25A244 50%, transparent 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {tag ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: `${s(10)}px ${s(22)}px`,
                borderRadius: 999,
                backgroundColor: "rgba(148,163,184,0.12)",
                color: "#cbd5e1",
                fontSize: s(24),
                fontWeight: 700,
                letterSpacing: s(1),
              }}
            >
              {tag}
            </div>
          ) : (
            <div />
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#94a3b8",
              fontSize: s(26),
              fontWeight: 700,
              letterSpacing: s(0.5),
            }}
          >
            notnick.io
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: s(24),
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: s(title.length > 60 ? 68 : 86),
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
              color: "#ffffff",
              marginBottom: description ? s(28) : 0,
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                display: "flex",
                fontSize: s(30),
                fontWeight: 400,
                color: "#cbd5e1",
                lineHeight: 1.4,
                letterSpacing: "-0.005em",
              }}
            >
              {description}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: s(28),
            borderTop: `${s(1)}px solid rgba(148,163,184,0.18)`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: s(28),
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- @vercel/og uses Satori, not next/image */}
            <img
              src={avatarSrc}
              width={s(40)}
              height={s(40)}
              alt=""
              style={{
                width: s(40),
                height: s(40),
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: s(14),
                boxShadow: `0 0 0 ${s(2)}px rgba(48,209,88,0.55)`,
              }}
            />
            Nicholas Njoki
          </div>
          {meta ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: s(24),
                fontWeight: 400,
                color: "#94a3b8",
                letterSpacing: s(0.3),
              }}
            >
              {meta}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      width: W,
      height: H,
      fonts: [
        {
          name: "Inter",
          data: interRegularData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: interBoldData,
          style: "normal",
          weight: 700,
        },
        {
          name: "Inter",
          data: interExtraBoldData,
          style: "normal",
          weight: 800,
        },
      ],
      headers: {
        "cache-control":
          "public, immutable, no-transform, max-age=31536000, s-maxage=31536000",
      },
    },
  );
}
