import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { invitation } from "@/data/invitation";
import teddyImg from "@/Assets/teddy-preview.png";
import bottomLeftImg from "@/Assets/preview-bottom-left.png";
import bottomRightImg from "@/Assets/preview-bottom-right.png";
import cloudCurtainLeft from "@/Assets/cloud-curtain-left.png";
import cloudCurtainRight from "@/Assets/cloud-curtain-right.png";
import cloudFluffy from "@/Assets/cloud-fluffy.png";
import cloudFluffy1 from "@/Assets/cloud-fluffy1.png";
import cloudMidLeft from "@/Assets/cloud-mid-left.png";
import cloudMidRight from "@/Assets/cloud-mid-right.png";
import cloudTopLeft from "@/Assets/cloud-top-left.png";
import cloudTopRight from "@/Assets/cloud-top-right.png";

/* ──────────────────────────────────────────────────────────────
 * Hanging Star Suspended From String (Physics sway)
 * ────────────────────────────────────────────────────────────── */
function HangingStar({
  left,
  right,
  stringHeight = 85,
  starSize = 24,
  delay = 0,
  swayDuration = 4.2,
}: {
  left?: string;
  right?: string;
  stringHeight?: number;
  starSize?: number;
  delay?: number;
  swayDuration?: number;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute top-0 z-[16] flex flex-col items-center origin-top"
      style={{ left, right }}
      animate={{ rotate: [-3.5, 3.5, -3.5] }}
      transition={{
        duration: swayDuration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-[1.5px]"
        style={{
          height: `${stringHeight}px`,
          background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,235,160,0.65))",
          boxShadow: "0 0 5px rgba(255,240,180,0.5)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 2.4, delay, repeat: Infinity, ease: "easeInOut" }}
        className="-mt-1"
        style={{ filter: "drop-shadow(0 4px 10px rgba(255,215,100,0.65))" }}
      >
        <svg width={starSize} height={starSize} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l2.3 6.9h7.3l-5.9 4.3 2.2 6.8-5.9-4.3-5.9 4.3 2.2-6.8-5.9-4.3h7.3z"
            fill="#FFE885"
            stroke="#FFF4BA"
            strokeWidth="0.8"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
 * Scattered Twinkling Stars
 * ────────────────────────────────────────────────────────────── */
function ScatteredStars() {
  const stars = [
    { top: "6%", left: "9%", size: 12, color: "#FFF275", delay: 0.2, dur: 2.6 },
    { top: "13%", left: "20%", size: 11, color: "#FFFFFF", delay: 0.8, dur: 3.2 },
    { top: "22%", left: "12%", size: 14, color: "#FFD1DC", delay: 1.5, dur: 2.8 },
    { top: "34%", left: "25%", size: 9, color: "#FFEAA7", delay: 0.4, dur: 3.0 },
    { top: "8%", right: "12%", size: 13, color: "#FFF9B1", delay: 1.1, dur: 2.5 },
    { top: "17%", right: "24%", size: 11, color: "#FFFFFF", delay: 0.6, dur: 3.4 },
    { top: "27%", right: "14%", size: 14, color: "#E0BBE4", delay: 1.8, dur: 2.9 },
    { top: "42%", right: "8%", size: 10, color: "#FFF275", delay: 0.9, dur: 3.1 },
    { top: "48%", left: "6%", size: 12, color: "#FFDFBA", delay: 1.3, dur: 2.7 },
  ];

  return (
    <>
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute z-[12]"
          style={{ top: s.top, left: s.left, right: s.right }}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [0.65, 1.25, 0.65],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: s.dur,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill={s.color}>
            <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}

/* ──────────────────────────────────────────────────────────────
 * Cloud Curtain Reveal Animation (Phases 1 & 2)
 * ────────────────────────────────────────────────────────────── */
function CloudCurtain({ isParted }: { isParted: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[50] overflow-hidden">
      {/* LEFT CLOUD CURTAIN */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 flex flex-col justify-center items-end"
        style={{ width: "68vw" }}
        animate={isParted ? { x: "-115%", opacity: 0 } : { x: "0%", opacity: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="relative w-full h-full flex flex-col justify-around">
          <motion.img
            src={cloudCurtainLeft}
            alt=""
            className="w-[110%] max-w-[850px] h-auto object-contain -ml-[10%] filter drop-shadow(0 20px 40px rgba(180,210,240,0.65))"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={cloudFluffy}
            alt=""
            className="w-[90%] max-w-[650px] h-auto object-contain -mt-28 ml-[8%] filter drop-shadow(0 20px 40px rgba(180,210,240,0.5))"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
      </motion.div>

      {/* RIGHT CLOUD CURTAIN */}
      <motion.div
        className="absolute top-0 bottom-0 right-0 flex flex-col justify-center items-start"
        style={{ width: "68vw" }}
        animate={isParted ? { x: "115%", opacity: 0 } : { x: "0%", opacity: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.05,
        }}
      >
        <div className="relative w-full h-full flex flex-col justify-around">
          <motion.img
            src={cloudCurtainRight}
            alt=""
            className="w-[110%] max-w-[850px] h-auto object-contain -mr-[10%] self-end filter drop-shadow(0 20px 40px rgba(180,210,240,0.65))"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={cloudFluffy}
            alt=""
            className="w-[90%] max-w-[650px] h-auto object-contain -mt-28 mr-[8%] self-end filter drop-shadow(0 20px 40px rgba(180,210,240,0.5))"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
 * Main Opening Sequence Component
 * ────────────────────────────────────────────────────────────── */
export function OpeningSequence({ onEnter }: { onEnter: () => void }) {
  // Phase 1: 0 - 1.5s (Curtain closed)
  // Phase 2: 1.5 - 3.0s (Clouds part)
  // Phase 3: 3.0 - 4.5s (Wonderland elements reveal)
  // Phase 4: > 4.5s (Ambient continuous life)
  const [phase, setPhase] = useState<1 | 2 | 3 | 4>(1);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(2), 1500);
    const t2 = setTimeout(() => setPhase(3), 3000);
    const t3 = setTimeout(() => setPhase(4), 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div
      className="opening-scene relative h-[100dvh] w-full overflow-hidden select-none flex flex-col items-center justify-between"
      style={{
        background:
          "linear-gradient(180deg, #74C0FF 0%, #94D1FD 14%, #B7E1FE 28%, #D6EDFE 45%, #E9F4FE 62%, #EDF4FB 78%, #E3ECF8 100%)",
      }}
    >
      {/* ─── CLOUD CURTAIN REVEAL OVERLAY (Phases 1 & 2) ─── */}
      <CloudCurtain isParted={phase >= 2} />

      {/* ─── ATMOSPHERIC RADIAL GLOW ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 32%, rgba(255,255,255,0.75) 0%, rgba(225,242,254,0.4) 50%, transparent 75%)",
        }}
      />

      {/* ─── HANGING STARS (Physical sway from top edge) ─── */}
      <HangingStar left="9%" stringHeight={90} starSize={26} delay={0} swayDuration={4.5} />
      <HangingStar left="26%" stringHeight={55} starSize={19} delay={1.2} swayDuration={3.8} />
      <HangingStar right="21%" stringHeight={65} starSize={20} delay={0.6} swayDuration={4.2} />
      <HangingStar right="9%" stringHeight={100} starSize={28} delay={1.8} swayDuration={5.0} />

      {/* ─── SCATTERED TWINKLING STARS ─── */}
      <ScatteredStars />

      {/* ─── AMBIENT DRIFTING CLOUDS (Individually Animated PNG Layers) ─── */}
      {/* Upper Left Cloud */}
      <motion.div
        className="pointer-events-none absolute z-[5]"
        style={{ top: "3%", left: "13%", width: "clamp(100px, 13vw, 190px)" }}
        animate={{ x: [0, 14, 0], y: [0, -5, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={cloudTopLeft} alt="" className="w-full h-auto opacity-95 drop-shadow-sm" />
      </motion.div>

      {/* Upper Right Cloud */}
      <motion.div
        className="pointer-events-none absolute z-[5]"
        style={{ top: "10%", right: "6%", width: "clamp(70px, 8vw, 120px)" }}
        animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <img src={cloudTopRight} alt="" className="w-full h-auto opacity-90" />
      </motion.div>

      {/* Middle Left Volumetric Cloud */}
      <motion.div
        className="pointer-events-none absolute z-[5]"
        style={{ top: "20%", left: "-3%", width: "clamp(160px, 20vw, 320px)" }}
        animate={{ x: [0, 15, 0], y: [0, -6, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={cloudMidLeft} alt="" className="w-full h-auto opacity-95 drop-shadow-md" />
      </motion.div>

      {/* Middle Right Volumetric Cloud */}
      <motion.div
        className="pointer-events-none absolute z-[5]"
        style={{ top: "24%", right: "-4%", width: "clamp(170px, 21vw, 340px)" }}
        animate={{ x: [0, -15, 0], y: [0, 6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <img src={cloudMidRight} alt="" className="w-full h-auto opacity-95 drop-shadow-md" />
      </motion.div>

      {/* ─── ANIMATED TRANSPARENT CORNER DECORATIONS (Bottom Left & Right) ─── */}
      {/* Bottom Left: Gift boxes, balloons, alphabet blocks & flowers */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 z-[22]"
        style={{ width: "clamp(240px, 34vw, 480px)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      >
        <motion.img
          src={bottomLeftImg}
          alt=""
          className="w-full h-auto object-contain object-bottom drop-shadow-md"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Bottom Right: Lavender gifts, balloons, floral accents */}
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 z-[22]"
        style={{ width: "clamp(240px, 34vw, 480px)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.2, delay: 0.15 }}
      >
        <motion.img
          src={bottomRightImg}
          alt=""
          className="w-full h-auto object-contain object-bottom drop-shadow-md"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </motion.div>

      {/* Soft continuous cloud pillow blending the bottom center floor */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-[20] flex justify-center overflow-hidden">
        <motion.img
          src={cloudFluffy1}
          alt=""
          className="w-[115%] max-w-[1300px] h-[75px] sm:h-[95px] md:h-[120px] object-cover opacity-85"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ─── CENTRAL CONTENT HIERARCHY (Exact Preview Spacing) ─── */}
      <div className="relative z-[30] mx-auto flex flex-col items-center justify-center w-full max-w-4xl px-4 pt-1 sm:pt-3 md:pt-4 pb-8 my-auto text-center">
        {/* 1. Plush Teddy Bear with Balloons & Gift Box */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative flex flex-col items-center"
            >
              {/* Soft warm halo behind teddy */}
              <motion.div
                aria-hidden
                className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                  width: "clamp(180px, 26vw, 340px)",
                  height: "clamp(180px, 26vw, 340px)",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,248,220,0.45) 45%, transparent 70%)",
                  filter: "blur(18px)",
                }}
                animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.05, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Teddy with gentle bobbing animation */}
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center"
              >
                <img
                  src={teddyImg}
                  alt="Teddy bear holding balloons sitting on a gift box"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[185px] lg:h-[210px] max-w-[85vw] object-contain drop-shadow-md"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. Birthday Invitation Content (Revealed in Phase 3) */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.div
              key="content-block"
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col items-center max-w-2xl px-2 mt-1.5 sm:mt-2.5 md:mt-3"
            >
              {/* Eyebrow: A VERY SPECIAL DAY FOR */}
              <div className="flex items-center gap-2">
                <span className="text-[#FF9EB5] text-[11px]">♥</span>
                <p
                  className="font-cute text-[9px] sm:text-[11px] md:text-xs font-extrabold uppercase tracking-[0.32em]"
                  style={{ color: "#6A5D82" }}
                >
                  A VERY SPECIAL DAY FOR
                </p>
                <span className="text-[#FF9EB5] text-[11px]">♥</span>
              </div>

              {/* Main Name: Aarohi (Matching Preview Font & 3D Effect) */}
              <h1
                className="mt-0.5 font-display font-black leading-[0.92] tracking-wide"
                style={{
                  fontSize: "clamp(3.0rem, 8.8vw, 6.0rem)",
                  background:
                    "linear-gradient(135deg, #FF9EB5 0%, #FFAAA6 20%, #FFD3B6 40%, #A8E6CF 65%, #A2D2FF 85%, #CDB4DB 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  filter: "drop-shadow(0 3px 8px rgba(130, 95, 155, 0.22))",
                }}
              >
                {invitation.birthdayGirlName}
              </h1>

              {/* turns 5! with decorative accents */}
              <div className="flex items-center gap-2 sm:gap-3 -mt-0.5 sm:mt-0">
                <span className="text-[#FF7597] font-bold text-base sm:text-lg md:text-xl">➔</span>
                <p
                  className="font-script font-semibold"
                  style={{
                    fontSize: "clamp(1.8rem, 5.2vw, 3.2rem)",
                    color: "#FF6584",
                    textShadow: "0 2px 8px rgba(255, 101, 132, 0.22)",
                  }}
                >
                  turns {invitation.birthdayAge}!
                </p>
                <span className="text-[#FF7597] font-bold text-base sm:text-lg md:text-xl transform rotate-180">➔</span>
              </div>

              {/* Welcome, Priya */}
              <div className="mt-0.5 sm:mt-1 flex items-center gap-2">
                <span className="text-[#64B5F6] text-xs sm:text-sm md:text-base">➔</span>
                <p
                  className="font-script"
                  style={{
                    fontSize: "clamp(1.2rem, 3.2vw, 1.7rem)",
                    color: "#4A3B69",
                  }}
                >
                  Welcome,{" "}
                  <span
                    style={{
                      color: "#FF5E7E",
                      fontWeight: 600,
                    }}
                  >
                    {invitation.guestName}
                  </span>
                </p>
                <span className="text-[#64B5F6] text-xs sm:text-sm md:text-base transform rotate-180">➔</span>
              </div>

              {/* CTA Button: Open Invitation */}
              <motion.div
                className="mt-3.5 sm:mt-5 md:mt-6 z-[35]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <motion.button
                  id="open-invitation-btn"
                  onClick={onEnter}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" } }}
                  className="opening-cta-btn group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 sm:px-11 py-2.5 sm:py-3.5 font-cute text-xs sm:text-sm md:text-base font-bold tracking-[0.18em]"
                  style={{
                    background: "linear-gradient(90deg, #FFAAA6 0%, #FF8FA3 35%, #B39DDB 75%, #90CAF9 100%)",
                    color: "#3D2B56",
                    boxShadow:
                      "0 10px 24px -5px rgba(220, 120, 160, 0.5), 0 0 30px rgba(200, 160, 255, 0.3), inset 0 2px 1px rgba(255, 255, 255, 0.8), inset 0 -3px 8px rgba(0, 0, 0, 0.08)",
                    border: "2px solid rgba(255, 255, 255, 0.9)",
                  }}
                >
                  {/* Glossy top pill highlight */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-3 top-1 h-[42%] rounded-full"
                    style={{ background: "rgba(255,255,255,0.45)", filter: "blur(2px)" }}
                  />

                  {/* Sparkles & Label */}
                  <span className="text-[#FFF275] text-sm sm:text-base drop-shadow-sm">✦</span>
                  <span className="relative z-10 font-bold uppercase">Open Invitation</span>
                  <span className="text-[#FFF275] text-sm sm:text-base drop-shadow-sm">✦</span>

                  {/* Hover shimmer sweep */}
                  <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/60 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}