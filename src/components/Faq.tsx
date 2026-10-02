"use client";
import { useState } from "react";
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-3">
      {items.map((f, i) => (
        <div key={f.q} className="card">
          <h3>
            <button id={`faq-b-${i}`} aria-expanded={open === i} aria-controls={`faq-p-${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium">
              <span>{f.q}</span><span className="text-[color:var(--color-brand-2)] text-xl font-light">{open === i ? "−" : "+"}</span>
            </button>
          </h3>
          <div id={`faq-p-${i}`} role="region" hidden={open !== i} className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{f.a}</div>
        </div>
      ))}
    </div>
  );
}
