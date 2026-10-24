import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { InvitationLetter } from "@/components/sections/InvitationLetter";
import { Countdown } from "@/components/sections/Countdown";
import { Journey } from "@/components/sections/Journey";
import { Gallery } from "@/components/sections/Gallery";
import { BirthdayVideo } from "@/components/sections/BirthdayVideo";
import { EventDetails } from "@/components/sections/EventDetails";
import { Schedule } from "@/components/sections/Schedule";
import { Activities } from "@/components/sections/Activities";
import { Family } from "@/components/sections/Family";
import { Blessings } from "@/components/sections/Blessings";
import { WishesWall } from "@/components/sections/WishesWall";
import { Contact } from "@/components/sections/Contact";
import { RSVP } from "@/components/sections/RSVP";
import { ThankYou } from "@/components/sections/ThankYou";
import { MusicToggle } from "@/components/sections/MusicToggle";
import { FloatingClouds, FloatingButterflies } from "@/components/decorations";

export const Route = createFileRoute("/invitation")({
  head: () => ({
    meta: [
      { title: "The Invitation — A Magical Birthday Celebration" },
      { name: "description", content: "Every sweet detail of the birthday celebration — schedule, activities, gallery and RSVP." },
      { property: "og:title", content: "The Invitation" },
      { property: "og:description", content: "Balloons, sparkles and love — join us for a magical birthday." },
    ],
  }),
  component: InvitationPage,
});

function InvitationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* page-wide ambient decorations */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <FloatingClouds count={4} />
        <FloatingButterflies count={5} />
      </div>

      {/* Cinematic entrance: curtain-lift + fade + scale */}
      <motion.main
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative z-10"
      >
        <Hero />
        <Countdown />
        <InvitationLetter />
        <Journey />
        <Gallery />
        <BirthdayVideo />
        <EventDetails />
        <Schedule />
        <Activities />
        <Family />
        <Blessings />
        <WishesWall />
        <Contact />
        <RSVP />
        <ThankYou />
      </motion.main>

      <MusicToggle />

      {/* opening curtain overlay that lifts on load */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1], delay: 0.1 }}
        className="pointer-events-none fixed inset-0 z-[60] bg-gradient-sky"
      />
    </div>
  );
}