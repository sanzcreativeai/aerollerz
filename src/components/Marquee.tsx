export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className="relative overflow-hidden py-4" aria-label="Client logos">
      <div className="marquee gap-16 px-4">
        {row.map((it, i) => (
          <div key={i} className="whitespace-nowrap font-display text-xl md:text-2xl text-slate-500 tracking-wider">{it}</div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
