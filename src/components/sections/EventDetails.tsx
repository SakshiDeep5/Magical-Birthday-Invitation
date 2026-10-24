import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";
import { CuteDivider } from "@/components/decorations";
import { Cake, Star, HotAirBalloon, Rainbow } from "@/components/illustrations";

export function EventDetails() {
  const items = [
    { icon: <Cake size={40} />, label: "Date", value: invitation.birthdayDate },
    { icon: <Star size={40} />, label: "Time", value: invitation.birthdayTime },
    { icon: <HotAirBalloon size={40} />, label: "Venue", value: invitation.venueName },
    { icon: <Rainbow size={40} />, label: "Address", value: invitation.venueAddress },
  ];
  return (
    <section id="details" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-script text-4xl md:text-5xl text-coral">Where the Magic Happens</p>
          <h3 className="mt-2 font-display text-3xl md:text-5xl text-plum">Event Details</h3>
          <CuteDivider label="🗺️" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex items-start gap-4 rounded-[2rem] glass-card card-glow p-6 cursor-default transition-transform duration-300"
              style={{ animationDelay: `${i * 1.2}s` }}
            >
              <div className="rounded-2xl bg-gradient-candy p-3 ring-2 ring-white/80 transition-transform duration-300 hover:scale-110">{it.icon}</div>
              <div>
                <p className="font-cute text-[10px] font-bold uppercase tracking-[0.3em] text-plum-soft">
                  {it.label}
                </p>
                <p className="mt-1 font-display text-xl text-plum">{it.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href={invitation.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 mx-auto flex w-fit items-center gap-3 rounded-full bg-gradient-candy px-8 py-4 font-cute text-sm font-semibold uppercase tracking-[0.25em] text-plum shadow-pop ring-2 ring-white/70"
        >
          <Rainbow size={26} />
          Open Google Map
        </motion.a>

      </div>
    </section>
  );
}