import type { Metadata } from "next";
import Link from "next/link";
import { site, waLink } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import { JsonLd, breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Aerollerz | Chennai Event Management | Call, WhatsApp or Email",
  description: `Reach Aerollerz for event management and wedding planning in Chennai — call ${site.phone}, WhatsApp or send a brief. We reply within 24 hours.`,
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }])} />
      <section className="section mx-auto max-w-7xl px-5 pt-32">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase mt-6">Contact</p>
          <h1 className="font-display mt-3 text-5xl md:text-7xl font-bold leading-[0.95]">Let&apos;s Plan Your<br /><span className="text-gradient">Event</span></h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">Tell us about your event — we&apos;ll come back with a proposal within 24 hours. For urgent briefs, WhatsApp or call is fastest.</p>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <div className="space-y-5">
              <div className="card p-5">
                <p className="font-mono text-xs text-[color:var(--color-brand-2)]">PHONE</p>
                <a href={site.phoneHref} className="font-display text-2xl font-bold hover:text-[color:var(--color-brand-2)]">{site.phone}</a>
                <p className="text-xs text-slate-500 mt-1">Open 24 hours — call anytime</p>
              </div>
              <div className="card p-5">
                <p className="font-mono text-xs text-[color:var(--color-brand-2)]">WHATSAPP</p>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="font-display text-2xl font-bold hover:text-[color:var(--color-brand-2)]">Chat on WhatsApp</a>
                <p className="text-xs text-slate-500 mt-1">Fastest response during the day</p>
              </div>
              <div className="card p-5">
                <p className="font-mono text-xs text-[color:var(--color-brand-2)]">EMAIL</p>
                <a href={`mailto:${site.email}`} className="font-display text-2xl font-bold hover:text-[color:var(--color-brand-2)]">{site.email}</a>
                <p className="text-xs text-slate-500 mt-1">Reply within 24 hours</p>
              </div>
              <div className="card p-5">
                <p className="font-mono text-xs text-[color:var(--color-brand-2)]">INSTAGRAM</p>
                <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="font-display text-2xl font-bold hover:text-[color:var(--color-brand-2)]">@{site.instagram}</a>
                <p className="text-xs text-slate-500 mt-1">Latest work and reels</p>
              </div>
              <div className="card p-5">
                <p className="font-mono text-xs text-[color:var(--color-brand-2)]">VISIT</p>
                <p className="text-slate-700 mt-1 leading-relaxed">{site.address.street}<br />{site.address.city} {site.address.pincode}<br />{site.address.state}, {site.address.country}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
            <p className="mt-5 text-xs text-slate-500 text-center">By submitting this form you agree to our <Link href="/privacy" className="underline hover:text-[color:var(--color-brand-2)]">Privacy Policy</Link>.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
