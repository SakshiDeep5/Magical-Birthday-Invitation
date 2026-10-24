import { motion } from "framer-motion";
import { useState } from "react";
import { invitation } from "@/data/invitation";

export function MusicToggle() {
  const [on, setOn] = useState(false);
  return (
    <motion.button
      type="button"
      onClick={() => setOn((v) => !v)}
      aria-label={on ? "Pause music" : "Play music"}
      title={invitation.backgroundMusic}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full bg-gradient-candy shadow-pop ring-2 ring-white/70"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="text-lg md:text-2xl"
        animate={on ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 4, repeat: on ? Infinity : 0, ease: "linear" }}
      >
        {on ? "🎵" : "🔈"}
      </motion.span>
      {on && <span className="absolute inset-0 rounded-full border-2 border-white/70 animate-ping" />}
    </motion.button>
  );
}