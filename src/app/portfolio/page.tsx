import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/lib/cases";
import { site } from "@/lib/site";
import SafeImage from "@/components/SafeImage";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Work — Weddings, Corporate & Private Events | Chennai",
  description: "Browse weddings, corporate events, award ceremonies, brand activations and cultural events delivered by Aerollerz across Chennai and India.",
  alternates: { canonical: `${site.url}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio" }])} />
      <section className="section mx-auto max-w-7xl px-5 pt-32">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio" }]} />
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase mt-6">Portfolio</p>
          <h1 className="font-display mt-3 text-5xl md:text-7xl font-bold leading-[0.95]">Our Work</h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">Signature events delivered by Aerollerz — corporate conferences, luxury weddings, cultural festivals, brand activations and private celebrations across Chennai and India.</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 60}>
              <TiltCard className="card card-hover overflow-hidden h-full group">
                <Link href={`/portfolio/${c.slug}`} className="block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SafeImage src={c.hero} alt={`${c.title} — case study`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-xs text-[color:var(--color-brand-2)]">{c.category} · {c.year}</p>
                    <h3 className="font-display text-xl font-bold mt-1">{c.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{c.client}</p>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
