import type { Tone } from "@/lib/site";

type BottleArtProps = {
  uid: string;
  tone: Tone;
  className?: string;
};

const tones: Record<Tone, { from: string; to: string; cap: string; liquid: string; label: string }> = {
  ambar: {
    from: "#f0d79a",
    to: "#8d5f1d",
    cap: "#2a2140",
    liquid: "#c98a2c",
    label: "#1a1329",
  },
  iris: {
    from: "#efe6f3",
    to: "#8d7ba3",
    cap: "#241d33",
    liquid: "#b9a6cf",
    label: "#1a1329",
  },
  vetiver: {
    from: "#cbd8c3",
    to: "#3f5340",
    cap: "#1c2419",
    liquid: "#5f7a5c",
    label: "#141a13",
  },
  figo: {
    from: "#d8ecc8",
    to: "#5c8a4a",
    cap: "#1d2a18",
    liquid: "#8fbf6a",
    label: "#141a13",
  },
  salvia: {
    from: "#d7e0d3",
    to: "#6d7f6a",
    cap: "#232a22",
    liquid: "#93a891",
    label: "#141a13",
  },
  baunilha: {
    from: "#f3e2d0",
    to: "#a3703f",
    cap: "#2b1e14",
    liquid: "#d6a05c",
    label: "#1a1329",
  },
};

export function BottleArt({ uid, tone, className }: BottleArtProps) {
  const palette = tones[tone];
  const bodyGradient = `body-${uid}`;
  const shineGradient = `shine-${uid}`;

  return (
    <svg
      viewBox="0 0 200 260"
      role="presentation"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={bodyGradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.from} />
          <stop offset="100%" stopColor={palette.to} />
        </linearGradient>
        <linearGradient id={shineGradient} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <ellipse cx="100" cy="242" rx="62" ry="10" fill="#000" opacity="0.35" />

      <rect x="86" y="14" width="28" height="30" rx="5" fill={palette.cap} />
      <rect x="90" y="6" width="20" height="10" rx="4" fill={palette.cap} opacity="0.8" />
      <rect x="92" y="44" width="16" height="16" rx="3" fill="#d9c79a" opacity="0.85" />

      <path
        d="M74 60h52c14 0 24 12 24 27v108c0 15-12 27-27 27H77c-15 0-27-12-27-27V87c0-15 12-27 26-27Z"
        fill={`url(#${bodyGradient})`}
        opacity="0.92"
      />

      <path
        d="M74 60h52c14 0 24 12 24 27v108c0 15-12 27-27 27H77c-15 0-27-12-27-27V87c0-15 12-27 26-27Z"
        fill={palette.liquid}
        opacity="0.55"
      />

      <path
        d="M74 60h52c14 0 24 12 24 27v108c0 15-12 27-27 27H77c-15 0-27-12-27-27V87c0-15 12-27 26-27Z"
        fill={`url(#${shineGradient})`}
        opacity="0.35"
      />

      <rect
        x="62"
        y="118"
        width="76"
        height="58"
        rx="6"
        fill={palette.label}
        opacity="0.88"
      />
      <rect x="70" y="128" width="60" height="1.5" fill="#dcc07c" opacity="0.7" />
      <rect x="70" y="146" width="42" height="3" rx="1.5" fill="#ecd9a6" opacity="0.85" />
      <rect x="70" y="154" width="26" height="2" rx="1" fill="#ecd9a6" opacity="0.5" />
      <rect x="86" y="164" width="28" height="2" rx="1" fill="#dcc07c" opacity="0.45" />

      <path
        d="M66 92c-6 10-8 24-8 40v70c0 8 2 14 5 18"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}