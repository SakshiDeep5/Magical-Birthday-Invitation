import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";
import { CuteDivider, SparkleField } from "@/components/decorations";
import { Wand, PartyHat, Cupcake, Balloon, Unicorn, Candy, Star, Cloud } from "@/components/illustrations";

const ICONS = [Wand, PartyHat, Cupcake, Balloon, Unicorn, Candy];

// Pastel gradient badge colors for each icon
const BADGE_GRADIENTS = [
  "from-[oklch(0.9_0.07_5)] to-[oklch(0.88_0.07_300)]",   // pink → lavender
  "from-[oklch(0.88_0.07_300)] to-[oklch(0.9_0.06_230)]",  // lavender → sky
  "from-[oklch(0.9_0.06_230)] to-[oklch(0.9_0.07_165)]",   // sky → mint
  "from-[oklch(0.9_0.09_55)] to-[oklch(0.9_0.07_5)]",      // peach → pink
  "from-[oklch(0.9_0.07_165)] to-[oklch(0.88_0.07_300)]",  // mint → lavender
  "from-[oklch(0.94_0.1_95)] to-[oklch(0.9_0.09_55)]",     // butter → peach
];

// Glow colors matching each badge
const BADGE_GLOWS = [
  "shadow-[0_0_24px_8px_oklch(0.9_0.07_5/0.45)]",
  "shadow-[0_0_24px_8px_oklch(0.88_0.07_300/0.45)]",
  "shadow-[0_0_24px_8px_oklch(0.9_0.06_230/0.45)]",
  "shadow-[0_0_24px_8px_oklch(0.9_0.09_55/0.45)]",
  "shadow-[0_0_24px_8px_oklch(0.9_0.07_165/0.45)]",
  "shadow-[0_0_24px_8px_oklch(0.94_0.1_95/0.45)]",
];

// Card gradient borders
const CARD_BORDERS = [
  "from-[oklch(0.9_0.07_5/0.8)] via-[oklch(0.88_0.07_300/0.5)] to-[oklch(0.9_0.06_230/0.8)]",
  "from-[oklch(0.88_0.07_300/0.8)] via-[oklch(0.9_0.06_230/0.5)] to-[oklch(0.9_0.07_5/0.8)]",
  "from-[oklch(0.9_0.06_230/0.8)] via-[oklch(0.9_0.07_165/0.5)] to-[oklch(0.88_0.07_300/0.8)]",
  "from-[oklch(0.9_0.09_55/0.8)] via-[oklch(0.9_0.07_5/0.5)] to-[oklch(0.94_0.1_95/0.8)]",
  "from-[oklch(0.9_0.07_165/0.8)] via-[oklch(0.9_0.06_230/0.5)] to-[oklch(0.9_0.07_165/0.8)]",
  "from-[oklch(0.94_0.1_95/0.8)] via-[oklch(0.9_0.09_55/0.5)] to-[oklch(0.88_0.07_300/0.8)]",
];

export function Activities() {
  return (
    <section id="activities" className="relative px-4 sm:px-6 py-24 overflow-hidden w-full">
      <SparkleField count={20} />
      
      {/* Background Decor — clipped inside section */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0 overflow-hidden">
        <motion.div className="absolute top-10 left-[5%] hidden sm:block" animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <Cloud size={80} />
        </motion.div>
        <motion.div className="absolute top-40 right-[10%] hidden sm:block" animate={{ y: [0, -20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <Balloon size={70} color="oklch(0.9 0.07 5)" />
        </motion.div>
        <motion.div className="absolute bottom-20 left-[15%]" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
          <Star size={30} color="oklch(0.88 0.07 300)" />
        </motion.div>
        <motion.div className="absolute top-1/2 right-[3%] hidden sm:block" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
          <Star size={26} color="oklch(0.94 0.1 95)" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-script text-4xl md:text-5xl text-coral flex items-center justify-center gap-3">
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}>✨</motion.span>
            So Much to Do
            <motion.span animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>✨</motion.span>
          </p>
          <h3 className="mt-2 font-display text-3xl md:text-5xl text-plum">Fun Activities</h3>
          <CuteDivider label="🎪" />
        </div>

        {/* ── Activity Cards ──────────────────────────────── */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {invitation.activities.map((a, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.88 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  type: "spring",
                  bounce: 0.4,
                }}
                whileHover={{
                  y: -16,
                  scale: 1.04,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.97 }}
                className={`group relative rounded-[2rem] bg-white/60 p-[3px] backdrop-blur-xl cursor-default transition-all duration-300 card-glow`}
                style={{ animationDelay: `${i * 0.65}s` }}
              >
                {/* Always-visible gradient border that brightens on hover */}
                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${CARD_BORDERS[i % CARD_BORDERS.length]} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Inner Card Content */}
                <div className="relative h-full w-full rounded-[1.85rem] bg-white/70 p-7 backdrop-blur-md overflow-hidden flex flex-col items-center text-center">
                  
                  {/* Subtle inner glow on hover */}
                  <div className={`absolute inset-0 rounded-[1.85rem] opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br ${BADGE_GRADIENTS[i % BADGE_GRADIENTS.length]}`} />

                  {/* Icon with idle float animation */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3 + (i % 3) * 0.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                    className={`relative inline-flex items-center justify-center rounded-[1.5rem] bg-gradient-to-br ${BADGE_GRADIENTS[i % BADGE_GRADIENTS.length]} p-4 ring-4 ring-white/90 shadow-pop transition-all duration-300 group-hover:scale-110 group-hover:rotate-[8deg]`}
                  >
                    {/* The glowing shadow behind the icon */}
                    <div className={`absolute -inset-2 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${BADGE_GLOWS[i % BADGE_GLOWS.length]} -z-10`} />
                    <Icon size={52} />
                  </motion.div>

                  <h4 className="mt-5 font-display text-2xl text-plum group-hover:text-coral transition-colors duration-300">
                    {a.name}
                  </h4>
                  <p className="mt-3 font-cute text-[15px] text-plum-soft leading-relaxed">
                    {a.description}
                  </p>

                  {/* Tiny floating sparkles that appear on hover */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: -20, x: 20 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute top-6 right-6 text-xl select-none pointer-events-none opacity-0 group-hover:opacity-100"
                  >
                    ✨
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: -20, x: -20 }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-20 left-6 text-lg select-none pointer-events-none opacity-0 group-hover:opacity-100"
                  >
                    ⭐
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}