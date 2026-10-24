import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";
import { CuteDivider } from "@/components/decorations";
import { Star, Sparkle } from "@/components/illustrations";

export function BirthdayVideo() {
  return (
    <section id="video" className="relative px-4 sm:px-6 py-24 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-script text-4xl md:text-5xl text-coral">A Little Message</p>
        <h3 className="mt-2 font-display text-3xl md:text-5xl text-plum">From the Birthday Girl</h3>
        <CuteDivider label="🎬" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mt-10 mx-auto max-w-3xl rounded-[2.5rem] bg-gradient-candy p-3 shadow-pop ring-4 ring-white/70"
        >
          <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-black">
            <video
              src={invitation.birthdayVideo}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              aria-label="Birthday video message from the birthday girl"
            />
          </div>
          <Star className="absolute -top-6 -left-6 animate-float" size={50} />
          <Sparkle className="absolute -bottom-6 -right-6 animate-float" size={44} />
        </motion.div>
      </div>
    </section>
  );
}