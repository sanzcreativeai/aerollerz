export const site = {
  name: "Aerollerz Media & Entertainment",
  short: "Aerollerz",
  url: "https://aerollerz.com",
  founded: 2002,
  years: 24,
  tagline: "Chennai's Event House Since 2002",
  description:
    "Chennai's premier event management, wedding planning and décor studio since 2002. Corporate events, weddings, award ceremonies, brand activations — planned, designed and delivered.",
  founder: {
    name: "Sudhakar Arumugam",
    role: "Founder & Creative Director",
    photo: "/founder/sudhakar.jpg",
    bio: "With 24+ years producing Chennai's most memorable events — from Ministry of Culture's Octave Festival to CIO Association's annual gala — Sudhakar has built Aerollerz into a trusted partner for brands and families who want their event to actually matter.",
  },
  phone: "+91 98407 31631",
  phoneHref: "tel:+919840731631",
  email: "events@aerollerz.com",
  whatsapp: "919840731631",
  instagram: "aerollerz_maaji",
  // Paste full page URLs. Buttons stay hidden until a URL is set.
  facebook: "https://www.facebook.com/gamemaaji.maaji/",
  youtube: "https://www.youtube.com/@aerollerzentertainment148",
  address: {
    street: "No. 40, II Floor, Rama Street, Nungambakkam",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600034",
    country: "India",
    geo: { lat: 13.0604, lng: 80.2415 },
  },
  rating: { value: 4.6, count: 26 },
  hours: "Open 24 hours",
  stats: [
    { value: 24, suffix: "+", label: "Years in Chennai" },
    { value: 500, suffix: "+", label: "Events Delivered" },
    { value: 29, suffix: "", label: "Services" },
    { value: 4.6, suffix: "★", label: "Google rating" },
  ],
};
export const waLink = (text = `Hi Aerollerz, I'd like a quote for an event.`) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
