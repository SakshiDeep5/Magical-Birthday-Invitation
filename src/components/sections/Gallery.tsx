import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { invitation } from "@/data/invitation";
import { CuteDivider, PlaceholderPhoto } from "@/components/decorations";

const TAPES = [
  "oklch(0.94 0.1 95)",
  "oklch(0.88 0.07 300)",
  "oklch(0.9 0.07 5)",
  "oklch(0.9 0.06 230)",
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative px-4 sm:px-6 py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-script text-4xl md:text-5xl text-coral">Sweet Memories</p>
          <h3 className="mt-2 font-display text-3xl md:text-5xl text-plum">Our Scrapbook</h3>
          <CuteDivider label="📸" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
          {invitation.gallery.map((img, i) => {
            const rot = (i % 3) - 1;
            return (
              <motion.button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 40, rotate: rot * 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: rot * 2 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
                className="group relative block rounded-[2rem] bg-white p-3 pb-8 shadow-soft-pastel"
              >
                <span
                  className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rounded-sm opacity-80"
                  style={{ background: TAPES[i % TAPES.length] }}
                />
                <PlaceholderPhoto label={img.src} aspect="aspect-[4/5]" tint={i % 4 === 0 ? "sky" : i % 4 === 1 ? "sunrise" : "candy"} />
                <p className="mt-3 text-center font-script text-xl text-plum">{img.caption}</p>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-plum/70 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotate: -6 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative w-full max-w-2xl rounded-[2.5rem] bg-white p-4 pb-10 shadow-pop"
              onClick={(e) => e.stopPropagation()}
            >
              <PlaceholderPhoto label={invitation.gallery[active].src} aspect="aspect-[4/3]" tint="candy" />
              <p className="mt-4 text-center font-script text-3xl text-plum">
                {invitation.gallery[active].caption}
              </p>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute -top-4 -right-4 h-11 w-11 rounded-full bg-gradient-candy text-plum font-bold shadow-pop"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}