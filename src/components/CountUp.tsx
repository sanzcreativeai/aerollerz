"use client";
import { useEffect, useRef, useState } from "react";

export default function CountUp({ end, suffix = "", duration = 1600 }: { end: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(end * eased);
          if (p < 1) requestAnimationFrame(tick);
          else setVal(end);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);
  const display = end >= 10 ? Math.round(val) : val.toFixed(1).replace(/\.0$/, "");
  return <span ref={ref}>{display}{suffix}</span>;
}
