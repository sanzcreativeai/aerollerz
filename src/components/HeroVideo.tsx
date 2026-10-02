"use client";
import { useEffect, useRef, useState } from "react";
const SRC = ["/media/hero/hero-1.mp4", "/media/hero/hero-2.mp4", "/media/hero/hero-3.mp4"];

export default function HeroVideo() {
  const refs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const [active, setActive] = useState(0);

  useEffect(() => {
    // start all three, then crossfade every 7s so each gets screen time
    refs.forEach((r) => r.current?.play().catch(() => {}));
    const id = setInterval(() => setActive((n) => (n + 1) % SRC.length), 7000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-black">
      {SRC.map((src, i) => (
        <video
          key={src}
          ref={refs[i]}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out"
          style={{ opacity: active === i ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/70" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}
