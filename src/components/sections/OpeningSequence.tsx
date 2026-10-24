import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { invitation } from "@/data/invitation";
import teddyImg from "@/Assets/teddy-isolated.png";
import bottomLeftImg from "@/Assets/scene-bottom-left.png";
import bottomRightImg from "@/Assets/scene-bottom-right.png";
import cloudCurtainLeft from "@/Assets/cloud-curtain-left.png";
import cloudCurtainRight from "@/Assets/cloud-curtain-right.png";
import cloudFluffy from "@/Assets/cloud-fluffy.png";

/* ──────────────────────────────────────────────────────────────
 * Hanging Star Suspended From String (With delicate physics sway)
 * ────────────────────────────────────────────────────────────── */
function HangingStar({
  left,
  right,
  stringHeight = 90,
  starSize = 26,
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
      className="pointer-events-none absolute top-0 z-[18] flex flex-col items-center origin-top"
      style={{ left, right }}
      animate={{ rotate: [-3.5, 3.5, -3.5] }}
      transition={{
        duration: swayDuration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Delicate suspension string */}
      <div
        className="w-[1.5px]"
        style={{
          height: `${stringHeight}px`,
          background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,235,160,0.65))",
          boxShadow: "0 0 5px rgba(255,240,180,0.5)",
        }}
      />
      {/* 5-pointed pastel golden star */}
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
    { top: "7%", left: "9%", size: 12, color: "#FFF275", delay: 0.2, dur: 2.6 },
    { top: "14%", left: "21%", size: 11, color: "#FFFFFF", delay: 0.8, dur: 3.2 },
    { top: "24%", left: "14%", size: 14, color: "#FFD1DC", delay: 1.5, dur: 2.8 },
    { top: "33%", left: "28%", size: 9, color: "#FFEAA7", delay: 0.4, dur: 3.0 },
    { top: "8%", right: "12%", size: 13, color: "#FFF9B1", delay: 1.1, dur: 2.5 },
    { top: "18%", right: "25%", size: 11, color: "#FFFFFF", delay: 0.6, dur: 3.4 },
    { top: "27%", right: "17%", size: 14, color: "#E0BBE4", delay: 1.8, dur: 2.9 },
    { top: "40%", right: "9%", size: 10, color: "#FFF275", delay: 0.9, dur: 3.1 },
    { top: "46%", left: "6%", size: 12, color: "#FFDFBA", delay: 1.3, dur: 2.7 },
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
      className="opening-scene relative min-h-[100dvh] w-full overflow-hidden select-none"
      style={{
        background: "linear-gradient(180deg, #CEE7FE 0%, #E3F2FD 28%, #EFF8FF 55%, #FBFDFF 80%, #FFFFFF 100%)",
      }}
    >
      {/* ─── CLOUD CURTAIN REVEAL OVERLAY (Phases 1 & 2) ─── */}
      <CloudCurtain isParted={phase >= 2} />

      {/* ─── ATMOSPHERIC RADIAL GLOW BEHIND CENTER ─── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 32%, rgba(255,255,255,0.7) 0%, rgba(230,245,255,0.4) 50%, transparent 75%)",
        }}
      />

      {/* ─── HANGING STARS (Physical sway suspended from top edge) ─── */}
      <HangingStar left="9%" stringHeight={95} starSize={26} delay={0} swayDuration={4.5} />
      <HangingStar left="26%" stringHeight={60} starSize={20} delay={1.2} swayDuration={3.8} />
      <HangingStar right="21%" stringHeight={75} starSize={22} delay={0.6} swayDuration={4.2} />
      <HangingStar right="10%" stringHeight={110} starSize={28} delay={1.8} swayDuration={5.0} />

      {/* ─── SCATTERED TWINKLING STARS ─── */}
      <ScatteredStars />

      {/* ─── AMBIENT DRIFTING CLOUDS (Separate Layers) ─── */}
      {/* Upper Left Fluffy Cloud */}
      <motion.div
        className="pointer-events-none absolute z-[5]"
        style={{ top: "3%", left: "10%", width: "clamp(120px, 15vw, 220px)" }}
        animate={{ x: [0, 16, 0], y: [0, -6, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={cloudFluffy} alt="" className="w-full h-auto opacity-90 drop-shadow-sm" />
      </motion.div>

      {/* Upper Right Cloud */}
      <motion.div
        className="pointer-events-none absolute z-[5]"
        style={{ top: "11%", right: "8%", width: "clamp(80px, 10vw, 150px)" }}
        animate={{ x: [0, -12, 0], y: [0, 5, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <img src={cloudFluffy} alt="" className="w-full h-auto opacity-80" />
      </motion.div>

      {/* Middle Left Volumetric Cloud */}
      <motion.div
        className="pointer-events-none absolute z-[5]"
        style={{ top: "25%", left: "-4%", width: "clamp(180px, 24vw, 360px)" }}
        animate={{ x: [0, 18, 0], y: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={cloudFluffy} alt="" className="w-full h-auto opacity-95 drop-shadow-md" />
      </motion.div>

      {/* Middle Right Volumetric Cloud */}
      <motion.div
        className="pointer-events-none absolute z-[5]"
        style={{ top: "28%", right: "-5%", width: "clamp(190px, 25vw, 380px)" }}
        animate={{ x: [0, -16, 0], y: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <img src={cloudFluffy} alt="" className="w-full h-auto opacity-95 drop-shadow-md" />
      </motion.div>

      {/* ─── TEDDY BEAR + PASTEL BALLOONS LAYER (Focal Point) ─── */}
      <AnimatePresence>
        {phase >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="pointer-events-none absolute left-1/2 z-[20] -translate-x-1/2 flex flex-col items-center"
            style={{
              top: "clamp(16px, 3.5vh, 45px)",
              width: "clamp(240px, 34vw, 420px)",
            }}
          >
            {/* Soft glowing halo behind teddy */}
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: "clamp(280px, 42vw, 480px)",
                height: "clamp(280px, 42vw, 480px)",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,248,225,0.4) 40%, transparent 70%)",
                filter: "blur(20px)",
              }}
              animate={{ opacity: [0.65, 0.95, 0.65], scale: [1, 1.05, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Teddy & balloons with delicate continuous bobbing */}
            <motion.div
              animate={{ y: [0, -9, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              <img
                src={teddyImg}
                alt="Plush teddy bear holding pastel balloons on a gift box"
                className="w-full h-auto object-contain filter drop-shadow(0 14px 28px rgba(120,150,200,0.32))"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── LAYERED BOTTOM FOREGROUND SCENERY ─── */}
      {/* Bottom Left: Pastel gifts, balloons, flowers & clouds */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 z-[22]"
        style={{
          width: "clamp(200px, 33vw, 480px)",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      >
        <motion.img
          src={bottomLeftImg}
          alt=""
          className="w-full h-auto object-contain object-bottom drop-shadow-md"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Bottom Right: Lavender gift box, balloons, floral scene & clouds */}
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 z-[22]"
        style={{
          width: "clamp(200px, 33vw, 480px)",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2, delay: 0.15 }}
      >
        <motion.img
          src={bottomRightImg}
          alt=""
          className="w-full h-auto object-contain object-bottom drop-shadow-md"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>

      {/* Continuous soft fluffy foreground cloud pillow at the bottom center */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-[24] flex justify-center overflow-hidden">
        <motion.img
          src={cloudFluffy}
          alt=""
          className="w-[120%] max-w-[1200px] h-[90px] md:h-[130px] object-cover opacity-90 filter drop-shadow(0 -8px 20px rgba(255,255,255,0.9))"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ─── CENTRAL CONTENT HIERARCHY (Revealed in Phase 3) ─── */}
      <div className="relative z-[30] mx-auto flex min-h-[100dvh] max-w-4xl flex-col items-center justify-center px-4 pt-12 pb-6 text-center">
        {/* Spacer reserving exact room for upper teddy composition */}
        <div style={{ height: "clamp(190px, 35vh, 320px)" }} className="w-full pointer-events-none" />

        <AnimatePresence>
          {phase >= 3 && (
            <motion.div
              key="content-block"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col items-center max-w-2xl px-2"
            >
              {/* Eyebrow: A VERY SPECIAL DAY FOR */}
              <div className="flex items-center gap-2">
                <span className="text-[#FF9EB5] text-xs">♥</span>
                <p
                  className="font-cute text-[11px] md:text-sm font-extrabold uppercase tracking-[0.35em]"
                  style={{ color: "#6A5D82" }}
                >
                  A VERY SPECIAL DAY FOR
                </p>
                <span className="text-[#FF9EB5] text-xs">♥</span>
              </div>

              {/* Main Name: Aarohi (3D Pastel Multicolor Font) */}
              <h1
                className="mt-1 font-display font-black leading-[0.95] tracking-wide"
                style={{
                  fontSize: "clamp(3.8rem, 13vw, 7.8rem)",
                  background:
                    "linear-gradient(135deg, #FF9EB5 0%, #FFAAA6 20%, #FFD3B6 40%, #A8E6CF 65%, #A2D2FF 85%, #CDB4DB 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  filter: "drop-shadow(0 4px 10px rgba(130, 95, 155, 0.25))",
                }}
              >
                {invitation.birthdayGirlName}
              </h1>

              {/* turns 5! with decorative pink script */}
              <div className="flex items-center gap-3 -mt-1 md:-mt-2">
                <span className="text-[#FF7597] font-bold text-lg md:text-xl">➔</span>
                <p
                  className="font-script font-semibold"
                  style={{
                    fontSize: "clamp(2.4rem, 7.5vw, 4.4rem)",
                    color: "#FF6584",
                    textShadow: "0 2px 8px rgba(255, 101, 132, 0.22)",
                  }}
                >
                  turns {invitation.birthdayAge}!
                </p>
                <span className="text-[#FF7597] font-bold text-lg md:text-xl transform rotate-180">➔</span>
              </div>

              {/* Welcome, Priya */}
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[#64B5F6] text-sm md:text-base">➔</span>
                <p
                  className="font-script"
                  style={{
                    fontSize: "clamp(1.5rem, 4.5vw, 2.3rem)",
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
                <span className="text-[#64B5F6] text-sm md:text-base transform rotate-180">➔</span>
              </div>

              {/* CTA Button: Open Invitation */}
              <motion.div
                className="mt-6 md:mt-8 z-[35]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                <motion.button
                  id="open-invitation-btn"
                  onClick={onEnter}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" } }}
                  className="opening-cta-btn group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-12 py-4 font-cute text-sm md:text-base font-bold tracking-[0.18em]"
                  style={{
                    background: "linear-gradient(90deg, #FFAAA6 0%, #FF8FA3 35%, #B39DDB 75%, #90CAF9 100%)",
                    color: "#3D2B56",
                    boxShadow:
                      "0 12px 28px -6px rgba(220, 120, 160, 0.55), 0 0 35px rgba(200, 160, 255, 0.35), inset 0 2px 1px rgba(255, 255, 255, 0.8), inset 0 -3px 8px rgba(0, 0, 0, 0.08)",
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
                  <span className="text-[#FFF275] text-base drop-shadow-sm">✦</span>
                  <span className="relative z-10 font-bold uppercase">Open Invitation</span>
                  <span className="text-[#FFF275] text-base drop-shadow-sm">✦</span>

                  {/* Hover shimmer sweep */}
                  <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/60 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lower clearance ensuring bottom clouds/gifts never overlap button */}
        <div style={{ height: "clamp(60px, 12vh, 110px)" }} className="w-full pointer-events-none" />
      </div>
    </div>
  );
}