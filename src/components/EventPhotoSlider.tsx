"use client";
import { useState } from "react";
import SafeImage from "./SafeImage";
import Reveal from "./Reveal";
import { openLightbox } from "./Lightbox";

const photos = [
  { src: "/instagram-events/event-10.jpg", title: "Rotary Awards & Thanksgiving", category: "Award Ceremonies" },
  { src: "/instagram-events/event-11.jpg", title: "Octave 2023 — Festival of North East", category: "Government & Cultural" },
  { src: "/instagram-events/event-12.jpg", title: "Octave Cultural Showcase", category: "Cultural Events" },
  { src: "/instagram-events/event-13.jpg", title: "Accsys 5th Annual Fest", category: "Corporate Events" },
  { src: "/instagram-events/event-14.jpg", title: "Live Stage Production", category: "Entertainment" },
  { src: "/instagram-events/event-15.jpg", title: "Accsys Grand Finale", category: "Award Ceremonies" },
  { src: "/instagram-events/event-16.jpg", title: "Choreographed Spectacle", category: "Live Entertainment" },
  { src: "/instagram-events/event-17.jpg", title: "Signature Dance Production", category: "Stage Shows" },
  { src: "/instagram-events/event-18.jpg", title: "Fire & Lights Performance", category: "Live Entertainment" },
  { src: "/instagram-events/event-19.jpg", title: "Octave Festival — Group Portrait", category: "Cultural Events" },
];

export default function EventPhotoSlider() {
  const [i, setI] = useState(0);
  const prev = () => setI((n) => (n - 1 + photos.length) % photos.length);
  const next = () => setI((n) => (n + 1) % photos.length);
  const p = photos[i];
  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">Real Events</p>
              <h2 className="font-display mt-3 h-section">On the floor.</h2>
              <p className="mt-5 text-slate-600 text-lg max-w-xl">Swipe through the real events we&apos;ve delivered — tap any photo to see it full-screen.</p>
            </div>
            <div className="flex items-center gap-3">
              <button aria-label="Previous photo" onClick={prev} className="h-12 w-12 rounded-full border border-slate-200 text-slate-800 hover:border-[color:var(--color-cyan)] hover:text-[color:var(--color-brand-2)] transition flex items-center justify-center text-2xl">‹</button>
              <span className="font-mono text-sm text-slate-500 w-16 text-center">{String(i + 1).padStart(2, "0")} / {photos.length}</span>
              <button aria-label="Next photo" onClick={next} className="h-12 w-12 rounded-full border border-slate-200 text-slate-800 hover:border-[color:var(--color-cyan)] hover:text-[color:var(--color-brand-2)] transition flex items-center justify-center text-2xl">›</button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <button
            onClick={() => openLightbox(photos, i)}
            className="relative block w-full card overflow-hidden group shadow-2xl"
            aria-label={`Open ${p.title} full view`}
          >
            <div className="relative aspect-[16/9]">
              <SafeImage src={p.src} alt={`${p.title} — produced by Aerollerz in Chennai`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="eager" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-left">
                <p className="font-mono text-[10px] tracking-widest uppercase text-[color:var(--color-cyan)]">{p.category}</p>
                <h3 className="font-display text-white text-3xl md:text-5xl mt-2">{p.title}</h3>
                <p className="mt-3 text-white/70 text-sm">Click to view full-screen</p>
              </div>
            </div>
          </button>
          {/* Thumbnail strip */}
          <div className="mt-6 grid grid-cols-5 md:grid-cols-10 gap-2">
            {photos.map((ph, idx) => (
              <button key={ph.src} onClick={() => setI(idx)} aria-label={`Jump to ${ph.title}`}
                className={`relative aspect-square overflow-hidden rounded-lg transition-all ${idx === i ? "ring-2 ring-[color:var(--color-brand-2)] scale-[1.03]" : "opacity-60 hover:opacity-100"}`}>
                <SafeImage src={ph.src} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
