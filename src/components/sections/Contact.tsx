import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";
import { CuteDivider, SparkleField } from "@/components/decorations";
import { Heart, Star, Sparkle, Teddy, Cloud, Balloon, Flower } from "@/components/illustrations";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 sm:px-6 py-32">
      <SparkleField count={15} />

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-50 z-0 overflow-hidden">
        <motion.div className="absolute top-10 left-[3%] hidden sm:block" animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
          <Cloud size={80} />
        </motion.div>
        <motion.div className="absolute bottom-20 right-[5%] hidden sm:block" animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <Balloon size={70} color="oklch(0.9 0.07 165)" />
        </motion.div>
        <motion.div className="absolute top-1/3 right-[10%]" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
          <Flower size={36} color="oklch(0.9 0.09 55)" />
        </motion.div>
        <motion.div className="absolute bottom-1/4 left-[8%]" animate={{ scale: [0.8, 1, 0.8], rotate: 180 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }}>
          <Star size={26} color="oklch(0.94 0.1 95)" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-xl text-center mt-8">
        {/* Heading */}
        <p className="font-script text-3xl md:text-4xl text-coral">Questions?</p>
        <h3 className="mt-2 font-display text-4xl md:text-5xl text-plum">Get in Touch</h3>
        <CuteDivider label="📞" />

        <div className="relative mt-16 pt-12">
          {/* Teddy sitting on top of the card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 z-20 origin-bottom"
          >
            <motion.div
              animate={{ rotate: [-3, 3, -3], y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Teddy size={140} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-white/60 p-[3px] backdrop-blur-xl shadow-pop group"
          >
            {/* Subtle Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-rainbow opacity-30 group-hover:opacity-60 transition-opacity duration-700" />

            <div className="relative rounded-[2.35rem] bg-white/80 p-8 sm:p-12 text-center overflow-hidden h-full w-full">
              
              <motion.span
                className="absolute top-4 right-4 opacity-50"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Sparkle size={24} color="oklch(0.94 0.1 95)" />
              </motion.span>
              <motion.span
                className="absolute bottom-6 left-6 opacity-50"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Star size={20} color="oklch(0.9 0.07 165)" />
              </motion.span>

              <h4 className="font-display text-2xl text-plum mb-1">
                {invitation.motherName} & {invitation.fatherName}
              </h4>
              <p className="font-cute text-sm text-plum-soft mb-4 px-4">
                We can't wait to celebrate with you! If you need any help finding the venue or have questions, feel free to reach out.
              </p>

              {/* Phone number display */}
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white/60 px-4 py-2 ring-1 ring-white/80 shadow-soft-pastel mb-2">
                <span className="text-base">📞</span>
                <span className="font-display text-lg text-plum">{invitation.contactPhone}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 mt-6 justify-center w-full max-w-sm mx-auto sm:max-w-none">
                
                {/* Call Button */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`tel:${invitation.contactPhone}`}
                  className="group/btn relative flex flex-1 items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#FFE5EC] to-[#FFC2D1] p-[2px] shadow-[0_8px_20px_rgba(255,194,209,0.5)] transition-shadow hover:shadow-[0_12px_25px_rgba(255,194,209,0.7)]"
                >
                  <div className="flex h-full w-full items-center justify-center gap-3 rounded-full bg-white/20 px-6 py-4 backdrop-blur-sm">
                    <motion.span className="text-xl drop-shadow-sm" whileHover={{ rotate: [-10, 10, -10], scale: 1.1 }} transition={{ duration: 0.5 }}>
                      📞
                    </motion.span>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="font-cute text-[10px] font-bold uppercase tracking-wider text-plum-soft/80">Direct Line</span>
                      <span className="font-display text-lg text-plum">Call Us</span>
                    </div>
                  </div>
                </motion.a>

                {/* WhatsApp Button */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`https://wa.me/${invitation.contactWhatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn relative flex flex-1 items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#E8F8F5] to-[#C2F0E5] p-[2px] shadow-[0_8px_20px_rgba(194,240,229,0.5)] transition-shadow hover:shadow-[0_12px_25px_rgba(194,240,229,0.7)]"
                >
                  <div className="flex h-full w-full items-center justify-center gap-3 rounded-full bg-white/20 px-6 py-4 backdrop-blur-sm">
                    <motion.span className="text-xl drop-shadow-sm" whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
                      💬
                    </motion.span>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="font-cute text-[10px] font-bold uppercase tracking-wider text-[#3D8F70]/80">Message</span>
                      <span className="font-display text-lg text-[#1E5F3B]">WhatsApp</span>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
