"use client";
import { useEffect, useState, type ReactNode } from "react";

type Item = { src: string; title?: string; category?: string; video?: boolean };
type Ctx = { open: (items: Item[], index: number) => void };

let ext: Ctx["open"] = () => {};
export const openLightbox = (items: Item[], index: number) => ext(items, index);

export default function LightboxRoot({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => { ext = (its, ix) => { setItems(its); setI(ix); setOpen(true); }; return () => { ext = () => {}; }; }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowRight") setI((n) => (n + 1) % items.length);
      else if (e.key === "ArrowLeft") setI((n) => (n - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open, items.length]);
  const current = items[i];
  return (
    <>
      {children}
      {open && current && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur flex items-center justify-center p-4 animate-fade-up" onClick={() => setOpen(false)}>
          <button aria-label="Close" onClick={() => setOpen(false)} className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center text-2xl">×</button>
          {items.length > 1 && (
            <>
              <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); setI((n) => (n - 1 + items.length) % items.length); }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center text-2xl">‹</button>
              <button aria-label="Next" onClick={(e) => { e.stopPropagation(); setI((n) => (n + 1) % items.length); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center text-2xl">›</button>
            </>
          )}
          <div className="relative max-w-[92vw] max-h-[88vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {current.video ? (
              <video key={current.src} src={current.src} autoPlay controls playsInline className="max-h-[85vh] max-w-full rounded-xl shadow-2xl bg-black" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={current.src} alt={current.title || ""} className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl" />
            )}
            {(current.title || current.category) && (
              <div className="mt-4 text-center">
                {current.category && <p className="font-mono text-[10px] tracking-widest uppercase text-[color:var(--color-cyan)]">{current.category}</p>}
                {current.title && <p className="text-white text-lg mt-1 font-display">{current.title}</p>}
              </div>
            )}
            {items.length > 1 && <p className="text-white/40 text-xs mt-2">{i + 1} / {items.length}</p>}
          </div>
        </div>
      )}
    </>
  );
}
