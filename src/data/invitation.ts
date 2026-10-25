// Placeholder data — every field mirrors a backend variable and will be
// replaced dynamically. Do NOT hardcode content in components.

import birthdayGirl from "@/Assets/birthday-girl.png";
import birthdayGirlVideo from "@/Assets/girl-video.mp4";
import g2 from "@/Assets/first-smile.jpg";
import g3 from "@/Assets/cake-face.jpg";
import g4 from "@/Assets/bubble-bath.jpg";
import g5 from "@/Assets/beach-day.png";
import g6 from "@/Assets/ballet-class.png";
import g7 from "@/Assets/painting-fun.jpg";
import g9 from "@/Assets/fairy-dress.jpg";
import g10 from "@/Assets/sleepy-hug.jpg";
import newBorn from "@/Assets/Newborn-Baby.jpg";
import firstStep from "@/Assets/first-step.jpg";
import firstWords from "@/Assets/first-words.png";
import beachDay from "@/Assets/beach-day.png";
import balletClass from "@/Assets/ballet-class.png";
import f1 from "@/Assets/Father.jpg";
import f2 from "@/Assets/mother.jpg";
import f3 from "@/Assets/brother.jpg";
import f4 from "@/Assets/nani.jpg";
import f5 from "@/Assets/Dadu.jpg";


export const invitation = {
  guestName: "Priya",
  birthdayGirlName: "Aarohi",
  birthdayAge: "5",
  fatherName: "Rohan Sharma",
  motherName: "Priya Sharma",
  birthdayDate: "Saturday, 20th December 2026",
  birthdayTime: "6:00 PM onwards",
  venueName: "The Little Wonderland",
  venueAddress: "42 Rainbow Lane, Green Park, New Delhi 110016",
  googleMapsLink: "https://maps.google.com/?q=Green+Park+New+Delhi",
  googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6!2d77.20!3d28.55",
  rsvpLink: "#rsvp",
  theme: "Fairyland & Unicorns",
  backgroundMusic: "/music/lullaby.mp3",
  invitationMessage:
    "It's my magical fifth birthday! Come join me for an afternoon full of unicorns, cupcakes, glitter, and giggles. Wear your favourite fairy colours and bring your biggest smile — I can't wait to twirl and celebrate with you!",
  blessing:
    "May your days sparkle brighter than fairy dust, your dreams grow taller than the tallest rainbow, and your heart stay forever full of laughter, love and little pockets of magic.",
  quote: "Five today, magical always ✨",
  dressCode: "Pastel fairytale — think pink, lavender & sparkle",
  parkingInfo: "Free valet parking available at the venue entrance",
  contactPhone: "+91 98765 43210",
  contactWhatsapp: "919876543210",
  heroPortrait: birthdayGirl,
  birthdayVideo: birthdayGirlVideo,

  timeline: [
    { year: "2021", title: "Hello, World!", description: "Aarohi arrived on a sunny December morning — the tiniest, sweetest bundle of joy.", photo: newBorn },
    { year: "2022", title: "First Little Steps", description: "Wobbly steps, giggles, and a whole lot of chasing around the living room.", photo: firstStep },
    { year: "2023", title: "Words & Wonder", description: "Mama, Papa, unicorn — her vocabulary grew as fast as her curiosity.", photo: firstWords },
    { year: "2024", title: "Little Explorer", description: "Playgrounds, seashells and painting the walls with imagination.", photo: beachDay },
    { year: "2025", title: "Ballet & Butterflies", description: "Twirled into her first ballet class and made a garden of butterfly friends.", photo: balletClass },
    { year: "2026", title: "Turning Five!", description: "Kind, curious and full of sparkle — ready for her biggest celebration yet.", photo: birthdayGirl },
  ],

  gallery: [
    { src: g2, caption: "That very first smile" },
    { src: g3, caption: "Cake face champion" },
    { src: g4, caption: "Bubble adventures" },
    { src: g5, caption: "Toes in the sand" },
    { src: g6, caption: "Twirls & tutus" },
    { src: g7, caption: "Little Picasso" },
    { src: g9, caption: "Fairy in the garden" },
    { src: g10, caption: "Sleepy cuddles" },
  ],

  schedule: [
    { time: "5:30 PM", title: "Guests Arrive", description: "Welcome drinks, photo booth and pixie-dust glitter station." },
    { time: "6:00 PM", title: "Fairy Parade", description: "Grand entrance of the birthday girl with balloons & bubbles." },
    { time: "6:30 PM", title: "Games & Giggles", description: "Treasure hunt, musical statues and unicorn ring toss." },
    { time: "7:15 PM", title: "Face Painting & Crafts", description: "Butterfly wings, glitter tattoos and cupcake decorating." },
    { time: "8:00 PM", title: "Cake Cutting", description: "Blowing out five sparkly candles — make a wish!" },
    { time: "8:30 PM", title: "Dinner & Dance", description: "Yummy bites, sweet treats and a mini disco to close the night." },
  ],

  activities: [
    { name: "Magic Show", description: "A real magician with rabbits, wands & wow moments.", icon: "sparkle" },
    { name: "Balloon Twisting", description: "Take home your own balloon puppy, sword or crown.", icon: "balloon" },
    { name: "Craft Corner", description: "Paint tiaras, decorate cupcakes and glue on all the glitter.", icon: "paint" },
    { name: "Kids Disco", description: "Bubble machines, twinkly lights and non-stop dancing.", icon: "music" },
    { name: "Treasure Hunt", description: "Follow the fairy clues to find the hidden treasure chest.", icon: "game" },
  ],

  family: [
    { role: "Papa", name: "Rohan Sharma", photo: f1 },
    { role: "Mother", name: "Priya Sharma", photo: f2 },
    { role: "Big Brother", name: "Aarav", photo: f3 },
    { role: "Nani", name: "Sunita Verma", photo: f4 },
    { role: "Dadu", name: "Arun Sharma", photo: f5 },
  ],

  wishes: [
    { from: "Mama & Papa", message: "You are our sunshine, our little star and the best thing that has ever happened to us. Happy 5th birthday, our precious girl!" },
    { from: "Aarav Bhaiya", message: "Happy birthday to the best little sister in the whole wide world. Thanks for sharing your candies with me… mostly." },
    { from: "Nani", message: "May you always giggle, twirl and dream big, my little pari. Nani loves you more than all the laddoos in the world." },
    { from: "Aunt Meera", message: "Five already? Wasn't it just yesterday you were tiny? Wishing you a year full of unicorns, rainbows and every kind of magic." },
    { from: "Uncle Karan", message: "Happy birthday, superstar! Keep dancing, keep dreaming and never stop asking a million questions." },
    { from: "Riya (BFF)", message: "You are my best friend forever and ever. Let's eat lots of cake and dance till our feet hurt!" },
  ],
};

export type Invitation = typeof invitation;