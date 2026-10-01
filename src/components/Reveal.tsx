"use client";
import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({ children, className = "", delay = 0, dir = "up" }: { children: ReactNode; className?: string; delay?: number; dir?: "up" | "left" }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { el.classList.add("in"); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const base = dir === "left" ? "reveal-left" : "reveal";
  return <div ref={ref} className={`${base} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
