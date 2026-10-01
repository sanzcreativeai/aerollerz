import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";
import SafeImage from "@/components/SafeImage";
import Reveal from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Chennai Event & Wedding Journal",
  description: "Guides, ideas and real event stories from Aerollerz — Chennai wedding décor, corporate events, venues, budgets and planning essentials.",
  alternates: { canonical: `${site.url}/blog` },
};

export default function BlogIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Journal", href: "/blog" }])} />
      <section className="section mx-auto max-w-7xl px-5 pt-32">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/blog" }]} />
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase mt-6">Journal</p>
          <h1 className="font-display mt-3 text-5xl md:text-7xl font-bold leading-[0.95]">The Aerollerz Journal</h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">Guides, ideas and real stories from Chennai&apos;s event floor — wedding décor, corporate planning, venues, budgets and the details nobody tells you.</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 60}>
              <article className="card card-hover overflow-hidden h-full">
                <Link href={`/blog/${p.slug}`} className="block h-full">
                  <div className="aspect-[16/10] overflow-hidden"><SafeImage src={p.cover} alt={p.title} className="h-full w-full object-cover" /></div>
                  <div className="p-5">
                    <p className="font-mono text-xs text-[color:var(--color-brand-2)]">{p.category} · {p.readMins} min read</p>
                    <h2 className="font-display text-xl font-bold mt-2 line-clamp-2">{p.title}</h2>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3">{p.description}</p>
                    <p className="mt-3 text-xs font-semibold text-[color:var(--color-brand-2)]">Read article →</p>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
