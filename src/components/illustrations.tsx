import type { SVGProps } from "react";

/**
 * Playful, premium SVG illustrations for the birthday theme.
 * Kept simple, geometric and pastel — no cheap cliparts.
 */
type Props = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 48, ...rest }: Props) {
  return { width: size, height: size, viewBox: "0 0 64 64", fill: "none", ...rest };
}

export const Cloud = (p: Props) => (
  <svg {...base(p)}>
    <path
      d="M14 42c-6 0-10-4-10-9s5-9 10-9c1-6 7-10 13-10 7 0 12 4 13 10 6 0 11 4 11 9s-5 9-11 9H14z"
      fill="white"
      stroke="oklch(0.9 0.06 230)"
      strokeWidth="1.5"
    />
  </svg>
);

export const Balloon = ({ color = "oklch(0.82 0.11 25)", ...p }: Props & { color?: string }) => (
  <svg {...base(p)}>
    <ellipse cx="32" cy="24" rx="16" ry="19" fill={color} />
    <path d="M32 43l-3 4h6l-3-4z" fill={color} />
    <path d="M32 47c-2 4 4 8 0 14" stroke="oklch(0.5 0.06 320)" strokeWidth="1" fill="none" />
    <ellipse cx="26" cy="18" rx="3" ry="4" fill="white" opacity="0.5" />
  </svg>
);

