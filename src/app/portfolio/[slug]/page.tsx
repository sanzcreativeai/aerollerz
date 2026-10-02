import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "@/lib/cases";
import { site, waLink } from "@/lib/site";
import SafeImage from "@/components/SafeImage";
import Reveal from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import TiltCard from "@/components/TiltCard";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() { return cases.map((c) => ({ slug: c.slug })); }
export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} | Case Study`,
    description: c.brief.slice(0, 155),
    alternates: { canonical: `${site.url}/portfolio/${c.slug}` },
    openGraph: { images: [{ url: c.hero }] },
  };
}

export default async function CasePage({ params }: Params) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();
  const related = cases.filter((x) => c.related.includes(x.slug)).slice(0, 3);
  const bc = [{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio" }, { name: c.title, href: `/portfolio/${c.slug}` }];
  return (
    <>
      <JsonLd data={breadcrumbSchema(bc)} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "CreativeWork",
        name: c.title, description: c.brief, author: { "@id": `${site.url}/#organization` },
        datePublished: `${c.year}-01-01`, image: `${site.url}${c.hero}`,
      }} />

      <section className="relative overflow-hidden pt-32 pb-16 px-5 bg-mesh">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb items={bc} />
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase mt-6">{c.category} · {c.year}</p>
            <h1 className="font-display mt-3 text-4xl md:text-6xl font-bold leading-[1.0]">{c.title}</h1>
            <p className="mt-4 text-slate-600 text-lg">Client: <span className="font-semibold text-slate-800">{c.client}</span></p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 -mt-6">
        <Reveal>
          <div className="card overflow-hidden">
            <SafeImage src={c.hero} alt={c.title} className="aspect-[16/9] w-full object-cover" loading="eager" />
          </div>
        </Reveal>
      </section>

      <section className="section mx-auto max-w-4xl px-5 space-y-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold">The Brief</h2>
          <p className="mt-4 text-slate-700 text-lg leading-relaxed">{c.brief}</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl font-bold">Scope</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {c.scope.map((s) => <li key={s} className="flex gap-2 text-slate-700"><span className="text-[color:var(--color-brand-2)] mt-0.5">●</span>{s}</li>)}
          </ul>
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl font-bold">How We Did It</h2>
          <p className="mt-4 text-slate-700 text-lg leading-relaxed">{c.story}</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl font-bold">The Outcome</h2>
          <p className="mt-4 text-slate-700 text-lg leading-relaxed">{c.outcome}</p>
        </Reveal>
      </section>

      {c.gallery.length > 1 && (
        <section className="section bg-slate-50">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal><h2 className="font-display text-3xl md:text-5xl font-bold">Gallery</h2></Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {c.gallery.map((g, i) => (
                <Reveal key={g + i} delay={(i % 3) * 60}>
                  <div className="card overflow-hidden">
                    <SafeImage src={g} alt={`${c.title} — moment ${i + 1}`} className="aspect-[4/3] w-full object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {c.video && (
        <section className="section">
          <div className="mx-auto max-w-5xl px-5">
            <Reveal><h2 className="font-display text-3xl md:text-5xl font-bold text-center">Reel</h2></Reveal>
            <div className="mt-10 card overflow-hidden">
              <video controls playsInline preload="metadata" className="w-full aspect-video bg-black">
                <source src={c.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section bg-slate-50">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal><h2 className="font-display text-3xl md:text-5xl font-bold">Related Case Studies</h2></Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <TiltCard key={r.slug} className="card card-hover overflow-hidden">
                  <Link href={`/portfolio/${r.slug}`} className="block">
                    <div className="aspect-[4/3] overflow-hidden"><SafeImage src={r.hero} alt={r.title} className="h-full w-full object-cover" /></div>
                    <div className="p-5">
                      <p className="font-mono text-xs text-[color:var(--color-brand-2)]">{r.category} · {r.year}</p>
                      <h3 className="font-display text-lg font-bold mt-1">{r.title}</h3>
                    </div>
                  </Link>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="mx-auto max-w-5xl px-5">
          <div className="bg-mesh card p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold">Plan an event like this?</h2>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
              <a href={waLink(`Hi Aerollerz, I saw your ${c.title} case study and want to plan something similar.`)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
