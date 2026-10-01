import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { cases } from "@/lib/cases";
import { site, waLink } from "@/lib/site";
import SafeImage from "@/components/SafeImage";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import Breadcrumb from "@/components/Breadcrumb";
import TiltCard from "@/components/TiltCard";
import { JsonLd, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}
export const dynamicParams = false;

type Params = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { service } = await params;
  const s = services.find((x) => x.slug === service);
  if (!s) return {};
  return {
    title: s.title,
    description: s.tagline,
    alternates: { canonical: `${site.url}/${s.slug}` },
    openGraph: { title: s.title, description: s.tagline, images: [{ url: s.hero }] },
  };
}

export default async function ServicePage({ params }: Params) {
  const { service } = await params;
  const s = services.find((x) => x.slug === service);
  if (!s) notFound();
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  const relatedCases = cases.filter((c) => c.category.toLowerCase().includes(s.short.toLowerCase().split(" ")[0].toLowerCase())).slice(0, 3);
  const bc = [{ name: "Home", href: "/" }, { name: "Services", href: "/#services" }, { name: s.short, href: `/${s.slug}` }];
  return (
    <>
      <JsonLd data={serviceSchema({ title: s.title, description: s.tagline, slug: s.slug, hero: s.hero })} />
      <JsonLd data={breadcrumbSchema(bc)} />
      <JsonLd data={faqSchema(s.faq)} />

      <section className="relative overflow-hidden pt-32 pb-20 px-5 bg-mesh">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb items={bc} />
          <div className="mt-6 grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
            <Reveal>
              <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">{s.short}</p>
              <h1 className="font-display mt-3 text-4xl md:text-6xl font-bold leading-[1.0]">{s.title}</h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">{s.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">{s.cta}</Link>
                <a href={waLink(`Hi Aerollerz, I'd like a quote for ${s.short.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">WhatsApp Us</a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card overflow-hidden">
                <SafeImage src={s.hero} alt={`${s.title} by Aerollerz, Chennai`} className="aspect-[4/3] w-full object-cover" loading="eager" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section mx-auto max-w-5xl px-5">
        <Reveal><p className="text-xl text-slate-700 leading-relaxed">{s.intro}</p></Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {s.bullets.map((b, i) => (
            <Reveal key={b} delay={(i % 2) * 60}>
              <li className="card p-5 flex gap-4">
                <span className="font-mono text-[color:var(--color-brand-2)] font-bold mt-0.5">0{i + 1}</span>
                <span className="text-sm text-slate-700 leading-relaxed">{b}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {relatedCases.length > 0 && (
        <section className="section bg-slate-50 px-5">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">Case Studies</p>
              <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold">We&apos;ve Delivered This</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedCases.map((c, i) => (
                <Reveal key={c.slug} delay={i * 60}>
                  <TiltCard className="card card-hover overflow-hidden h-full">
                    <Link href={`/portfolio/${c.slug}`} className="block h-full">
                      <div className="aspect-[4/3] overflow-hidden"><SafeImage src={c.hero} alt={c.title} className="h-full w-full object-cover" /></div>
                      <div className="p-5">
                        <p className="font-mono text-xs text-[color:var(--color-brand-2)]">{c.category} · {c.year}</p>
                        <h3 className="font-display text-lg font-bold mt-1">{c.title}</h3>
                      </div>
                    </Link>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section px-5">
        <Reveal className="text-center">
          <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">FAQ</p>
          <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold">Frequently Asked</h2>
        </Reveal>
        <Faq items={s.faq} />
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">Related Services</p>
          <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold">Also Explore</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/${r.slug}`} className="card card-hover p-6 block">
                <h3 className="font-display text-xl font-bold">{r.short}</h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-2">{r.tagline}</p>
                <p className="text-xs text-[color:var(--color-brand-2)] mt-3 font-semibold">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-5xl px-5">
          <div className="bg-mesh card p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold">Ready to plan your {s.short.toLowerCase()}?</h2>
            <p className="mt-4 text-slate-600">We&apos;ll come back with a proposal within 24 hours.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">{s.cta}</Link>
              <a href={waLink(`Hi Aerollerz, I need ${s.short.toLowerCase()} help.`)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
