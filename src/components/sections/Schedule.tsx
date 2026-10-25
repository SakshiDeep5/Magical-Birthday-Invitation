import { useState, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { invitation } from "@/data/invitation";
import { SparkleField, FloatingButterflies } from "@/components/decorations";
import {
  Teddy,
  Unicorn,
  Wand,
  Gift,
  Cake,
  Star,
  Sparkle,
  Balloon,
  Rainbow,
  Flower,
  Butterfly,
  Cloud,
  Confetti,
} from "@/components/illustrations";
import scheduleTeddy from "@/Assets/schedule-teddy.png";
import scheduleKitten from "@/Assets/schedule-kitten.png";

/* ─── Types ─────────────────────────────────────────────── */
type StopMeta = {
  emoji: string;
  Illustration: (p: { size?: number }) => ReactElement;
  color: string;
  bgGradient: string;
  playful: string;
  highlight?: string;
};

/* ─── Per-stop metadata ──────────────────────────────────── */
const STOP_META: StopMeta[] = [
  {
    emoji: "🐻",
    Illustration: ({ size = 64 }) => (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <Teddy size={size * 0.82} />
        <div className="absolute -top-3 -right-3"><Balloon size={size * 0.45} color="#f9b8c7" /></div>
        <div className="absolute -top-2 -left-3"><Balloon size={size * 0.35} color="#c9b8f9" /></div>
      </div>
    ),
    color: "#f9b8c7",
    bgGradient: "linear-gradient(135deg,#fde9f4,#fce4ec)",
    playful: "Let's begin with hugs, smiles and magical surprises!",
  },
  {
    emoji: "🌈",
    Illustration: ({ size = 64 }) => (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <Unicorn size={size * 0.85} />
        <div className="absolute -top-6 left-1/2 -translate-x-1/2"><Rainbow size={size * 0.7} /></div>
        <div className="absolute bottom-0 -right-2"><Star size={size * 0.3} color="#ffe566" /></div>
      </div>
    ),
    color: "#c3d7fb",
    bgGradient: "linear-gradient(135deg,#e8f4ff,#d8ecff)",
    playful: "March with fairies through a world of sparkle!",
  },
  {
    emoji: "🎁",
    Illustration: ({ size = 64 }) => (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <Gift size={size * 0.72} color="#f9c8e0" ribbon="#ffe566" />
        <div className="absolute -top-2 -left-2 rotate-12"><Wand size={size * 0.45} /></div>
        <div className="absolute -bottom-1 -right-2"><Confetti size={size * 0.4} /></div>
      </div>
    ),
    color: "#ffd180",
    bgGradient: "linear-gradient(135deg,#fff3e0,#ffe8cc)",
    playful: "Play, laugh and discover hidden treasures!",
  },
  {
    emoji: "🎨",
    Illustration: ({ size = 64 }) => (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <Flower size={size * 0.78} color="#ffe566" />
        <div className="absolute -top-3 -right-2 -rotate-12"><Butterfly size={size * 0.42} color="#c9b8f9" /></div>
        <div className="absolute -bottom-2 -left-2"><Wand size={size * 0.42} /></div>
      </div>
    ),
    color: "#d8b4fe",
    bgGradient: "linear-gradient(135deg,#f3e8ff,#ede0ff)",
    playful: "Create magical masterpieces together.",
  },
  {
    emoji: "🎂",
    Illustration: ({ size = 64 }) => (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <Cake size={size * 0.88} />
        <div className="absolute -top-4 -right-1"><Sparkle size={size * 0.4} color="#ffe566" /></div>
        <div className="absolute -bottom-1 -left-2"><Star size={size * 0.3} color="#86efac" /></div>
      </div>
    ),
    color: "#f9b8c7",
    bgGradient: "linear-gradient(135deg,#fde9f4,#ffd6e7)",
    playful: "Make a magical wish before blowing the candles.",
    highlight: "sparkly candles",
  },
  {
    emoji: "🎉",
    Illustration: ({ size = 64 }) => (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <Gift size={size * 0.7} />
        <div className="absolute -top-7 left-1/2 -translate-x-1/2"><Balloon size={size * 0.6} color="#f9b8c7" /></div>
        <div className="absolute bottom-0 -right-2"><Sparkle size={size * 0.3} color="#ffe566" /></div>
      </div>
    ),
    color: "#86efac",
    bgGradient: "linear-gradient(135deg,#dcfce7,#c4f0d4)",
    playful: "A tiny surprise before saying goodbye.",
  },
];

/**
 * Trail stop Y positions as percentages of the map container height (0-100).
 * Left stops (even) are anchored from the left; right stops (odd) from the right.
 * The SVG viewBox "0 0 100 100" with preserveAspectRatio="none" lets us use
 * the same percentage-based coordinates for both the HTML stops and the SVG path.
 */
const STOP_Y = [9, 25, 41, 57, 73, 89]; // % of container height

// Approximate bubble CENTER positions in the "0 0 100 100" SVG viewBox
// Left stops anchor from left: center ≈ 5% (left edge) + ~3.5% (half of ~64px bubble on ~460px container)
// Right stops anchor from right: center ≈ 95% - 3.5%
const SVG_CX_LEFT = 10;   // matches left stops
const SVG_CX_RIGHT = 90;  // matches right stops

const trailD = (() => {
  const pts = STOP_Y.map((y, i) => ({ x: i % 2 === 0 ? SVG_CX_LEFT : SVG_CX_RIGHT, y }));
  const d: string[] = [`M ${pts[0].x} ${pts[0].y}`];
  for (let i = 1; i < pts.length; i++) {
    const { x, y } = pts[i];
    d.push(`C 50 ${pts[i - 1].y}, 50 ${y}, ${x} ${y}`);
  }
  return d.join(" ");
})();

/* ═══════════════════════════════════════════════════════════
   Main exported section
═══════════════════════════════════════════════════════════ */
export function Schedule() {
  const stops = invitation.schedule.slice(0, 6);
  const [active, setActive] = useState(0);

  return (
    <section id="schedule" className="relative overflow-hidden px-4 sm:px-6 py-20">
      <SparkleField count={28} />
      <FloatingButterflies count={4} />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ── Header with flanking character decorations ── */}
        <div className="relative text-center mb-10">

          {/* Teddy — top left of header */}
          <motion.div
            className="pointer-events-none absolute -left-4 sm:left-0 -top-6 hidden md:block"
            animate={{ y: [0, -10, 0], rotate: [-3, 2, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 130, zIndex: 5 }}
          >
            <img src={scheduleTeddy} alt="" style={{ width: "100%", filter: "drop-shadow(0 6px 16px rgba(200,120,160,0.35))" }} />
          </motion.div>

          {/* Kitten + rainbow — top right of header */}
          <motion.div
            className="pointer-events-none absolute -right-4 sm:right-0 -top-4 hidden md:block"
            animate={{ y: [0, -8, 0], rotate: [2, -3, 2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 120, zIndex: 5 }}
          >
            <img src={scheduleKitten} alt="" style={{ width: "100%", filter: "drop-shadow(0 6px 16px rgba(200,120,160,0.3))" }} />
          </motion.div>

          {/* Decorative butterflies around header */}
          {[
            { top: -8,  left: "15%", c: "#c9b8f9", rot: -15 },
            { top: 12,  left: "28%", c: "#f9b8c7", rot: 10  },
            { top: -12, left: "72%", c: "#ffe566", rot: 20  },
            { top: 8,   left: "84%", c: "#c9b8f9", rot: -10 },
          ].map((d, i) => (
            <motion.div
              key={i}
              className="pointer-events-none absolute hidden sm:block"
              style={{ top: d.top, left: d.left, rotate: `${d.rot}deg` }}
              animate={{ y: [0, -6, 0], rotate: [`${d.rot}deg`, `${d.rot + 12}deg`, `${d.rot}deg`] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Butterfly size={20} color={d.c} />
            </motion.div>
          ))}

          <p className="font-script text-4xl md:text-5xl" style={{ color: "#c97ba8" }}>
            Magical Adventure
          </p>
          <div className="flex items-center justify-center gap-2 my-1">
            {["#f9b8c7", "#ffe566", "#c9b8f9", "#ffe566", "#f9b8c7"].map((c, i) => (
              <span key={i} style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: c }} />
            ))}
          </div>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl" style={{ color: "#6b3f6f" }}>
            {invitation.birthdayGirlName}&apos;s Fairy Trail
          </h3>
          <div className="flex items-center justify-center gap-3 my-4">
            <div style={{ height: 2, width: 48, background: "linear-gradient(90deg,transparent,#f9b8c7)", borderRadius: 999 }} />
            <span className="text-2xl">🎀</span>
            <div style={{ height: 2, width: 48, background: "linear-gradient(90deg,#f9b8c7,transparent)", borderRadius: 999 }} />
          </div>
          <p className="mx-auto max-w-md font-cute text-sm sm:text-base leading-relaxed" style={{ color: "#7a5580" }}>
            Follow the glowing trail through a magical land.<br />
            Every stop is a miniature world waiting to be explored!
          </p>
        </div>

        {/* ── Two-column layout with peeking teddy between them ── */}
        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">

          {/* Peeking teddy overlapping between the two panels */}
          <motion.div
            className="pointer-events-none absolute hidden lg:block"
            style={{
              left: "calc(56% - 52px)",
              top: "30%",
              width: 104,
              zIndex: 30,
              filter: "drop-shadow(0 8px 20px rgba(200,120,160,0.4))",
            }}
            animate={{ y: [0, -10, 0], rotate: [-2, 3, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={scheduleTeddy} alt="" style={{ width: "100%" }} />
          </motion.div>

          <TrailMap stops={stops} active={active} onSelect={setActive} />

          {/* Detail card — sticky on desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <DetailCard stop={stops[active]} meta={STOP_META[active]} index={active} total={stops.length} />
            </div>
          </div>
        </div>

        {/* Detail card below map on mobile */}
        <div className="mt-6 lg:hidden">
          <DetailCard stop={stops[active]} meta={STOP_META[active]} index={active} total={stops.length} />
        </div>

        {/* ── Tip bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 mx-auto max-w-2xl flex items-center gap-3 rounded-full px-6 py-3 text-sm font-cute"
          style={{
            background: "linear-gradient(90deg,#fde9f4,#fce4ec,#fde9f4)",
            border: "2px solid #f9b8c7",
            color: "#7a5580",
          }}
        >
          <span className="text-xl shrink-0">🐻</span>
          <span>
            <span style={{ color: "#c97ba8", fontWeight: 700 }}>Tip:</span>
            {" "}Click on any stop on the trail to see its magical details! 🐾 🐾
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   TrailMap — left panel
═══════════════════════════════════════════════════════════ */
function TrailMap({
  stops,
  active,
  onSelect,
}: {
  stops: typeof invitation.schedule;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div
      style={{
        borderRadius: "2.5rem",
        background: "linear-gradient(160deg,#fde9f4 0%,#fce8f5 40%,#f8e4f7 100%)",
        border: "6px solid rgba(255,255,255,0.9)",
        boxShadow: "0 12px 40px -10px rgba(200,120,160,0.25)",
        padding: "1.5rem 1.25rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <MapScenery />

      {/* Stops + SVG trail container */}
      <div style={{ position: "relative", minHeight: "44rem" }}>

        {/* SVG trail — uses viewBox "0 0 100 100" + preserveAspectRatio none
            so every (x,y) in viewBox maps exactly to (x%, y%) of this div */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <defs>
            <filter id="trailGlowSched" x="-50%" y="-10%" width="200%" height="120%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Soft coloured glow */}
          <path
            d={trailD}
            stroke="#f9b8c7"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
            filter="url(#trailGlowSched)"
            vectorEffect="non-scaling-stroke"
          />

          {/* White pearl dots */}
          <path
            d={trailD}
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="0.5 5"
            fill="none"
            opacity="0.92"
            vectorEffect="non-scaling-stroke"
          />

          {/* Animated gold sparkles flowing along */}
          <motion.path
            d={trailD}
            stroke="#ffe566"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="0 8"
            fill="none"
            opacity="0.8"
            vectorEffect="non-scaling-stroke"
            animate={{ strokeDashoffset: [8, 0] }}
            transition={{ duration: 1.0, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Stop bubbles — properly anchored so labels never overflow */}
        {stops.map((s, i) => (
          <TrailStop
            key={i}
            yPct={STOP_Y[i]}
            index={i}
            stop={s}
            meta={STOP_META[i]}
            isActive={active === i}
            onClick={() => onSelect(i)}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Individual trail stop — anchored left or right ──── */
function TrailStop({
  yPct, index, stop, meta, isActive, onClick,
}: {
  yPct: number; index: number;
  stop: { time: string; title: string; description: string };
  meta: StopMeta; isActive: boolean; onClick: () => void;
}) {
  const isLeftSide = index % 2 === 0; // 0,2,4 → left; 1,3,5 → right

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, type: "spring", bounce: 0.45 }}
      whileHover={{ scale: 1.08, zIndex: 40 }}
      whileTap={{ scale: 0.93 }}
      style={{
        position: "absolute",
        top: `${yPct}%`,
        transform: "translateY(-50%)",
        zIndex: isActive ? 25 : 15,
        // Anchor: left stops start from left edge; right stops end at right edge
        ...(isLeftSide ? { left: "2%" } : { right: "2%" }),
      }}
      className="focus:outline-none"
      aria-pressed={isActive}
      aria-label={`${stop.title} — ${stop.time}`}
    >
      {/* Row: for left stops — bubble then label; for right stops — label then bubble (via row-reverse) */}
      <motion.div
        className="flex items-center"
        style={{ flexDirection: isLeftSide ? "row" : "row-reverse", gap: "0.6rem" }}
        animate={isActive ? { y: [0, -8, 0] } : { y: [0, -3, 0] }}
        transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* ── Bubble ── */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          {/* Active pulse ring */}
          {isActive && (
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0.1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: "absolute", inset: -10, borderRadius: "50%",
                background: `radial-gradient(circle, ${meta.color}bb, transparent 70%)`,
                pointerEvents: "none",
              }}
            />
          )}
          <div
            style={{
              width: 64, height: 64,
              borderRadius: "50%",
              background: meta.bgGradient,
              border: `4px solid ${isActive ? meta.color : "rgba(255,255,255,0.92)"}`,
              boxShadow: isActive
                ? `0 0 0 3px ${meta.color}55, 0 8px 24px -6px ${meta.color}99`
                : "0 4px 14px -4px rgba(200,120,160,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.3s ease",
              overflow: "hidden",
            }}
          >
            <meta.Illustration size={46} />
          </div>

          {/* Active arrow indicator pointing toward the bubble */}
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                position: "absolute",
                top: "50%", transform: "translateY(-50%)",
                // Arrow points from label side toward bubble
                ...(isLeftSide
                  ? { left: -14, borderRight: `10px solid ${meta.color}`, borderTop: "7px solid transparent", borderBottom: "7px solid transparent" }
                  : { right: -14, borderLeft: `10px solid ${meta.color}`, borderTop: "7px solid transparent", borderBottom: "7px solid transparent" }
                ),
                width: 0, height: 0,
              }}
            />
          )}
        </div>

        {/* ── Label card ── */}
        <div
          style={{
            background: isActive ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)",
            backdropFilter: "blur(12px)",
            borderRadius: "1.25rem",
            padding: "0.4rem 0.9rem",
            border: isActive ? `2px solid ${meta.color}` : "2px solid rgba(255,255,255,0.7)",
            boxShadow: isActive
              ? `0 4px 18px -4px ${meta.color}66`
              : "0 2px 10px -4px rgba(200,120,160,0.18)",
            textAlign: isLeftSide ? "left" : "right",
            minWidth: 108,
            maxWidth: 148,
            transition: "all 0.3s ease",
          }}
        >
          <p
            className="font-script leading-tight"
            style={{ fontSize: "1.05rem", color: "#c97ba8", fontWeight: 700 }}
          >
            {stop.title}
          </p>
          <p
            className="font-cute"
            style={{ fontSize: "0.68rem", color: "#9a6a9a", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            {stop.time}
          </p>
        </div>
      </motion.div>
    </motion.button>
  );
}

/* ─── Map scenery decorations ─────────────────────────────── */
function MapScenery() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Clouds — positioned in the centre/right area to avoid overlapping stops */}
      <motion.div className="absolute top-[4%] left-[44%]" animate={{ x: [0, 12, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}>
        <Cloud size={60} />
      </motion.div>
      <motion.div className="absolute top-[39%] left-[40%]" animate={{ x: [0, -10, 0] }} transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}>
        <Cloud size={48} />
      </motion.div>
      <motion.div className="absolute bottom-[20%] left-[42%]" animate={{ x: [0, 10, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}>
        <Cloud size={44} />
      </motion.div>

      {/* Flowers — in the middle strip */}
      {[
        { t: 14, l: 46, c: "#f9b8c7" },
        { t: 28, l: 52, c: "#ffe566" },
        { t: 48, l: 44, c: "#c9b8f9" },
        { t: 64, l: 56, c: "#f9b8c7" },
        { t: 80, l: 46, c: "#ffe566" },
      ].map((d, i) => (
        <motion.div key={i} className="absolute" style={{ top: `${d.t}%`, left: `${d.l}%` }}
          animate={{ rotate: [-4, 4, -4], y: [0, -4, 0] }}
          transition={{ duration: 4, delay: i * 0.6, repeat: Infinity, ease: "easeInOut" }}>
          <Flower size={24} color={d.c} />
        </motion.div>
      ))}

      {/* Butterflies */}
      {[
        { t: 20, l: 37, c: "#c9b8f9", dx: 1 },
        { t: 52, l: 43, c: "#f9b8c7", dx: -1 },
        { t: 75, l: 38, c: "#ffe566", dx: 1 },
      ].map((d, i) => (
        <motion.div key={i} className="absolute" style={{ top: `${d.t}%`, left: `${d.l}%` }}
          animate={{ x: [0, d.dx * 10, 0], y: [0, -7, 0] }}
          transition={{ duration: 5 + i, delay: i * 0.9, repeat: Infinity, ease: "easeInOut" }}>
          <Butterfly size={20} color={d.c} />
        </motion.div>
      ))}

      {/* Sparkle dots */}
      {[
        { t: 33, l: 48 }, { t: 60, l: 54 }, { t: 16, l: 50 }, { t: 78, l: 46 }, { t: 90, l: 52 },
      ].map((d, i) => (
        <motion.div key={i} className="absolute" style={{ top: `${d.t}%`, left: `${d.l}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, delay: i * 0.7, repeat: Infinity }}>
          <Sparkle size={13} color="#ffe566" />
        </motion.div>
      ))}

      {/* Stars */}
      {[
        { t: 8, l: 55, c: "#f9b8c7" },
        { t: 45, l: 50, c: "#ffe566" },
        { t: 70, l: 53, c: "#c9b8f9" },
      ].map((d, i) => (
        <motion.div key={i} className="absolute" style={{ top: `${d.t}%`, left: `${d.l}%` }}
          animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}>
          <Star size={16} color={d.c} />
        </motion.div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DetailCard — right storybook panel
═══════════════════════════════════════════════════════════ */
function DetailCard({
  stop, meta, index, total,
}: {
  stop: { time: string; title: string; description: string };
  meta: StopMeta;
  index: number;
  total: number;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -16 }}
        transition={{ duration: 0.45, type: "spring", bounce: 0.35 }}
        style={{
          borderRadius: "2.5rem",
          background: "linear-gradient(160deg,#fde9f4 0%,#fce8f5 40%,#f8e4f7 100%)",
          border: "6px solid rgba(255,255,255,0.92)",
          boxShadow: "0 12px 40px -10px rgba(200,120,160,0.3)",
          padding: "2rem 1.75rem 3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dashed inner border */}
        <div
          style={{
            position: "absolute", inset: 10, borderRadius: "2rem",
            border: "2px dashed rgba(249,184,199,0.5)",
            pointerEvents: "none",
          }}
        />

        {/* Top-right star decoration */}
        <motion.div
          style={{ position: "absolute", top: 20, right: 20 }}
          animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Star size={32} color="#ffe566" />
        </motion.div>

        {/* Bottom-left sparkle */}
        <motion.div
          style={{ position: "absolute", bottom: 60, left: 20 }}
          animate={{ rotate: [-10, 10, -10], y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkle size={26} color={meta.color} />
        </motion.div>

        {/* ── Large illustration circle ── */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 170, height: 170,
              borderRadius: "50%",
              background: meta.bgGradient,
              border: "6px solid rgba(255,255,255,0.9)",
              boxShadow: `0 0 0 3px ${meta.color}44, 0 10px 36px -8px ${meta.color}99`,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Breathing glow ring */}
            <motion.div
              animate={{ opacity: [0.4, 0.85, 0.4], scale: [1, 1.05, 1] }}
              transition={{ duration: 2.8, repeat: Infinity }}
              style={{
                position: "absolute", inset: -8, borderRadius: "50%",
                border: `3px solid ${meta.color}66`,
                pointerEvents: "none",
              }}
            />
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <meta.Illustration size={120} />
            </motion.div>
          </div>
        </div>

        {/* ── Bunting flags ── */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "0.75rem", gap: "2px" }} aria-hidden>
          {["#f9b8c7", "#c9b8f9", "#ffe566", "#86efac", "#c3d7fb", "#f9b8c7", "#c9b8f9", "#ffe566"].map((c, i) => (
            <svg key={i} width="20" height="24" viewBox="0 0 20 24">
              <path d="M2 0 L18 0 L10 24 Z" fill={c} opacity="0.9" />
            </svg>
          ))}
        </div>

        {/* ── Title with ✦ decoration ── */}
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <h4 className="font-script" style={{ fontSize: "2.4rem", color: "#c97ba8", lineHeight: 1.1 }}>
            ✦ {stop.title}
          </h4>
        </div>

        {/* ── Badge row ── */}
        <div style={{ marginTop: "0.75rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem" }}>
          <span className="font-cute" style={{
            background: "rgba(255,255,255,0.78)",
            border: `2px solid ${meta.color}`,
            borderRadius: 999, padding: "0.3rem 1.1rem",
            fontSize: "0.72rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#9a6a9a",
          }}>
            Stop {index + 1} of {total}
          </span>
          <span className="font-cute" style={{
            background: "rgba(255,255,255,0.78)",
            border: "2px solid rgba(249,184,199,0.7)",
            borderRadius: 999, padding: "0.3rem 1.1rem",
            fontSize: "0.72rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#c97ba8",
          }}>
            {stop.time}
          </span>
        </div>

        {/* ── Playful quote — large bold italic ── */}
        <div style={{ marginTop: "1.25rem", textAlign: "center", padding: "0 0.5rem" }}>
          <p className="font-display" style={{
            fontSize: "1.25rem",
            color: "#5a3060",
            lineHeight: 1.5,
            fontWeight: 700,
            fontStyle: "italic",
          }}>
            &ldquo;{meta.playful}&rdquo;
          </p>
        </div>

        {/* Divider */}
        <div style={{
          margin: "1rem auto",
          height: 2, maxWidth: 220,
          background: `linear-gradient(90deg,transparent,${meta.color},transparent)`,
          borderRadius: 999,
        }} />

        {/* ── Description with optional highlighted keyword ── */}
        <div style={{ textAlign: "center", padding: "0 0.5rem" }}>
          {meta.highlight ? (
            <p className="font-cute text-sm leading-relaxed" style={{ color: "#7a5580" }}>
              <span style={{ fontSize: "1rem", marginRight: "0.3rem" }}>⭐</span>
              {stop.description.split(meta.highlight).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span style={{ color: "#c97ba8", fontWeight: 700 }}>{meta.highlight}</span>
                  )}
                </span>
              ))}
            </p>
          ) : (
            <p className="font-cute text-sm leading-relaxed" style={{ color: "#7a5580" }}>
              <span style={{ fontSize: "1rem", marginRight: "0.3rem" }}>⭐</span>
              {stop.description}
            </p>
          )}
        </div>

        {/* Kitten — sits at the bottom-right outside the card content */}
        <motion.div
          className="absolute hidden sm:block"
          style={{ bottom: -4, right: -4, width: 84, pointerEvents: "none", zIndex: 20 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={scheduleKitten}
            alt=""
            style={{ width: "100%", filter: "drop-shadow(0 4px 10px rgba(200,120,160,0.3))" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
