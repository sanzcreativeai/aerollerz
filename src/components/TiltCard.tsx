"use client";
import { useRef, type ReactNode } from "react";

/** Subtle 3D tilt — desktop only, cheap enough to not need an rAF */
export default function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateZ(0)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className={`tilt ${className}`}>{children}</div>;
}
