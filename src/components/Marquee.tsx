import PartnerLogo from "./PartnerLogo";

export default function Marquee({ items }: { items: { name: string; logo: string }[] }) {
  const row = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className="relative overflow-hidden py-4" aria-label="Client logos">
      <div className="marquee gap-16 px-4">
        {row.map((it, i) => (
          <div key={i} className="flex items-center"><PartnerLogo name={it.name} logo={it.logo} /></div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
