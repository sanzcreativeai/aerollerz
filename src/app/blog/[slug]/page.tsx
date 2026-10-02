import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { site, waLink } from "@/lib/site";
import SafeImage from "@/components/SafeImage";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import Breadcrumb from "@/components/Breadcrumb";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }
export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `${site.url}/blog/${p.slug}` },
    openGraph: { title: p.title, description: p.description, images: [{ url: p.cover }], type: "article", publishedTime: p.date, authors: [site.founder.name] },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const bc = [{ name: "Home", href: "/" }, { name: "Journal", href: "/blog" }, { name: p.title, href: `/blog/${p.slug}` }];
  return (
    <>
      <JsonLd data={breadcrumbSchema(bc)} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Article",
        headline: p.title, description: p.description, image: `${site.url}${p.cover}`,
        datePublished: p.date, dateModified: p.date,
        author: { "@type": "Person", name: site.founder.name },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: `${site.url}/blog/${p.slug}`,
      }} />
      {p.faq && <JsonLd data={faqSchema(p.faq)} />}

      <article>
        <section className="section mx-auto max-w-4xl px-5 pt-32">
          <Breadcrumb items={bc} />
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase mt-6">{p.category} · {p.readMins} min read</p>
            <h1 className="font-display mt-3 text-4xl md:text-6xl font-bold leading-[1.05]">{p.title}</h1>
            <p className="mt-4 text-slate-500 text-sm">By {site.founder.name} · {new Date(p.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="card overflow-hidden mt-10">
              <SafeImage src={p.cover} alt={p.title} className="aspect-[16/9] w-full object-cover" loading="eager" />
            </div>
          </Reveal>
          <div className="prose prose-lg max-w-none mt-10">
            <Reveal><p className="text-xl text-slate-700 leading-relaxed font-medium">{p.intro}</p></Reveal>
            {p.sections.map((s, i) => (
              <Reveal key={s.h} delay={i * 40}>
                <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">{s.h}</h2>
                <p className="mt-3 text-slate-700 leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </div>

          {p.faq && (
            <>
              <Reveal><h2 className="font-display text-2xl md:text-3xl font-bold mt-14">Common Questions</h2></Reveal>
              <Faq items={p.faq} />
            </>
          )}

          <Reveal>
            <div className="mt-14 card p-6">
              <p className="font-mono text-xs text-[color:var(--color-brand-2)]">Explore more</p>
              <ul className="mt-3 space-y-2">
                {p.internalLinks.map((l) => <li key={l.href}><Link href={l.href} className="text-[color:var(--color-brand-2)] hover:underline font-medium">→ {l.label}</Link></li>)}
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="section bg-slate-50">
          <div className="mx-auto max-w-5xl px-5">
            <div className="bg-mesh card p-10 md:p-14 text-center">
              <h2 className="font-display text-3xl md:text-5xl font-bold">Planning yours?</h2>
              <p className="mt-4 text-slate-600">We&apos;ll come back with a proposal within 24 hours.</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn btn-primary">Plan Your Event</Link>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section mx-auto max-w-7xl px-5">
          <Reveal><h2 className="font-display text-3xl md:text-5xl font-bold">Keep Reading</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="card card-hover overflow-hidden block">
                <div className="aspect-[16/10] overflow-hidden"><SafeImage src={r.cover} alt={r.title} className="h-full w-full object-cover" /></div>
                <div className="p-5">
                  <p className="font-mono text-xs text-[color:var(--color-brand-2)]">{r.category}</p>
                  <h3 className="font-display text-lg font-bold mt-2 line-clamp-2">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
