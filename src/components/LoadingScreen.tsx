"use client";
import { useEffect, useState } from "react";
export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);
  useEffect(() => {
    try { if (sessionStorage.getItem("intro") === "1") { setVisible(false); return; } sessionStorage.setItem("intro", "1"); } catch {}
    const t1 = setTimeout(() => setHiding(true), 1600);
    const t2 = setTimeout(() => setVisible(false), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  if (!visible) return null;
  return (
    <div aria-hidden className={`fixed inset-0 z-[100] flex items-center justify-center bg-mesh transition-opacity duration-500 ${hiding ? "opacity-0 pointer-events-none -translate-y-4" : "opacity-100"}`} style={{ transition: "opacity .5s ease, transform .5s ease" }}>
      <div className="flex flex-col items-center animate-fade-up">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/aerollerz-logo.png" alt="Aerollerz" className="h-40 md:h-56 w-auto" />
        <div className="mt-4 flex gap-2">
          <span className="dot dot-cyan" />
          <span className="dot dot-pink" />
          <span className="dot dot-purple" />
        </div>
      </div>
    </div>
  );
}
