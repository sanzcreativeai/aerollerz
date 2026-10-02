import { getPartners } from "@/lib/partners";
import PartnerLogo from "./PartnerLogo";
import Reveal from "./Reveal";

export default function PartnersSection() {
  const partners = getPartners();
  if (!partners.length) return null;
  return (
    <section className="section bg-slate-50" aria-labelledby="partners-title">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">Clients We&apos;ve Worked With</p>
          <h2 id="partners-title" className="font-display mt-3 text-4xl md:text-6xl font-bold">Our Trusted Partners</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((p) => (
              <div key={p.logo} className="card flex h-28 items-center justify-center p-5">
                <PartnerLogo name={p.name} logo={p.logo} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
