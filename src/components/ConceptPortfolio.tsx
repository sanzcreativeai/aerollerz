"use client";
import SafeImage from "./SafeImage";
import Reveal from "./Reveal";
import { openLightbox } from "./Lightbox";

const items = [
  { src: "/portfolio/portfolio-01.jpg", title: "Brand Experience Pavilion", category: "Brand Activations" },
  { src: "/portfolio/portfolio-02.jpg", title: "Luxury Car Launch — Sparks & Reveal", category: "Product Launches" },
  { src: "/portfolio/portfolio-03.jpg", title: "Corporate Gala Dinner", category: "Corporate Events" },
  { src: "/portfolio/portfolio-04.jpg", title: "Multi-Model Auto Launch", category: "Product Launches" },
  { src: "/portfolio/portfolio-05.jpg", title: "Daytime Corporate Workshop", category: "Training" },
  { src: "/portfolio/portfolio-06.jpg", title: "Beachside Private Celebration", category: "Private Events" },
  { src: "/portfolio/portfolio-07.jpg", title: "Ballroom Conference", category: "Conferences" },
  { src: "/portfolio/portfolio-08.jpg", title: "Grand Auditorium Summit", category: "Summits" },
  { src: "/portfolio/portfolio-09.jpg", title: "Mall Brand Activation", category: "Brand Activations" },
  { src: "/portfolio/portfolio-10.jpg", title: "Award Ceremony Stage", category: "Award Ceremonies" },
  { src: "/portfolio/portfolio-11.jpg", title: "Grand Reveal Spotlight", category: "Product Launches" },
  { src: "/portfolio/portfolio-12.jpg", title: "Outdoor Team Building", category: "Team Building" },
  { src: "/portfolio/portfolio-13.jpg", title: "Press Conference", category: "Press Conferences" },
  { src: "/portfolio/portfolio-14.jpg", title: "Blue-Stage Conference", category: "Conferences" },
  { src: "/portfolio/portfolio-15.jpg", title: "Enterprise Keynote", category: "Corporate Events" },
  { src: "/portfolio/portfolio-16.jpg", title: "Formal Ceremony Hall", category: "Award Ceremonies" },
];

export default function ConceptPortfolio() {
  return (
    <section className="section bg-cream">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">Our Capabilities</p>
          <h2 className="font-display mt-3 h-section">What we build.</h2>
          <p className="mt-5 text-slate-600 text-lg max-w-xl">From product launches to brand activations — the formats, scales and stages we deliver across Chennai and India.</p>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.src} delay={(i % 4) * 50}>
              <button onClick={() => openLightbox(items, i)} className="group card card-hover overflow-hidden text-left w-full">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <SafeImage src={it.src} alt={`${it.title} — ${it.category} by Aerollerz Chennai`} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-mono text-[9px] tracking-widest uppercase text-[color:var(--color-cyan)]">{it.category}</p>
                    <h3 className="font-display text-white text-lg md:text-xl mt-1 leading-tight">{it.title}</h3>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
