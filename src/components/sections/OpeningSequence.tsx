import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cloud, Gift, Sparkle, Teddy, Balloon, Butterfly } from "@/components/illustrations";
import { SparkleField } from "@/components/decorations";
import { invitation } from "@/data/invitation";

/**
 * Magical opening — refined vertical hierarchy:
 *   Clouds part → Sparkles → Teddy sitting on Gift → Special-day label →
 *   Aarohi (largest) → turns 5! → Welcome Guest → Open Invitation CTA.
 */
export function OpeningSequence({ onEnter }: { onEnter: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 700),   // clouds part
      setTimeout(() => setStage(2), 1600),  // teddy + gift compose
      setTimeout(() => setStage(3), 2500),  // name block
      setTimeout(() => setStage(4), 3300),  // greeting + cta
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-gradient-sky">
      {/* Soft radial glow layered above the sky */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, oklch(0.98 0.04 95 / 0.55), transparent 60%)",
        }}
      />

      <SparkleField count={22} />

      {/* Drifting background clouds */}
      <motion.div
        className="pointer-events-none absolute top-[8%] left-[4%] opacity-70"
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud size={140} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute top-[14%] right-[6%] opacity-60"
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud size={120} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-[10%] left-[8%] opacity-60"
        animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud size={90} />
      </motion.div>

      {/* Floating decorative balloons + butterflies (subtle) */}
      <motion.div
        className="pointer-events-none absolute bottom-[6%] right-[10%] opacity-80"
        animate={{ y: [0, -18, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Balloon size={70} color="oklch(0.9 0.07 5)" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute top-[24%] left-[12%] opacity-80"
        animate={{ y: [0, -14, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Balloon size={60} color="oklch(0.88 0.07 300)" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute top-[38%] right-[14%]"
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 5, 0], rotate: [-6, 6, -6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Butterfly size={38} />
      </motion.div>

      {/* Curtain clouds parting */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 z-20"
        initial={{ x: 0 }}
        animate={{ x: stage >= 1 ? "-70%" : 0 }}
        transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }}
      >
        <Cloud size={520} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-0 top-0 z-20"
        initial={{ x: 0 }}
        animate={{ x: stage >= 1 ? "70%" : 0 }}
        transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }}
      >
        <Cloud size={520} />
      </motion.div>

      {/* Centered content column with tightened rhythm */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-2xl flex-col items-center justify-center px-6 py-10 text-center">
        {/* Teddy on Gift — visual focal point */}
        <AnimatePresence>
          {stage >= 2 && (
            <motion.div
              key="focal"
              initial={{ opacity: 0, y: 40, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
              className="relative"
            >
              {/* Soft radial glow behind teddy */}
              <motion.div
                aria-hidden
                className="absolute left-1/2 top-1/2 -z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.94 0.1 55 / 0.55), transparent 65%)",
                }}
                animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Composed stack: teddy sitting on the gift box */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{ rotate: [-2.5, 2.5, -2.5], scale: [1, 1.02, 1] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 12px 18px oklch(0.6 0.08 320 / 0.28))" }}
                >
                  <Teddy size={150} />
                </motion.div>
                <div className="-mt-4">
                  <Gift size={130} />
                </div>
                {/* Grounding shadow */}
                <motion.div
                  aria-hidden
                  className="mt-1 h-3 w-40 rounded-full bg-plum/25 blur-md"
                  animate={{ scaleX: [1, 0.85, 1], opacity: [0.35, 0.2, 0.35] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Orbiting sparkles */}
              {[0, 1, 2, 3].map((n) => (
                <motion.span
                  key={n}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 12 + n * 2, repeat: Infinity, ease: "linear" }}
                >
                  <span
                    className="absolute block"
                    style={{
                      transform: `translate(${90 + n * 12}px, -${20 + n * 8}px)`,
                    }}
                  >
                    <Sparkle size={16 + (n % 2) * 6} />
                  </span>
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Name block */}
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              key="name"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-6"
            >
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.4em" }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="font-cute text-[11px] md:text-xs font-bold uppercase text-plum-soft"
              >
                A very special day for
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.7, type: "spring", bounce: 0.35 }}
                className="mt-3 font-display text-7xl md:text-9xl leading-[0.9] text-plum drop-shadow-[0_4px_10px_oklch(0.6_0.08_320/0.25)]"
              >
                <span className="animate-rainbow-shimmer">{invitation.birthdayGirlName}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="mt-3 font-script text-5xl md:text-6xl text-coral"
              >
                turns {invitation.birthdayAge}!
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Guest greeting + CTA */}
        <AnimatePresence>
          {stage >= 4 && (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-8 flex flex-col items-center"
            >
              <p className="font-script text-2xl md:text-3xl text-plum">
                Welcome, <span className="text-coral">{invitation.guestName}</span>
              </p>

              <motion.button
                onClick={onEnter}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                className="group relative mt-6 inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-candy px-10 py-4 font-cute text-sm font-semibold uppercase tracking-[0.28em] text-plum ring-2 ring-white/70"
                style={{
                  boxShadow:
                    "0 12px 30px -8px oklch(0.82 0.11 25 / 0.55), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -6px 12px rgba(255,255,255,0.35)",
                }}
              >
                {/* Glossy highlight */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-4 top-1 h-1/2 rounded-full bg-white/50 blur-sm"
                />
                <span className="relative z-10">Open Invitation</span>
                <motion.span
                  className="relative z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkle size={22} />
                </motion.span>
                {/* Shimmer sweep */}
                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/60 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}