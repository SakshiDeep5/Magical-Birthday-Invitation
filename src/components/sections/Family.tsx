import { motion } from "framer-motion";
import { useRef } from "react";
import { invitation } from "@/data/invitation";
import { CuteDivider, PlaceholderPhoto } from "@/components/decorations";
import { Heart } from "@/components/illustrations";

// Cycling light pastel backgrounds for each card
const CARD_BG = [
  "bg-[oklch(0.97_0.03_5)]",      // baby-pink
  "bg-[oklch(0.96_0.03_300)]",    // lavender
  "bg-[oklch(0.96_0.03_230)]",    // sky
  "bg-[oklch(0.96_0.03_5)]",      // baby-pink
  "bg-[oklch(0.96_0.03_300)]",    // lavender
];

// Cycling glow colors matching each pastel
const GLOW_SHADOW = [
  "shadow-[0_0_18px_4px_oklch(0.82_0.11_25/0.35)]",    // coral-pink glow
  "shadow-[0_0_18px_4px_oklch(0.88_0.07_300/0.35)]",   // lavender glow
  "shadow-[0_0_18px_4px_oklch(0.9_0.06_230/0.35)]",    // sky glow
  "shadow-[0_0_18px_4px_oklch(0.82_0.11_25/0.35)]",    // coral-pink glow
  "shadow-[0_0_18px_4px_oklch(0.88_0.07_300/0.35)]",   // lavender glow
];

// Cycling gradient border colors
const BORDER_GRAD = [
  "from-babypink via-coral to-lavender",
  "from-lavender via-sky to-babypink",
  "from-sky via-mint to-lavender",
  "from-babypink via-peach to-coral",
  "from-lavender via-babypink to-sky",
];

export function Family() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <section id="family" className="relative px-6 py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl relative">
        <div className="text-center">
          <p className="font-script text-4xl md:text-5xl text-coral">Our Little Circle</p>
          <h3 className="mt-2 font-display text-3xl md:text-5xl text-plum">The Family</h3>
          <CuteDivider label="💕" />
        </div>

        {/* Arrow buttons — mobile/tablet only, no scroll text indicator */}
        <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
          <button 
            onClick={scrollLeft}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 ring-2 ring-white/80 shadow-soft-pastel text-coral text-xl backdrop-blur transition-all active:scale-90 hover:scale-110 hover:bg-white hover:shadow-pop"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button 
            onClick={scrollRight}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 ring-2 ring-white/80 shadow-soft-pastel text-coral text-xl backdrop-blur transition-all active:scale-90 hover:scale-110 hover:bg-white hover:shadow-pop"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>

        {/* Carousel Wrapper - Strictly hides overflow and scroll indicator */}
        <div className="mt-8 relative w-full overflow-hidden">
          {/* Carousel Track - scrollable but no visible scrollbar */}
          <div 
            ref={carouselRef}
            className="flex snap-x snap-mandatory overflow-x-scroll gap-6 pb-4 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {invitation.family.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative snap-center flex-shrink-0 w-[240px] md:w-auto"
              >
                {/* Gradient border wrapper */}
                <div
                  className={`rounded-[2rem] p-[2.5px] bg-gradient-to-br ${BORDER_GRAD[i % BORDER_GRAD.length]} ${GLOW_SHADOW[i % GLOW_SHADOW.length]} transition-all duration-300 group-hover:shadow-[0_0_28px_8px_oklch(0.88_0.07_300/0.5)] h-full`}
                >
                  {/* Inner card with pastel background */}
                  <div
                    className={`relative rounded-[1.75rem] ${CARD_BG[i % CARD_BG.length]} p-4 pb-6 backdrop-blur h-full`}
                  >
                    <div className="relative">
                      <PlaceholderPhoto
                        label={f.photo}
                        aspect="aspect-square"
                        tint={i % 2 === 0 ? "candy" : "sunrise"}
                        className="rounded-full"
                      />
                      <Heart
                        className="absolute -top-2 -right-2 opacity-0 transition-opacity group-hover:opacity-100"
                        size={30}
                      />
                    </div>
                    <p className="mt-4 text-center font-cute text-[10px] font-bold uppercase tracking-[0.3em] text-coral">
                      {f.role}
                    </p>
                    <p className="mt-1 text-center font-display text-lg text-plum">{f.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}