export const Star = ({ color = "oklch(0.94 0.1 95)", ...p }: Props & { color?: string }) => (
  <svg {...base(p)}>
    <path
      d="M32 6l6 18h19l-15 11 6 19-16-12-16 12 6-19-15-11h19z"
      fill={color}
      stroke="oklch(0.7 0.1 60)"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

export const Sparkle = ({ color = "oklch(0.9 0.1 55)", ...p }: Props & { color?: string }) => (
  <svg {...base(p)}>
    <path d="M32 6l4 22 22 4-22 4-4 22-4-22-22-4 22-4z" fill={color} />
  </svg>
);

export const Heart = ({ color = "oklch(0.82 0.11 25)", ...p }: Props & { color?: string }) => (
  <svg {...base(p)}>
    <path
      d="M32 54s-22-12-22-28c0-7 6-12 12-12 4 0 8 2 10 6 2-4 6-6 10-6 6 0 12 5 12 12 0 16-22 28-22 28z"
      fill={color}
    />
  </svg>
);

export const Rainbow = (p: Props) => (
  <svg {...base(p)}>
    {["oklch(0.82 0.11 25)", "oklch(0.9 0.09 55)", "oklch(0.94 0.1 95)", "oklch(0.9 0.07 165)", "oklch(0.9 0.06 230)", "oklch(0.88 0.07 300)"].map(
      (c, i) => (
        <path
          key={c}
          d={`M${4 + i * 3} 50a${28 - i * 3} ${28 - i * 3} 0 0 1 ${(28 - i * 3) * 2} 0`}
          stroke={c}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      ),
    )}
  </svg>
);

export const HotAirBalloon = (p: Props) => (
  <svg {...base(p)}>
    <path d="M32 4c-10 0-18 8-18 18 0 8 6 16 14 18l1 6h6l1-6c8-2 14-10 14-18 0-10-8-18-18-18z" fill="oklch(0.9 0.07 5)" />
    <path d="M14 22c0-10 8-18 18-18v40c-8-2-14-10-14-18z" fill="oklch(0.82 0.11 25)" opacity="0.6" />
    <rect x="26" y="48" width="12" height="10" rx="2" fill="oklch(0.7 0.1 70)" />
    <path d="M26 46l0 4M38 46l0 4M32 46l0 4" stroke="oklch(0.5 0.06 320)" strokeWidth="1" />
  </svg>
);

export const Cupcake = (p: Props) => (
  <svg {...base(p)}>
    <path d="M14 32h36l-4 24H18z" fill="oklch(0.9 0.09 55)" />
    <path d="M14 32h36l-4 24H18z" stroke="oklch(0.7 0.09 40)" strokeWidth="1" fill="none" />
    <path d="M12 32c0-8 8-14 20-14s20 6 20 14v2H12z" fill="oklch(0.9 0.07 5)" />
    <circle cx="32" cy="14" r="4" fill="oklch(0.82 0.11 25)" />
    <circle cx="32" cy="10" r="1.5" fill="oklch(0.94 0.1 95)" />
  </svg>
);

export const Gift = ({ color = "oklch(0.82 0.11 25)", ribbon = "oklch(0.94 0.1 95)", ...p }: Props & { color?: string; ribbon?: string }) => (
  <svg {...base(p)}>
    <rect x="8" y="24" width="48" height="34" rx="3" fill={color} />
    <rect x="28" y="24" width="8" height="34" fill={ribbon} />
    <rect x="8" y="24" width="48" height="6" fill={ribbon} />
    <path d="M22 24c-2-6 2-12 8-12 3 0 3 6 2 12M42 24c2-6-2-12-8-12-3 0-3 6-2 12" stroke={ribbon} strokeWidth="3" fill="none" />
  </svg>
);

export const Teddy = (p: Props) => (
  <svg {...base(p)}>
    <circle cx="16" cy="18" r="7" fill="oklch(0.72 0.08 55)" />
    <circle cx="48" cy="18" r="7" fill="oklch(0.72 0.08 55)" />
    <circle cx="16" cy="18" r="3" fill="oklch(0.9 0.07 5)" />
    <circle cx="48" cy="18" r="3" fill="oklch(0.9 0.07 5)" />
    <circle cx="32" cy="30" r="20" fill="oklch(0.78 0.07 55)" />
    <circle cx="32" cy="34" r="10" fill="oklch(0.9 0.06 55)" />
    <circle cx="26" cy="26" r="2" fill="oklch(0.25 0.05 40)" />
    <circle cx="38" cy="26" r="2" fill="oklch(0.25 0.05 40)" />
    <ellipse cx="32" cy="33" rx="2.5" ry="1.8" fill="oklch(0.25 0.05 40)" />
    <path d="M28 36q4 3 8 0" stroke="oklch(0.25 0.05 40)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </svg>
);

export const Bunny = (p: Props) => (
  <svg {...base(p)}>
    <ellipse cx="22" cy="14" rx="4" ry="10" fill="white" stroke="oklch(0.85 0.05 15)" />
    <ellipse cx="42" cy="14" rx="4" ry="10" fill="white" stroke="oklch(0.85 0.05 15)" />
    <ellipse cx="22" cy="14" rx="1.8" ry="6" fill="oklch(0.9 0.07 5)" />
    <ellipse cx="42" cy="14" rx="1.8" ry="6" fill="oklch(0.9 0.07 5)" />
    <circle cx="32" cy="36" r="18" fill="white" stroke="oklch(0.85 0.05 15)" />
    <circle cx="26" cy="34" r="1.8" fill="oklch(0.25 0.05 40)" />
    <circle cx="38" cy="34" r="1.8" fill="oklch(0.25 0.05 40)" />
    <path d="M31 39l1 1 1-1" stroke="oklch(0.82 0.11 25)" strokeWidth="1.5" fill="oklch(0.82 0.11 25)" />
    <circle cx="24" cy="42" r="2.5" fill="oklch(0.92 0.05 15)" opacity="0.7" />
    <circle cx="40" cy="42" r="2.5" fill="oklch(0.92 0.05 15)" opacity="0.7" />
  </svg>
);

export const Unicorn = (p: Props) => (
  <svg {...base(p)}>
    <circle cx="32" cy="34" r="20" fill="white" stroke="oklch(0.88 0.07 300)" />
    <path d="M32 14l3 8h-6z" fill="oklch(0.94 0.1 95)" stroke="oklch(0.7 0.1 60)" />
    <path d="M20 22c-4-2-8 2-6 6 2-4 6-4 6-6zM44 22c4-2 8 2 6 6-2-4-6-4-6-6z" fill="oklch(0.88 0.07 300)" />
    <circle cx="26" cy="34" r="2" fill="oklch(0.25 0.05 40)" />
    <circle cx="38" cy="34" r="2" fill="oklch(0.25 0.05 40)" />
    <path d="M28 40q4 3 8 0" stroke="oklch(0.25 0.05 40)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M14 22c2-4 6-6 10-4M50 22c-2-4-6-6-10-4" stroke="oklch(0.9 0.07 5)" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

export const Butterfly = ({ color = "oklch(0.88 0.07 300)", ...p }: Props & { color?: string }) => (
  <svg {...base(p)}>
    <ellipse cx="20" cy="24" rx="14" ry="10" fill={color} />
    <ellipse cx="44" cy="24" rx="14" ry="10" fill={color} />
    <ellipse cx="18" cy="42" rx="10" ry="8" fill={color} opacity="0.85" />
    <ellipse cx="46" cy="42" rx="10" ry="8" fill={color} opacity="0.85" />
    <rect x="30" y="14" width="4" height="38" rx="2" fill="oklch(0.4 0.06 320)" />
    <circle cx="32" cy="12" r="3" fill="oklch(0.4 0.06 320)" />
  </svg>
);

export const PartyHat = (p: Props) => (
  <svg {...base(p)}>
    <path d="M32 6l14 44H18z" fill="oklch(0.82 0.11 25)" />
    <path d="M32 6l14 44H18z" fill="url(#hat-stripes)" opacity="0.5" />
    <defs>
      <pattern id="hat-stripes" width="8" height="8" patternUnits="userSpaceOnUse">
        <path d="M0 0l8 8M-2 6l4 4M6 -2l4 4" stroke="white" strokeWidth="1.5" />
      </pattern>
    </defs>
    <circle cx="32" cy="6" r="4" fill="oklch(0.94 0.1 95)" />
    <ellipse cx="18" cy="50" rx="4" ry="2" fill="oklch(0.88 0.07 300)" />
    <ellipse cx="46" cy="50" rx="4" ry="2" fill="oklch(0.9 0.06 230)" />
  </svg>
);

export const Moon = (p: Props) => (
  <svg {...base(p)}>
    <path d="M40 8a24 24 0 1 0 16 40A20 20 0 0 1 40 8z" fill="oklch(0.94 0.08 95)" />
  </svg>
);

export const Cake = (p: Props) => (
  <svg {...base(p)}>
    <rect x="8" y="34" width="48" height="20" rx="3" fill="oklch(0.9 0.07 5)" />
    <rect x="8" y="34" width="48" height="6" fill="oklch(0.82 0.11 25)" />
    <rect x="12" y="22" width="40" height="14" rx="3" fill="white" stroke="oklch(0.85 0.05 15)" />
    <rect x="30" y="10" width="4" height="12" fill="oklch(0.94 0.1 95)" />
    <path d="M32 4c-2 3 0 5 0 6 0-1 2-3 0-6z" fill="oklch(0.82 0.11 25)" />
    {[16, 24, 32, 40, 48].map((x) => (
      <circle key={x} cx={x} cy="34" r="1.5" fill="oklch(0.82 0.11 25)" />
    ))}
  </svg>
);

export const Icecream = (p: Props) => (
  <svg {...base(p)}>
    <path d="M18 32h28l-14 26z" fill="oklch(0.78 0.09 70)" />
    <circle cx="24" cy="24" r="10" fill="oklch(0.9 0.07 5)" />
    <circle cx="40" cy="24" r="10" fill="oklch(0.88 0.07 300)" />
    <circle cx="32" cy="16" r="10" fill="oklch(0.9 0.06 230)" />
  </svg>
);

export const Candy = ({ color = "oklch(0.9 0.07 5)", ...p }: Props & { color?: string }) => (
  <svg {...base(p)}>
    <circle cx="32" cy="32" r="14" fill={color} />
    <path d="M32 32l-14-8-6 6 12 6zM32 32l14-8 6 6-12 6z" fill={color} />
    <path d="M28 28q4-2 8 0M26 34q6 3 12 0" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);

export const Flower = ({ color = "oklch(0.9 0.07 5)", ...p }: Props & { color?: string }) => (
  <svg {...base(p)}>
    {[0, 72, 144, 216, 288].map((deg) => (
      <ellipse key={deg} cx="32" cy="18" rx="6" ry="10" fill={color} transform={`rotate(${deg} 32 32)`} />
    ))}
    <circle cx="32" cy="32" r="5" fill="oklch(0.94 0.1 95)" />
  </svg>
);

export const Confetti = (p: Props) => (
  <svg {...base(p)}>
    {[
      [10, 12, "oklch(0.82 0.11 25)"],
      [50, 18, "oklch(0.88 0.07 300)"],
      [18, 42, "oklch(0.9 0.06 230)"],
      [44, 44, "oklch(0.9 0.07 165)"],
      [32, 30, "oklch(0.94 0.1 95)"],
      [56, 34, "oklch(0.9 0.07 5)"],
    ].map(([x, y, c], i) => (
      <rect key={i} x={x as number} y={y as number} width="6" height="10" rx="1" fill={c as string} transform={`rotate(${i * 30} ${x} ${y})`} />
    ))}
  </svg>
);

export const Wand = (p: Props) => (
  <svg {...base(p)}>
    <rect x="30" y="26" width="4" height="34" rx="1" fill="oklch(0.6 0.06 320)" transform="rotate(30 32 32)" />
    <path d="M28 4l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" fill="oklch(0.94 0.1 95)" />
  </svg>
);

export const BirthdayGirl = (p: Props) => (
  <svg {...base(p)}>
    <path d="M18 24 C18 40, 46 40, 46 24" fill="oklch(0.25 0.05 40)" />
    <circle cx="32" cy="22" r="10" fill="oklch(0.9 0.05 55)" />
    <path d="M22 22 Q32 12 42 22 Q32 16 22 22" fill="oklch(0.25 0.05 40)" />
    <circle cx="28" cy="22" r="1.5" fill="oklch(0.1 0.02 40)" />
    <circle cx="36" cy="22" r="1.5" fill="oklch(0.1 0.02 40)" />
    <path d="M29 25 Q32 28 35 25" stroke="oklch(0.6 0.1 20)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M24 32 L40 32 L48 60 L16 60 Z" fill="oklch(0.88 0.07 300)" />
    <text x="32" y="50" fontSize="16" fontFamily="sans-serif" fontWeight="bold" fill="white" textAnchor="middle">5</text>
    <path d="M24 32 L16 46" stroke="oklch(0.9 0.05 55)" strokeWidth="3" strokeLinecap="round" />
    <path d="M40 32 L48 46" stroke="oklch(0.9 0.05 55)" strokeWidth="3" strokeLinecap="round" />
  </svg>
);