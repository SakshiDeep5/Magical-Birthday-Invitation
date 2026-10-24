import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";
import { CuteDivider, SparkleField } from "@/components/decorations";
import { invitation } from "@/data/invitation";
import {
  Heart,
  Gift,
  Star,
  Sparkle,
  Balloon,
  Butterfly,
} from "@/components/illustrations";

export function RSVP() {
  const [accepted, setAccepted] = useState(false);

  const onAccept = () => {
    setAccepted(true);
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ffb6d5", "#c8a2ff", "#ffd58a", "#a8e6cf", "#a2d4ff", "#ffe6a7"],
    });
    setTimeout(() => {
      confetti({
        particleCount: 90,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.7 },
      });
      confetti({
        particleCount: 90,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.7 },
      });
    }, 250);
  };

  return (
    <section id="rsvp" className="relative overflow-hidden px-4 sm:px-6 py-24">
      <SparkleField count={20} />

      <div className="relative z-10 mx-auto max-w-2xl">
        <div className="text-center">
          <p className="font-script text-4xl md:text-5xl text-coral">
            {accepted ? "Yay!" : "Say You'll Come"}
          </p>
          <h3 className="mt-2 font-display text-3xl md:text-5xl text-plum">
            {accepted ? "See You Soon" : "RSVP"}
          </h3>
          <CuteDivider label={accepted ? "🎉" : "🎈"} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-gradient-candy p-8 sm:p-12 ring-4 ring-white/80 shadow-pop text-center"
        >
          {/* Corner decorations */}
          <motion.div
            className="absolute -top-3 -left-3"
            animate={{ rotate: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Balloon size={54} color="oklch(0.9 0.07 5)" />
          </motion.div>
          <motion.div
            className="absolute -top-3 -right-3"
            animate={{ rotate: [8, -8, 8] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Balloon size={54} color="oklch(0.88 0.07 300)" />
          </motion.div>
          <motion.span
            className="absolute top-6 left-1/2 -translate-x-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <Sparkle size={22} />
          </motion.span>
          <motion.div
            className="absolute bottom-6 left-6"
            animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Butterfly size={30} color="oklch(0.88 0.07 300)" />
          </motion.div>
          <motion.div
            className="absolute bottom-6 right-6"
            animate={{ x: [0, -8, 0], y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity }}
          >
            <Butterfly size={30} color="oklch(0.9 0.07 5)" />
          </motion.div>

          <AnimatePresence mode="wait">
            {!accepted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Gift illustration */}
                <motion.div
                  className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white/80 ring-4 ring-white/90 shadow-soft-pastel"
                  animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Gift size={72} />
                </motion.div>

                <p className="mt-6 font-script text-3xl sm:text-4xl text-coral">
                  You're Invited, {invitation.guestName}!
                </p>
                <h4 className="mt-2 font-display text-2xl sm:text-3xl text-plum">
                  Will you join {invitation.birthdayGirlName}'s magical day?
                </h4>
                <p className="mx-auto mt-4 max-w-md font-cute text-sm sm:text-base text-plum-soft">
                  {invitation.birthdayDate} · {invitation.birthdayTime}
                  <br />
                  {invitation.venueName}
                </p>

                <motion.button
                  type="button"
                  onClick={onAccept}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative mx-auto mt-8 inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 font-display text-lg text-plum shadow-pop ring-2 ring-babypink"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <Heart size={22} color="oklch(0.82 0.11 25)" />
                    Accept Invitation
                    <Star size={20} />
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-sunrise skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
                </motion.button>

                <p className="mt-4 font-cute text-xs text-plum-soft">
                  Tap to let {invitation.birthdayGirlName} know you'll be there ✨
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="thank-you"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 260 }}
              >
                <motion.div
                  className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white/80 ring-4 ring-white/90 shadow-soft-pastel"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart size={72} color="oklch(0.82 0.11 25)" />
                </motion.div>

                <p className="mt-6 font-script text-4xl text-coral">
                  Thank You, {invitation.guestName}!
                </p>
                <h4 className="mt-2 font-display text-2xl sm:text-3xl text-plum">
                  Your presence will make our day magical ✨
                </h4>
                <p className="mx-auto mt-4 max-w-md font-cute text-base text-plum-soft leading-relaxed">
                  {invitation.birthdayGirlName} is already twirling with excitement to
                  celebrate with you on {invitation.birthdayDate}. See you at {invitation.venueName}!
                </p>

                <div className="mt-8 rounded-full bg-white/60 px-6 py-2 font-cute text-xs font-bold uppercase tracking-[0.3em] text-coral shadow-soft-pastel ring-1 ring-white/70 inline-block">
                  Invitation Accepted 💖
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
