"use client";
import Link from "next/link";
import { useRef } from "react";

export default function Logo({ className = "h-14 w-auto", glow = true }: { className?: string; glow?: boolean }) {
  const ref = useRef<HTMLImageElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(600px) rotateX(${-y * 10}deg) rotateY(${x * 14}deg) scale(1.04)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <Link href="/" aria-label="Aerollerz — Home" className="inline-flex items-center group" onMouseMove={onMove} onMouseLeave={reset}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={ref} src="/brand/aerollerz-logo.png" alt="Aerollerz Media & Entertainment" className={`${className} transition-transform duration-300`}
           style={glow ? { filter: "drop-shadow(0 0 10px rgba(165,108,193,0.5)) drop-shadow(0 0 20px rgba(34,211,238,0.3))", transformOrigin: "center" } : undefined} />
    </Link>
  );
}
