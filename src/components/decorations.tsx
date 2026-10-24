import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { Balloon, Butterfly, Cloud, Sparkle, Star, Heart, Confetti } from "./illustrations";

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

/** Cute divider with a central glyph. */
export function CuteDivider({ label = "✿" }: { label?: string }) {
  return (
    <div className="divider-cute my-8">
      <span className="font-script text-3xl">{label}</span>
    </div>
  );
}

/** Slow-drifting clouds across the top of a container. */
export function FloatingClouds({ count = 3 }: { count?: number }) {
  const mounted = useMounted();
  const clouds = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: 3 + Math.random() * 55,
        size: 60 + Math.random() * 80,
        duration: 40 + Math.random() * 40,
        delay: -Math.random() * 40,
        opacity: 0.5 + Math.random() * 0.4,
      })),
    [count],
  );
  if (!mounted) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {clouds.map((c) => (
        <motion.div
          key={c.id}
          className="absolute"
          style={{ top: `${c.top}%`, opacity: c.opacity }}
          initial={{ x: "-20%" }}
          animate={{ x: "120vw" }}
          transition={{ duration: c.duration, delay: c.delay, repeat: Infinity, ease: "linear" }}
        >
          <Cloud size={c.size} />
        </motion.div>
      ))}
    </div>
  );
}

/** Balloons rising from bottom. */
export function FloatingBalloons({ count = 4 }: { count?: number }) {
  const mounted = useMounted();
  const colors = [
    "oklch(0.9 0.07 5)",
    "oklch(0.88 0.07 300)",
    "oklch(0.9 0.06 230)",
    "oklch(0.9 0.07 165)",
    "oklch(0.94 0.1 95)",
    "oklch(0.82 0.11 25)",
  ];
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 40 + Math.random() * 60,
        duration: 18 + Math.random() * 14,
        delay: -Math.random() * 20,
        color: colors[i % colors.length],
        sway: 15 + Math.random() * 20,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count],
  );
  if (!mounted) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: `${b.left}%`, bottom: -100 }}
          animate={{ y: [-0, -1000], x: [0, b.sway, -b.sway, 0] }}
          transition={{
            y: { duration: b.duration, delay: b.delay, repeat: Infinity, ease: "linear" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Balloon size={b.size} color={b.color} />
        </motion.div>
      ))}
    </div>
  );
}

/** Sparkle stars twinkling in place. */
export function SparkleField({ count = 8 }: { count?: number }) {
  const mounted = useMounted();
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 10 + Math.random() * 18,
        delay: Math.random() * 4,
      })),
    [count],
  );
  if (!mounted) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{ left: `${s.left}%`, top: `${s.top}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 60] }}
          transition={{ duration: 3, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkle size={s.size} />
        </motion.div>
      ))}
    </div>
  );
}

/** Fluttering butterflies drifting around. */
export function FloatingButterflies({ count = 3 }: { count?: number }) {
  const mounted = useMounted();
  const colors = ["oklch(0.88 0.07 300)", "oklch(0.9 0.07 5)", "oklch(0.9 0.06 230)", "oklch(0.94 0.1 95)"];
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        startX: Math.random() * 100,
        startY: 20 + Math.random() * 60,
        size: 30 + Math.random() * 30,
        color: colors[i % colors.length],
        dur: 14 + Math.random() * 12,
        delay: -Math.random() * 10,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count],
  );
  if (!mounted) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: `${b.startX}%`, top: `${b.startY}%` }}
          animate={{
            x: [0, 60, -40, 30, 0],
            y: [0, -30, 20, -40, 0],
            rotate: [-8, 10, -6, 8, -8],
          }}
          transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div animate={{ scaleX: [1, 0.5, 1] }} transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}>
            <Butterfly size={b.size} color={b.color} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

/** Confetti scatter background. */
export function ConfettiRain({ count = 12 }: { count?: number }) {
  const mounted = useMounted();
  const bits = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 14 + Math.random() * 16,
        dur: 8 + Math.random() * 8,
        delay: -Math.random() * 8,
        rot: Math.random() * 360,
      })),
    [count],
  );
  if (!mounted) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bits.map((c) => (
        <motion.div
          key={c.id}
          className="absolute"
          style={{ left: `${c.left}%`, top: -40, rotate: c.rot }}
          animate={{ y: ["0%", "110vh"], rotate: [c.rot, c.rot + 360] }}
          transition={{ duration: c.dur, delay: c.delay, repeat: Infinity, ease: "linear" }}
        >
          <Confetti size={c.size} />
        </motion.div>
      ))}
    </div>
  );
}

/** Placeholder image tile — pastel with rounded corners. */
export function PlaceholderPhoto({
  label,
  className = "",
  aspect = "aspect-[4/5]",
  tint = "candy",
}: {
  label: string;
  className?: string;
  aspect?: string;
  tint?: "candy" | "sunrise" | "sky" | "rainbow";
}) {
  const bg =
    tint === "sunrise"
      ? "bg-gradient-sunrise"
      : tint === "sky"
        ? "bg-gradient-sky"
        : tint === "rainbow"
          ? "bg-gradient-rainbow"
          : "bg-gradient-candy";
  const isImage = label && (label.includes("/") || label.includes("data:image"));
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] ${aspect} ${bg} ring-2 ring-white/70 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.7),transparent_55%)]" />
      {isImage ? (
        <img src={label} alt="" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <span className="font-script text-2xl md:text-3xl text-plum/70 select-none">{label}</span>
        </div>
      )}
      <Heart color="oklch(0.9 0.07 5)" className="absolute -bottom-2 -right-2 opacity-70" size={40} />
    </div>
  );
}

export function Bubble({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass-card rounded-[2rem] shadow-soft-pastel ${className}`}>{children}</div>
  );
}

export function TinyStar({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
      transition={{ duration: 2.5, delay, repeat: Infinity }}
    >
      <Star size={20} />
    </motion.div>
  );
}