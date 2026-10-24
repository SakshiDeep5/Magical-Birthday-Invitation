import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CuteDivider } from "@/components/decorations";
import { Heart, Star, Butterfly, Flower } from "@/components/illustrations";
import { useWishes, type Wish } from "@/hooks/use-wishes";

const TINTS = ["bg-gradient-candy", "bg-gradient-sunrise", "bg-gradient-sky"];
const ICONS = [Heart, Star, Butterfly, Flower];
const INITIAL_VISIBLE = 3;
const COLLAPSED_HEIGHT = "13rem";

/* ─── Individual Wish Card with inline expand/collapse ─── */
interface WishCardProps {
  w: Wish;
  i: number;
  totalWishes: number;
}

function WishCard({ w, i, totalWishes }: WishCardProps) {
  const Icon = ICONS[i % ICONS.length];
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let frameId: number;

    const check = () => {
      if (!isExpanded && el) {
        // Compare scrollHeight to clientHeight to detect if text is clamped
        setIsTruncated(el.scrollHeight > el.clientHeight + 2);
      }
    };

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(check);
    });

    observer.observe(el);

    // Initial check
    check();
    
    // Secondary check for when fonts load or framer-motion finishes entering
    const timer = setTimeout(check, 500);

    if (document.fonts?.ready) {
      document.fonts.ready.then(check);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
    };
  }, [isExpanded, w.message]);

  const showButton = isTruncated || isExpanded;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, height: isExpanded ? "auto" : COLLAPSED_HEIGHT }}
      exit={{ opacity: 0, y: -12, scale: 0.95 }}
      transition={{ duration: 0.4, layout: { duration: 0.35, ease: "easeInOut" } }}
      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
      className={`relative flex flex-col rounded-[1.75rem] p-5 ring-2 ring-white/70 ${TINTS[i % TINTS.length]} cursor-default overflow-hidden`}
      style={{
        minHeight: COLLAPSED_HEIGHT,
        boxShadow: "0 10px 30px -8px color-mix(in oklab, var(--lavender) 35%, transparent)",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between shrink-0">
        <Icon size={28} />
        <span className="font-cute text-[10px] font-bold uppercase tracking-[0.25em] text-plum-soft">
          Wish #{totalWishes - i}
        </span>
      </div>

      {/* Message — clamped when collapsed, full when expanded */}
      <div className="mt-3 flex-1 flex flex-col justify-start">
        <p
          ref={textRef}
          className="font-script text-xl leading-snug text-plum transition-all duration-300"
          style={
            isExpanded
              ? { display: "block", whiteSpace: "pre-wrap", wordBreak: "break-word", overflowWrap: "anywhere" }
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  wordBreak: "break-word",
                  overflowWrap: "anywhere"
                }
          }
        >
          &ldquo;{w.message}&rdquo;
        </p>
      </div>

      {/* Footer: sender + button */}
      <div className="mt-2 flex items-center justify-between gap-3 shrink-0">
        <p className="min-w-0 truncate font-cute text-[11px] font-bold uppercase tracking-[0.25em] text-plum-soft">
          — {w.from}
        </p>

        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded((v) => !v);
            }}
            className="shrink-0 rounded-full bg-white/80 px-3 py-1 font-cute text-[11px] font-bold uppercase tracking-[0.2em] text-coral shadow-soft-pastel ring-1 ring-white/70 transition hover:bg-white hover:scale-105 active:scale-95"
          >
            {isExpanded ? "Read Less ✨" : "Read More"}
          </motion.button>
        )}
      </div>
    </motion.article>
  );
}

/* ─── Wishes Wall Section ────────────────────────────────── */
export function WishesWall() {
  const wishes = useWishes();
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? wishes : wishes.slice(0, INITIAL_VISIBLE);
  const hiddenCount = wishes.length - visible.length;

  return (
    <section id="wishes" className="relative px-4 sm:px-6 py-24 overflow-hidden w-full">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-script text-4xl md:text-5xl text-coral">Sweet Words</p>
          <h3 className="mt-2 font-display text-3xl md:text-5xl text-plum">Wishes Wall</h3>
          <CuteDivider label="💌" />
          <p className="mx-auto max-w-xl font-cute text-sm text-plum-soft">
            {wishes.length} magical {wishes.length === 1 ? "blessing" : "blessings"} and counting.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl">
          <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence initial={false}>
              {visible.map((w, i) => (
                <WishCard
                  key={w.ts ? `wish-${w.ts}` : `seed-${w.from}-${w.message.slice(0, 10)}`}
                  w={w}
                  i={i}
                  totalWishes={wishes.length}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {hiddenCount > 0 && (
            <div className="mt-8 flex justify-center">
              <motion.button
                type="button"
                onClick={() => setShowAll(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-candy px-8 py-3 font-display text-base text-plum shadow-pop ring-2 ring-white/70"
              >
                <Heart size={20} color="oklch(0.82 0.11 25)" />
                More Blessings ({hiddenCount})
              </motion.button>
            </div>
          )}

          {showAll && wishes.length > INITIAL_VISIBLE && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll(false)}
                className="rounded-full bg-white/80 px-6 py-2 font-cute text-xs font-bold uppercase tracking-[0.3em] text-coral shadow-soft-pastel ring-1 ring-white/70 hover:bg-white transition"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
