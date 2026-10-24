import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import confetti from "canvas-confetti";
import { invitation } from "@/data/invitation";
import { CuteDivider } from "@/components/decorations";
import { Balloon } from "@/components/illustrations";

function useCountdown(target: string) {
  const targetTime = useMemo(() => {
    const t = new Date(target).getTime();
    return isNaN(t) ? Date.now() + 1000 * 60 * 60 * 24 * 45 : t;
  }, [target]);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetTime - now);
  return {
    finished: diff === 0,
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const BALLOON_COLORS = [
  "oklch(0.9 0.07 5)",
  "oklch(0.88 0.07 300)",
  "oklch(0.9 0.06 230)",
  "oklch(0.9 0.07 165)",
];

function BalloonUnit({ value, label, color }: { value: number; label: string; color: string }) {
  const display = value.toString().padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Balloon size={110} color={color} />
        <div className="absolute inset-0 flex items-center justify-center pb-6">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={display}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display text-3xl font-bold text-white drop-shadow-md"
            >
              {display}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <p className="mt-2 font-cute text-xs font-semibold uppercase tracking-[0.25em] text-plum-soft">
        {label}
      </p>
    </div>
  );
}

export function Countdown() {
  const { days, hours, minutes, seconds, finished } = useCountdown(invitation.birthdayDate);

  useEffect(() => {
    if (!finished) return;
    const end = Date.now() + 2500;
    const frame = () => {
      confetti({
        particleCount: 4,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ffb6d5", "#c8a2ff", "#ffd58a", "#a8e6cf", "#a2d4ff"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, [finished]);

  return (
    <section id="countdown" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-script text-4xl md:text-5xl text-coral">Counting Down</p>
        <h3 className="mt-2 font-display text-3xl md:text-5xl text-plum">To the Big Day!</h3>
        <CuteDivider label="⭐" />

        {finished ? (
          <motion.h3
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="font-display text-5xl md:text-7xl text-candy-gradient"
          >
            Happy Birthday, {invitation.birthdayGirlName}! 🎉
          </motion.h3>
        ) : (
          <div className="mt-10 flex flex-wrap items-end justify-center gap-4 md:gap-10">
            <BalloonUnit value={days} label="Days" color={BALLOON_COLORS[0]} />
            <BalloonUnit value={hours} label="Hours" color={BALLOON_COLORS[1]} />
            <BalloonUnit value={minutes} label="Minutes" color={BALLOON_COLORS[2]} />
            <BalloonUnit value={seconds} label="Seconds" color={BALLOON_COLORS[3]} />
          </div>
        )}
        <p className="mt-8 font-script text-2xl text-plum-soft">
          Until we celebrate on {invitation.birthdayDate}
        </p>
      </div>
    </section>
  );
}