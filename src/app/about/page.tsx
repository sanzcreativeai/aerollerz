import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import SafeImage from "@/components/SafeImage";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Breadcrumb from "@/components/Breadcrumb";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Aerollerz | Chennai Event Management Since 2002",
  description: `24+ years of events in Chennai. Founder ${site.founder.name} on the team, process and events behind Aerollerz Media & Entertainment.`,
  alternates: { canonical: `${site.url}/about` },
};

const milestones = [
  { year: "2002", t: "Founded in Chennai", d: "Sudhakar Arumugam starts Aerollerz Media & Entertainment, producing events for Chennai businesses and families." },
  { year: "2008", t: "First major corporate wins", d: "First multi-crore corporate conferences in Chennai hotels." },
  { year: "2015", t: "Design studio in-house", d: "Décor and set design brought in-house — mandap, stage and floral design as a dedicated capability." },
  { year: "2019", t: "Pan-India corporate roadshows", d: "Travel production kit built; corporate roadshows handled across Tamil Nadu, Karnataka, Maharashtra." },
  { year: "2023", t: "Ministry of Culture — Octave Festival", d: "Produced the Chennai leg of Octave, the Festival of North East, under Ministry of Culture, Government of India." },
  { year: "2024", t: "CIO Association & Accsys productions", d: "Signature corporate performances and annual fests for Chennai's largest enterprises." },
  { year: "2026", t: "500+ events delivered", d: "Over half a thousand events across weddings, corporate, cultural, and private celebrations." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "About", href: "/about" }])} />
      <section className="section mx-auto max-w-7xl px-5 pt-32">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
        <div className="mt-6 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">About</p>
            <h1 className="font-display mt-3 text-5xl md:text-7xl font-bold leading-[0.95]">24 Years of Making<br /><span className="text-gradient">Chennai&apos;s Events</span><br />Memorable</h1>
            <p className="mt-7 text-lg text-slate-600 leading-relaxed">Aerollerz Media & Entertainment started in Nungambakkam, Chennai in 2002 with one belief: events should be remembered, not just attended. 24 years, 500+ events, and partnerships with Ministry of Culture, CIO Association, Rotary and Accsys later, that belief still runs every brief we take.</p>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {site.stats.map((s) => (
                <div key={s.label} className="card p-4 text-center">
                  <div className="font-display text-3xl font-bold text-gradient"><CountUp end={s.value} suffix={s.suffix} /></div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card overflow-hidden">
              <SafeImage src={site.founder.photo} alt={`${site.founder.name}, Founder of ${site.short}, Chennai`} className="aspect-[4/5] w-full object-cover" loading="eager" />
            </div>
            <p className="mt-5 font-display text-2xl">{site.founder.name}<span className="block font-sans text-sm text-slate-500 font-normal">{site.founder.role}</span></p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal className="text-center">
            <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">Our Journey</p>
            <h2 className="font-display mt-3 text-4xl md:text-6xl font-bold">24 Years, One Chennai Studio</h2>
          </Reveal>
          <ol className="mt-14 relative border-l-2 border-slate-200 pl-8 space-y-10 ml-4">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 60}>
                <li className="relative">
                  <span className="absolute -left-10 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand" />
                  <p className="font-mono text-xs text-[color:var(--color-brand-2)]">{m.year}</p>
                  <h3 className="font-display text-2xl font-bold mt-1">{m.t}</h3>
                  <p className="text-slate-600 mt-2 leading-relaxed">{m.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">How We Work</p>
          <h2 className="font-display mt-3 text-4xl md:text-6xl font-bold">The Aerollerz Process</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Brief", d: "A 20-minute consultation. We ask more questions than we answer. Objective, audience, budget, non-negotiables." },
            { n: "02", t: "Design", d: "Concept deck, mood boards, 3D renders. You sign off before anything is procured." },
            { n: "03", t: "Produce", d: "Vendors locked, timelines mapped, rehearsals run. You walk in as a guest." },
            { n: "04", t: "Deliver", d: "Showcaller on floor. Backup for every risk. Post-event photos and video within 48 hours." },
            { n: "05", t: "Report", d: "Expense reconciliation, attendee feedback, media coverage, lessons for next time." },
            { n: "06", t: "Repeat", d: "80% of our clients come back. We'd rather build long partnerships than chase one-off events." },
          ].map((p) => (
            <div key={p.n} className="card p-6 card-hover">
              <p className="font-mono text-xs text-[color:var(--color-brand-2)]">{p.n}</p>
              <h3 className="font-display text-2xl font-bold mt-2">{p.t}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">Clients We&apos;ve Worked With</p>
            <h2 className="font-display mt-3 text-4xl md:text-6xl font-bold">Trusted By</h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
              {site.signatureClients.map((c) => (
                <div key={c} className="card p-6 font-display text-xl text-slate-600">{c}</div>
              ))}
            </div>
            <Link href="/portfolio" className="btn btn-primary mt-10">See Our Work</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
