"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? h.scrollTop / total : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[90] h-[3px] bg-transparent">
      <div className="h-full bg-gradient-brand" style={{ width: `${p * 100}%` }} />
    </div>
  );
}
