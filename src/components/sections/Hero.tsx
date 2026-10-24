import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";
import { FloatingBalloons, SparkleField, CuteDivider } from "@/components/decorations";
import { Teddy, PartyHat, Cake, Star, Butterfly } from "@/components/illustrations";
import birthdayGirlImg from "@/Assets/birthday-girl.png";

function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 shadow-soft-pastel">
      <PartyHat size={22} />
      <span className="font-cute text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-plum-soft">
        Dear {invitation.guestName}, You're Invited
      </span>
    </div>
  );
}

function HeroHeading() {
  return (
    <h1 className="mt-4 md:mt-6 font-display text-5xl md:text-8xl leading-[0.9] text-plum">
      <span className="block">It's my</span>
      <span className="block font-script text-[4rem] md:text-9xl text-candy-gradient leading-none py-1">
        {invitation.birthdayAge}
        <sup className="text-3xl md:text-5xl align-super">th</sup>
      </span>
      <span className="block">Birthday!</span>
    </h1>
  );
}

function HeroNameParents() {
  return (
    <>
      <p className="mt-2 md:mt-0 font-script text-3xl md:text-5xl text-coral">
        {invitation.birthdayGirlName}
      </p>
      <p className="mt-2 md:mt-4 font-cute text-xs md:text-sm uppercase tracking-[0.3em] text-plum-soft">
        Daughter of
      </p>
      <p className="mt-1 font-display text-base md:text-xl text-plum">
        {invitation.fatherName} <span className="text-coral mx-1">✿</span> {invitation.motherName}
      </p>
    </>
  );
}

function HeroDetails() {
  return (
    <div className="mt-4 md:mt-8 grid grid-cols-2 gap-3 md:gap-4 w-full">
      <div className="rounded-2xl glass-card p-3 md:p-4 text-center md:text-left shadow-soft-pastel">
        <div className="flex justify-center md:justify-start items-center gap-2">
          <Cake size={24} className="md:w-[30px] md:h-[30px]" />
          <span className="font-cute text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.28em] text-plum-soft">
            Date
          </span>
        </div>
        <p className="mt-1 font-display text-sm md:text-lg text-plum leading-tight">{invitation.birthdayDate}</p>
      </div>
      <div className="rounded-2xl glass-card p-3 md:p-4 text-center md:text-left shadow-soft-pastel">
        <div className="flex justify-center md:justify-start items-center gap-2">
          <Star size={24} className="md:w-[30px] md:h-[30px]" />
          <span className="font-cute text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.28em] text-plum-soft">
            Venue
          </span>
        </div>
        <p className="mt-1 font-display text-sm md:text-lg text-plum leading-tight truncate">{invitation.venueName}</p>
      </div>
    </div>
  );
}

function HeroImage({ sizeClass }: { sizeClass: string }) {
  return (
    <div className={`relative mx-auto ${sizeClass}`}>
      <div className="absolute -inset-6 md:-inset-8 rounded-[3rem] bg-gradient-rainbow opacity-40 blur-2xl md:blur-3xl" />
      <motion.div
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-[2.5rem] md:rounded-[3rem] p-2.5 md:p-3 bg-gradient-candy shadow-pop ring-4 ring-white/70"
      >
        <div className="flex aspect-[3/4] h-full w-full items-center justify-center rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white">
          <img
            src={birthdayGirlImg}
            alt="Birthday Girl"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute -top-4 -left-6 md:-top-6 md:-left-8"
        animate={{ y: [0, -10, 0], rotate: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Teddy size={60} className="md:w-[80px] md:h-[80px]" />
      </motion.div>
      <motion.div
        className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6"
        animate={{ rotate: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Butterfly size={40} className="md:w-[60px] md:h-[60px]" />
      </motion.div>
      <motion.div
        className="absolute -top-6 right-0 md:-top-8 md:right-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <Star size={34} className="md:w-[44px] md:h-[44px]" />
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative overflow-hidden px-4 pt-10 pb-10 md:px-6 md:pt-28 md:pb-24 lg:min-h-[100dvh] flex flex-col justify-center"
    >
      <FloatingBalloons count={8} />
      <SparkleField count={22} />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        
        {/* MOBILE & TABLET LAYOUT (< 1024px) */}
        <div className="flex flex-col items-center text-center lg:hidden max-w-md mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex flex-col items-center"
          >
            <HeroBadge />
            <HeroHeading />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="w-full my-4 mt-8"
          >
            <HeroImage sizeClass="max-w-[240px] sm:max-w-[280px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full flex flex-col items-center"
          >
            <HeroNameParents />
            <HeroDetails />
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT (>= 1024px) */}
        <div className="hidden lg:grid grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-left"
          >
            <HeroBadge />
            <HeroHeading />
            <div className="my-6">
              <CuteDivider label="🎈" />
            </div>
            <HeroNameParents />
            <HeroDetails />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <HeroImage sizeClass="max-w-sm" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}