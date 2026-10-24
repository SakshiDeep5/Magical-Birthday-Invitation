import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";
import { CuteDivider } from "@/components/decorations";
import { Flower, Butterfly } from "@/components/illustrations";

export function InvitationLetter() {
  return (
    <section id="letter" className="relative px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, rotateX: 40, y: 60 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{ transformPerspective: 1200 }}
          className="relative rounded-[3rem] glass-card p-10 md:p-16 shadow-soft-pastel"
        >
          <Flower className="absolute -top-8 -left-6" size={70} />
          <Flower className="absolute -top-6 -right-8" size={60} color="oklch(0.88 0.07 300)" />
          <Butterfly className="absolute -bottom-6 left-10" size={54} />
          <Butterfly className="absolute -bottom-8 right-8" size={44} color="oklch(0.9 0.06 230)" />

          <div className="text-center">
            <p className="font-cute text-xs font-semibold uppercase tracking-[0.4em] text-plum-soft">
              A Little Note
            </p>
            <h3 className="mt-3 font-script text-5xl md:text-6xl text-coral">
              Dear {invitation.guestName}
            </h3>
            <CuteDivider label="🎀" />
            <p className="font-display text-lg md:text-2xl leading-relaxed text-plum">
              {invitation.invitationMessage}
            </p>
            <p className="mt-8 font-script text-3xl text-plum-soft">
              With love, {invitation.birthdayGirlName} & family
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}