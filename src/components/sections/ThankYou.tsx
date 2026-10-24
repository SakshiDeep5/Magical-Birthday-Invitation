import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";
import { CuteDivider, ConfettiRain, SparkleField } from "@/components/decorations";
import { Teddy, Bunny, Heart, Balloon } from "@/components/illustrations";

export function ThankYou() {
  return (
    <section id="thanks" className="relative overflow-hidden px-6 py-28">
      <ConfettiRain count={22} />
      <SparkleField count={14} />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <div className="flex items-center justify-center gap-4">
          <Teddy size={80} />
          <Balloon size={70} color="oklch(0.9 0.07 5)" />
          <Bunny size={80} />
        </div>
        <h3 className="mt-6 font-script text-6xl md:text-7xl text-candy-gradient">Thank You</h3>
        <CuteDivider label="💖" />
        <p className="font-display text-xl md:text-2xl text-plum">
          We can't wait to celebrate with you, {invitation.guestName}.
        </p>

      </motion.div>
    </section>
  );
}