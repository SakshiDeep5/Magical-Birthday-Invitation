import { useState, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { invitation } from "@/data/invitation";
import { CuteDivider, SparkleField, FloatingButterflies } from "@/components/decorations";
import {
  Teddy,
  Unicorn,
  Wand,
  Gift,
  Cake,
  Star,
  Sparkle,
  Balloon,
  Cupcake,
  Rainbow,
  HotAirBalloon,
  Flower,
  Butterfly,
  Confetti,
  Cloud,
} from "@/components/illustrations";

type StopMeta = {
  emoji: string;
  Illustration: (p: { size?: number }) => ReactElement;
  tint: string;
  playful: string;
};

const STOP_META: StopMeta[] = [
  {
    emoji: "🏰",
    Illustration: ({ size = 64 }) => (
      <div className="relative flex items-center justify-center w-full h-full" style={{ width: size, height: size }}>
        <Teddy size={size * 0.8} />
        <div className="absolute -top-4 -right-4">
          <Balloon size={size * 0.5} color="oklch(0.9 0.07 5)" />
        </div>
        <div className="absolute -top-2 -left-3">
          <Balloon size={size * 0.4} color="oklch(0.88 0.07 300)" />
        </div>
      </div>
    ),
    tint: "bg-gradient-candy",
    playful: "Let's begin with hugs, smiles and magical surprises!",
  },
  {
    emoji: "🦄",
    Illustration: ({ size = 64 }) => (
      <div className="relative flex items-center justify-center w-full h-full" style={{ width: size, height: size }}>
        <Unicorn size={size * 0.85} />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <Rainbow size={size * 0.8} />
        </div>
        <div className="absolute bottom-0 -right-2">
          <Star size={size * 0.3} color="oklch(0.94 0.1 95)" />
        </div>
      </div>
    ),
    tint: "bg-gradient-sky",
    playful: "March with fairies through a world of sparkle!",
  },
  {
    emoji: "🎲",
    Illustration: ({ size = 64 }) => (
      <div className="relative flex items-center justify-center w-full h-full" style={{ width: size, height: size }}>
        <Gift size={size * 0.7} color="oklch(0.9 0.07 165)" ribbon="oklch(0.94 0.1 95)" />
        <div className="absolute -top-2 -left-3 rotate-12">
          <Wand size={size * 0.5} />
        </div>
        <div className="absolute -bottom-2 -right-3">
          <Confetti size={size * 0.5} />
        </div>
      </div>
    ),
    tint: "bg-gradient-sunrise",
    playful: "Play, laugh and discover hidden treasures!",
  },
  {
    emoji: "🎨",
    Illustration: ({ size = 64 }) => (
      <div className="relative flex items-center justify-center w-full h-full" style={{ width: size, height: size }}>
        <Flower size={size * 0.7} color="oklch(0.94 0.1 95)" />
        <div className="absolute -top-3 -right-2 -rotate-12">
          <Butterfly size={size * 0.4} color="oklch(0.88 0.07 300)" />
        </div>
        <div className="absolute -bottom-2 -left-2">
          <Wand size={size * 0.4} />
        </div>
      </div>
    ),
    tint: "bg-gradient-candy",
    playful: "Create magical masterpieces together.",
  },
  {
    emoji: "🎂",
    Illustration: ({ size = 64 }) => (
      <div className="relative flex items-center justify-center w-full h-full" style={{ width: size, height: size }}>
        <Cake size={size * 0.85} />
        <div className="absolute -top-4 -right-1">
          <Sparkle size={size * 0.4} color="oklch(0.94 0.1 95)" />
        </div>
        <div className="absolute -bottom-1 -left-2">
          <Star size={size * 0.3} />
        </div>
      </div>
    ),
    tint: "bg-gradient-sunrise",
    playful: "Make a magical wish before blowing the candles.",
  },
  {
    emoji: "🎁",
    Illustration: ({ size = 64 }) => (
      <div className="relative flex items-center justify-center w-full h-full" style={{ width: size, height: size }}>
        <Gift size={size * 0.7} />
        <div className="absolute -top-7 left-1/2 -translate-x-1/2">
          <HotAirBalloon size={size * 0.7} />
        </div>
        <div className="absolute bottom-0 -right-2">
          <Sparkle size={size * 0.3} />
        </div>
      </div>
    ),
    tint: "bg-gradient-sky",
    playful: "A tiny surprise before saying goodbye.",
  },
];

// Curvy magical path layout
const STOP_POSITIONS = [
  { x: 20, y: 12 },
  { x: 80, y: 28 },
  { x: 25, y: 45 },
  { x: 75, y: 62 },
  { x: 20, y: 78 },
  { x: 80, y: 92 },
];

const PATH_D =
  "M20 12 C 60 12, 60 28, 80 28 S 40 45, 25 45 S 60 62, 75 62 S 40 78, 20 78 S 60 92, 80 92";

export function Schedule() {
  const stops = invitation.schedule.slice(0, 6);
  const [active, setActive] = useState(0);
  const activeStop = stops[active];
  const activeMeta = STOP_META[active];

  return (
    <section id="schedule" className="relative overflow-hidden px-4 sm:px-6 py-24">
      <SparkleField count={30} />
      <FloatingButterflies count={6} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-script text-4xl md:text-5xl text-coral">Magical Adventure</p>
          <h3 className="mt-2 font-display text-3xl md:text-5xl text-plum">
            {invitation.birthdayGirlName}'s Fairy Trail
          </h3>
          <CuteDivider label="🗺️" />
          <p className="mx-auto max-w-xl font-cute text-sm text-plum-soft">
            Follow the glowing trail through a magical land. Every stop is a miniature world waiting to be explored!
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <MagicalMap stops={stops} active={active} onSelect={setActive} />
          
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <DetailStorybook stop={activeStop} meta={activeMeta} index={active} />
            </div>
          </div>
        </div>

        {/* Mobile bottom-sheet style detail panel */}
        <div className="mt-6 lg:hidden">
          <DetailStorybook stop={activeStop} meta={activeMeta} index={active} />
        </div>
      </div>
    </section>
  );
}

function MagicalMap({
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
      className="relative overflow-hidden rounded-[3rem] bg-[#fdfafb] ring-[6px] ring-white/90 shadow-pop p-4 sm:p-6"
      style={{ minHeight: "42rem" }}
    >
      {/* Magical forest ground gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#e8f7ec]/60 via-[#fde9f4]/40 to-[#eaf5ff]/50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,245,210,0.6),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,200,230,0.4),transparent_50%)]" />

      <MapScenery />
      <MapDust />

      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="fairyGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.11 25)" />
            <stop offset="50%" stopColor="oklch(0.8 0.1 300)" />
            <stop offset="100%" stopColor="oklch(0.85 0.1 165)" />
          </linearGradient>
          <filter id="fairyBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>
        
        {/* Glow behind trail */}
        <path
          d={PATH_D}
          stroke="url(#fairyGlow)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          filter="url(#fairyBlur)"
          opacity="0.9"
          vectorEffect="non-scaling-stroke"
        />
        
        {/* Animated glowing dots */}
        <motion.path
          d={PATH_D}
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="0 15"
          fill="none"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="relative" style={{ height: "40rem" }}>
        {stops.map((s, i) => {
          const pos = STOP_POSITIONS[i];
          const meta = STOP_META[i];
          const isActive = i === active;
          return (
            <MapStop
              key={i}
              x={pos.x}
              y={pos.y}
              index={i}
              stop={s}
              meta={meta}
              isActive={isActive}
              onClick={() => onSelect(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

function MapScenery() {
  const decorations = [
    { top: 5, left: 50, scale: 1, delay: 0 },
    { top: 18, left: 10, scale: 0.7, delay: 1 },
    { top: 35, left: 85, scale: 0.9, delay: 0.5 },
    { top: 52, left: 12, scale: 0.8, delay: 1.5 },
    { top: 70, left: 85, scale: 1, delay: 0.8 },
    { top: 88, left: 15, scale: 0.85, delay: 1.2 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Decorative clouds */}
      <motion.div className="absolute top-[8%] left-[20%]" animate={{ x: [0, 15, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}>
        <Cloud size={80} />
      </motion.div>
      <motion.div className="absolute top-[40%] right-[10%]" animate={{ x: [0, -20, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}>
        <Cloud size={60} />
      </motion.div>
      <motion.div className="absolute bottom-[20%] left-[5%]" animate={{ x: [0, 10, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}>
        <Cloud size={70} />
      </motion.div>

      {/* Decorative flowers/bushes scattered around */}
      {decorations.map((d, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: `${d.top}%`, left: `${d.left}%`, transform: `scale(${d.scale})` }}
          animate={{ rotate: [-3, 3, -3], y: [0, -3, 0] }}
          transition={{ duration: 4, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Flower size={30} color={i % 2 === 0 ? "oklch(0.9 0.07 5)" : "oklch(0.88 0.07 300)"} />
        </motion.div>
      ))}
    </div>
  );
}

function MapStop({
  x,
  y,
  index,
  stop,
  meta,
  isActive,
  onClick,
}: {
  x: number;
  y: number;
  index: number;
  stop: { time: string; title: string; description: string };
  meta: StopMeta;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.5 }}
      whileHover={{ scale: 1.15, y: -6, zIndex: 20 }}
      whileTap={{ scale: 0.95 }}
      className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
      style={{ left: `${x}%`, top: `${y}%`, zIndex: isActive ? 20 : 10 }}
      aria-pressed={isActive}
      aria-label={`${stop.title} — ${stop.time}`}
    >
      <motion.div
        animate={isActive ? { y: [0, -10, 0] } : { y: [0, -4, 0] }}
        transition={{ duration: 3 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex flex-col items-center"
      >
        {/* Glow effect behind active stop */}
        {isActive && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 -m-8 rounded-full bg-gradient-radial from-[#fff4b3]/60 to-transparent blur-xl pointer-events-none"
          />
        )}

        {/* The miniature scene container */}
        <div
          className={`relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full ${meta.tint} ring-[6px] ${
            isActive ? "ring-white shadow-[0_0_30px_rgba(255,200,230,0.8)] scale-110" : "ring-white/90 shadow-soft-pastel group-hover:ring-white group-hover:shadow-[0_0_20px_rgba(255,200,230,0.5)]"
          } transition-all duration-300`}
        >
          <meta.Illustration size={48} />
          
          {/* Active magical particles */}
          {isActive && (
            <>
              <motion.span
                className="absolute -top-3 -right-3"
                animate={{ rotate: 360, scale: [1, 1.4, 1] }}
                transition={{
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity },
                }}
              >
                <Sparkle size={24} color="oklch(0.94 0.1 95)" />
              </motion.span>
              <motion.span
                className="absolute -bottom-2 -left-3"
                animate={{ rotate: -360, y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star size={20} color="oklch(0.9 0.07 165)" />
              </motion.span>
            </>
          )}
        </div>

        {/* Label */}
        <div
          className={`mt-3 max-w-[11rem] rounded-[1rem] px-3 py-1.5 text-center backdrop-blur-md transition-all duration-300 ${
            isActive 
              ? "bg-white/95 shadow-[0_4px_20px_rgba(200,100,150,0.15)] ring-2 ring-pink-100 scale-105" 
              : "bg-white/80 ring-1 ring-white/60 group-hover:bg-white/90"
          }`}
        >
          <p className="font-script text-[1.1rem] sm:text-xl font-bold text-coral leading-none truncate">
            {stop.title}
          </p>
          <p className="font-cute text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-plum-soft mt-0.5">
            {stop.time}
          </p>
        </div>
      </motion.div>
    </motion.button>
  );
}

function DetailStorybook({
  stop,
  meta,
  index,
}: {
  stop: { time: string; title: string; description: string };
  meta: StopMeta;
  index: number;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="relative overflow-hidden rounded-[3rem] p-8 sm:p-10 bg-white/60 ring-8 ring-white/80 shadow-pop backdrop-blur-md"
      >
        {/* Storybook page decorations */}
        <div className="absolute inset-2 rounded-[2.5rem] border-2 border-dashed border-pink-200/60 pointer-events-none" />
        <div className={`absolute inset-0 opacity-10 ${meta.tint} pointer-events-none`} />

        <motion.span
          className="absolute top-6 right-6"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Sparkle size={32} color="oklch(0.94 0.1 95)" />
        </motion.span>
        
        <motion.span
          className="absolute bottom-6 left-6"
          animate={{ rotate: -360, y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Star size={28} color="oklch(0.9 0.07 165)" />
        </motion.span>

        {/* Large illustration showcase */}
        <div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-[2rem] bg-gradient-to-br from-white to-pink-50 ring-4 ring-white shadow-soft-pastel">
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <meta.Illustration size={100} />
          </motion.div>
        </div>

        {/* Title ribbon */}
        <div className="mt-8 relative z-10 flex justify-center">
          <div className="px-6 py-2 rounded-full bg-white ring-2 ring-pink-100 shadow-soft-pastel inline-block">
            <h4 className="font-script text-3xl sm:text-4xl text-coral text-center">
              {meta.emoji} {stop.title}
            </h4>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <span className="rounded-full bg-gradient-candy px-4 py-1.5 font-cute text-xs font-bold uppercase tracking-[0.2em] text-plum ring-2 ring-white/80 shadow-sm">
            Stop {index + 1} of {invitation.schedule.length}
          </span>
          <span className="rounded-full bg-white px-4 py-1.5 font-cute text-xs font-bold uppercase tracking-[0.2em] text-coral ring-2 ring-pink-100 shadow-sm">
            {stop.time}
          </span>
        </div>

        <div className="mt-6 text-center relative z-10">
          <p className="font-display text-xl sm:text-2xl leading-relaxed text-plum">
            "{meta.playful}"
          </p>
          <div className="mx-auto mt-4 max-w-[18rem] h-0.5 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
          <p className="mt-4 font-cute text-sm sm:text-base text-plum-soft leading-relaxed max-w-sm mx-auto">
            {stop.description}
          </p>
        </div>

      </motion.div>
    </AnimatePresence>
  );
}

function MapDust() {
  const dust = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: (i * 41) % 100,
    top: (i * 67) % 100,
    size: 4 + ((i * 3) % 8),
    delay: (i % 5) * 0.5,
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dust.map((d) => (
        <motion.div
          key={d.id}
          className="absolute"
          style={{ left: `${d.left}%`, top: `${d.top}%` }}
          animate={{ opacity: [0, 0.8, 0], y: [0, -30, -50], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 4 + (d.id % 3), delay: d.delay, repeat: Infinity, ease: "easeOut" }}
        >
          <Sparkle size={d.size} color="oklch(0.94 0.1 95)" />
        </motion.div>
      ))}
    </div>
  );
}
