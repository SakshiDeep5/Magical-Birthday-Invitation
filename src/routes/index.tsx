import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { OpeningSequence } from "@/components/sections/OpeningSequence";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "You're Invited — A Magical 5th Birthday Awaits" },
      { name: "description", content: "A playful, dreamy birthday invitation full of clouds, balloons and sparkles — crafted with love." },
      { property: "og:title", content: "You're Invited — A Magical 5th Birthday Awaits" },
      { property: "og:description", content: "A playful, dreamy birthday invitation full of clouds, balloons and sparkles — crafted with love." },
    ],
  }),
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  return <OpeningSequence onEnter={() => navigate({ to: "/invitation" })} />;
}
