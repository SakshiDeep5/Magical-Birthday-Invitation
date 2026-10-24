import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";
import { CuteDivider, PlaceholderPhoto } from "@/components/decorations";
import { Cake, Star, HotAirBalloon, Cupcake, Unicorn, PartyHat } from "@/components/illustrations";

const ICONS = [Star, Cake, Cupcake, HotAirBalloon, Unicorn, PartyHat];

export function Journey() {
  return (
    <section id="journey" className="relative px-6 py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-script text-4xl md:text-5xl text-coral">The Story So Far</p>
          <h3 className="mt-2 font-display text-3xl md:text-5xl text-plum">Our Little Journey</h3>
          <CuteDivider label="🎠" />
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-rainbow opacity-70 hidden md:block" />
          <div className="space-y-16">
            {invitation.timeline.map((m, i) => {
              const Icon = ICONS[i % ICONS.length];
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: left ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8 }}
                  className={`relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 ${left ? "" : "md:[direction:rtl]"}`}
                >
                  <div className="md:[direction:ltr] rounded-[2rem] p-2 bg-gradient-candy ring-4 ring-white/70 shadow-pop">
                    <PlaceholderPhoto
                      label={m.photo}
                      aspect="aspect-[4/3]"
                      tint={i % 2 === 0 ? "candy" : "sunrise"}
                      className="rounded-[1.5rem]"
                    />
                  </div>
                  <div className="md:[direction:ltr] rounded-[2rem] p-[3px] bg-gradient-candy shadow-pop">
                    <div className="h-full rounded-[1.75rem] glass-card p-6 md:p-8">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-white/70 p-2">
                          <Icon size={40} />
                        </div>
                        <span className="font-cute text-xs font-bold uppercase tracking-[0.3em] text-coral">
                          {m.year}
                        </span>
                      </div>
                      <h4 className="mt-3 font-display text-2xl md:text-3xl text-plum">{m.title}</h4>
                      <p className="mt-2 font-cute text-plum-soft">{m.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-4 ring-coral md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}