"use client";
import { useEffect, useRef, useState } from "react";
import { reels } from "@/lib/site-reels";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function ReelsSection() {
  return (
    <section className="section bg-[#0a0e1a] text-white overflow-hidden grain">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[color:var(--color-cyan)] uppercase">Our Best Reels</p>
          <h2 className="font-display mt-3 h-section text-white">Watch us at work.</h2>
          <p className="mt-5 text-white/70 text-lg max-w-xl">Six reels. Six moments. Tap any reel to play it full-screen with sound.</p>
        </Reveal>
      </div>
      <Reveal>
        <div className="mt-14 overflow-x-auto no-scrollbar px-5 md:px-10 pb-2">
          <div className="flex gap-6 w-max pb-6">
            {reels.map((r, i) => <Reel key={r.src} {...r} index={i} />)}
          </div>
        </div>
      </Reveal>
      <div className="text-center mt-10 px-5">
        <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Watch more on Instagram @{site.instagram}</a>
      </div>
    </section>
  );
}

function Reel({ title, category, src, index }: { title: string; category: string; src: string; index: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [missing, setMissing] = useState(false);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const v = ref.current; if (!v) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { v.play().then(() => setPlaying(true)).catch(() => {}); }
      else { v.pause(); setPlaying(false); }
    }, { threshold: 0.4 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const openPopup = () => {
    import("./Lightbox").then((m) => m.openLightbox(reels.map((r) => ({ src: r.src, title: r.title, category: r.category, video: true })), index));
  };

  return (
    <div className="group relative w-[240px] md:w-[280px] lg:w-[320px] shrink-0">
      <button onClick={openPopup} aria-label={`Play ${title} with sound`} className="phone-frame relative shadow-2xl ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-[1.03] w-full block">
        {missing ? (
          <div className="h-full w-full bg-mesh flex items-center justify-center text-sm text-slate-500">Video coming soon</div>
        ) : (
          <video ref={ref} loop muted playsInline preload="metadata" autoPlay onError={() => setMissing(true)} className="h-full w-full object-cover">
            <source src={src} type="video/mp4" />
          </video>
        )}
        {/* Play / sound-on affordance */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>
        {/* "Sound available" badge, always visible */}
        <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden><path d="M3 10v4h4l5 4V6l-5 4H3zm13.5 2a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/></svg>
        </div>
        {!playing && <div className="absolute inset-0 bg-black/20" />}
      </button>
      <div className="mt-4 px-1">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[color:var(--color-cyan)]">{category}</p>
        <h3 className="font-display text-xl md:text-2xl text-white mt-1 leading-tight">{title}</h3>
      </div>
    </div>
  );
}
