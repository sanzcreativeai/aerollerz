"use client";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import SafeImage from "./SafeImage";
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

export default function EventPhotosGallery() {
  const col1 = useRef<HTMLDivElement>(null);
  const col2 = useRef<HTMLDivElement>(null);
  const col3 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = (col1.current?.parentElement?.parentElement as HTMLElement | null);
    const section = el?.closest("section") as HTMLElement | null;
    const onScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // only parallax while section is in viewport, and cap at ±40px
      const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight));
      const cap = 40;
      if (col1.current) col1.current.style.transform = `translate3d(0, ${Math.max(-cap, Math.min(cap, progress * -20))}px, 0)`;
      if (col2.current) col2.current.style.transform = `translate3d(0, ${Math.max(-cap, Math.min(cap, progress * 12))}px, 0)`;
      if (col3.current) col3.current.style.transform = `translate3d(0, ${Math.max(-cap, Math.min(cap, progress * -28))}px, 0)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const col = [photos.slice(0, 4), photos.slice(4, 7), photos.slice(7, 10)];
  return (
    <section className="section overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">Moments</p>
          <h2 className="font-display mt-3 h-section">Chennai, captured.</h2>
          <p className="mt-5 text-slate-600 text-lg max-w-xl">10 real moments from events we&apos;ve produced. Click any to see it full-screen.</p>
        </Reveal>
      </div>
      <div className="mx-auto max-w-7xl px-5 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
          {col.map((groupArr, i) => (
            <div key={i} ref={i === 0 ? col1 : i === 1 ? col2 : col3} className="space-y-4 md:space-y-6">
              {groupArr.map((p, j) => {
                const idx = photos.indexOf(p);
                return (
                  <Reveal key={p.src} delay={j * 70}>
                    <button onClick={() => openLightbox(photos, idx)} className="group relative overflow-hidden rounded-2xl shadow-lg block w-full" aria-label={`Open ${p.title}`}>
                      <SafeImage src={p.src} alt={`${p.title} — produced by Aerollerz in Chennai`} className="w-full h-auto object-cover transition duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 text-left">
                        <p className="font-mono text-[10px] tracking-widest uppercase text-[color:var(--color-cyan)]">{p.category}</p>
                        <h3 className="font-display text-white text-xl mt-1">{p.title}</h3>
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
