import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { invitation } from "@/data/invitation";
import { CuteDivider, SparkleField } from "@/components/decorations";
import { Flower, Heart, Butterfly, Star, Sparkle } from "@/components/illustrations";
import { addWish } from "@/hooks/use-wishes";

export function Blessings() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [from] = useState("Guest");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const m = message.trim();
    if (!m) return;
    addWish({ from, message: m });
    setMessage("");
    setSent(true);
    setTimeout(() => setSent(false), 2600);
    if (typeof document !== "undefined") {
      setTimeout(() => {
        document
          .getElementById("wishes")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
    }
  };

  return (
    <section id="blessings" className="relative overflow-hidden px-4 sm:px-6 py-24">
      <SparkleField count={18} />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="font-script text-4xl md:text-5xl text-coral">A Little Wish</p>
        <h3 className="mt-2 font-display text-3xl md:text-5xl text-plum">Blessings &amp; Love</h3>
        <CuteDivider label="💝" />

        {/* ── Blessing Card (fixed preview, no expand) ──── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto mt-10 max-w-2xl rounded-[3rem] bg-gradient-sunrise p-8 sm:p-10 md:p-14 shadow-soft-pastel ring-4 ring-white/70 flex flex-col"
          style={{ height: "24rem" }}
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-3">
            <Flower size={44} />
            <Star size={40} />
            <Flower size={44} color="oklch(0.88 0.07 300)" />
          </div>

          <div className="flex-1 overflow-hidden flex flex-col justify-center">
            <p
              className="font-display text-lg sm:text-xl md:text-2xl leading-relaxed text-plum"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
              }}
            >
              &ldquo;{invitation.blessing}&rdquo;
            </p>
          </div>

          <p className="mt-6 font-script text-2xl md:text-3xl text-coral">{invitation.quote}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Heart size={26} color="oklch(0.82 0.11 25)" />
            <Butterfly size={30} />
            <Heart size={26} color="oklch(0.88 0.07 300)" />
          </div>
        </motion.div>


        {/* ── Send Blessing Form ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto mt-10 max-w-2xl"
        >
          {/* Glowing animated frame behind the card */}
          <motion.div
            className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 opacity-60 blur-md"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          />

          <form
            onSubmit={submit}
            className="relative rounded-[2.5rem] bg-white/70 backdrop-blur-md p-6 sm:p-8 md:p-10 text-left shadow-pop ring-[6px] ring-white/90"
          >
            <p className="text-center font-script text-3xl md:text-4xl text-coral">
              Send Your Blessing
            </p>
            <p className="mt-1 text-center font-cute text-sm text-plum-soft">
              Leave a sweet note for {invitation.birthdayGirlName} — it&apos;ll appear on the Wishes
              Wall below.
            </p>

            <div className="mt-6 grid gap-4">
              <label className="block">
                <span className="font-cute text-xs font-bold uppercase tracking-[0.3em] text-plum-soft">
                  Your Blessing
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={250}
                  required
                  rows={4}
                  placeholder="Write a magical wish for the birthday girl…"
                  className="mt-2 w-full resize-none rounded-2xl border-2 border-white/70 bg-white/80 px-4 py-3 font-cute text-plum placeholder:text-plum-soft/60 outline-none ring-coral/50 focus:ring-4"
                />
                <span className="mt-1 block text-right font-cute text-[11px] text-plum-soft">
                  {message.length}/250
                </span>
              </label>

              <button
                type="submit"
                className="mx-auto mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-candy px-8 py-3 font-display text-lg text-plum shadow-pop ring-2 ring-white/70 transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <Heart size={20} color="oklch(0.82 0.11 25)" />
                Send Blessing
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* ── Thank You Popup ──────────────────────────────── */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", backdropFilter: "blur(12px)" }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="relative flex flex-col items-center justify-center rounded-[2.5rem] bg-white/90 p-10 text-center shadow-pop ring-4 ring-white max-w-sm w-full"
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-candy opacity-20 pointer-events-none" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -top-4 -right-4">
                <Star size={40} />
              </motion.div>
              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <Heart size={64} color="oklch(0.82 0.11 25)" />
              </motion.div>
              <h3 className="relative z-10 mt-4 font-script text-4xl text-plum">Thank You!</h3>
              <p className="relative z-10 mt-2 font-cute text-[15px] font-bold text-plum-soft">Your magical wish is now on the wall ✨</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
