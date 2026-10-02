import PartnersSection from "@/components/PartnersSection";
import { getPartners } from "@/lib/partners";
import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { services } from "@/lib/services";
import { cases } from "@/lib/cases";
import { posts } from "@/lib/posts";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import TiltCard from "@/components/TiltCard";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import Faq from "@/components/Faq";
import ReelsSection from "@/components/ReelsSection";
import EventPhotosGallery from "@/components/EventPhotosGallery";
import EventPhotoSlider from "@/components/EventPhotoSlider";
import ConceptPortfolio from "@/components/ConceptPortfolio";
import Star from "@/components/Star";
import { JsonLd, localBusinessSchema, faqSchema } from "@/lib/schema";

const homepageFaqs = [
  { q: "How much does event management cost in Chennai?", a: "Our events range from ₹2 lakh for intimate functions to ₹2 crore+ for full-scale corporate productions and luxury weddings. We provide line-item quotes after a 20-minute consultation." },
  { q: "How far in advance should I book Aerollerz?", a: "For large events book 3-6 months ahead. For focused events we turn around in 2-4 weeks. Emergency bookings in 7 days possible — ask and we'll be honest." },
  { q: "Do you handle both weddings and corporate events?", a: "Yes — Aerollerz has produced Chennai weddings since 2002 and corporate events for CIO Association, Accsys, Rotary and Ministry of Culture." },
  { q: "What's included in a full-service package?", a: "Pre-event planning, venue coordination, décor design and build, stage and AV, entertainment booking, catering coordination, guest management, on-ground crew, and post-event reporting." },
  { q: "Do you handle destination events?", a: "Yes — Tamil Nadu, Pondicherry, Bangalore, and across India for corporate roadshows and destination weddings." },
  { q: "Can you work with any venue?", a: "We've worked at ITC Grand Chola, Leela Palace, Taj, Hyatt, Hilton, Feathers, GRT, and most Chennai kalyana mandapams. New venues we scout in advance." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(homepageFaqs)} />

      {/* HERO — left aligned, smaller text, cleaner */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden pt-24 pb-20 px-5 md:px-10">
        <HeroVideo />
        <div className="pointer-events-none absolute inset-0 -z-[5]">
          <div className="blob" style={{ width: 300, height: 300, background: "#22d3ee", top: "25%", left: "5%", opacity: 0.35 }} />
          <div className="blob" style={{ width: 340, height: 340, background: "#a56cc1", bottom: "20%", right: "5%", animationDelay: "4s", opacity: 0.35 }} />
        </div>
        <div className="relative mx-auto max-w-7xl w-full">
          <div className="animate-fade-up">
            <span className="chip chip-dark"><span className="chip-dot" style={{ background: "#22d3ee" }} />Chennai · Est. {site.founded}</span>
          </div>
          <h1 className="mt-6 animate-fade-up font-display text-white max-w-4xl" style={{ animationDelay: ".15s", fontSize: "clamp(2.3rem, 6vw, 5.5rem)", lineHeight: "1.0", letterSpacing: "0.005em", textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}>
            The Studio Behind<br />Chennai&apos;s <span className="text-gradient">Signature Events.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/95 animate-fade-up" style={{ animationDelay: ".3s", textShadow: "0 1px 14px rgba(0,0,0,0.5)" }}>
            24 years · 500+ events · Nungambakkam, Chennai.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: ".45s" }}>
            <Link href="/contact" className="btn btn-primary !px-7 !py-3.5">Plan Your Event</Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !bg-white/15 !text-white !border-white/40 hover:!border-[color:var(--color-cyan)] backdrop-blur !px-7 !py-3.5">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* STATS BAR — dark, aligned */}
      <section className="bg-[#0a0e1a] text-white py-10 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          {site.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <div className="font-display text-4xl md:text-5xl flex items-center justify-center gap-1 leading-none">
                <CountUp end={s.value} suffix={s.suffix === "★" ? "" : s.suffix} />
                {s.suffix === "★" && <Star className="w-6 h-6 md:w-7 md:h-7 text-amber-400 inline-block ml-1" />}
              </div>
              <div className="text-[11px] text-white/60 mt-2 uppercase tracking-[0.2em]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* REAL EVENT PHOTO SLIDER — swipe left/right full view */}
      <EventPhotoSlider />

      {/* CONCEPT PORTFOLIO (16 AI concept images) */}
      <ConceptPortfolio />

      {/* SIGNATURE EVENT CASES — big cards */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">Case Studies</p>
                <h2 className="font-display mt-3 h-section">Signature Events.</h2>
                <p className="mt-5 text-slate-600 text-lg max-w-xl">Ministry of Culture. CIO Association. Accsys. Rotary. The events that defined us.</p>
              </div>
              <Link href="/portfolio" className="btn btn-dark">View all 11 →</Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-2">
            {cases.slice(0, 6).map((c, i) => (
              <Reveal key={c.slug} delay={(i % 2) * 90}>
                <TiltCard className="card card-hover overflow-hidden group h-full">
                  <Link href={`/portfolio/${c.slug}`} className="block h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <SafeImage src={c.hero} alt={c.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="font-mono text-[10px] tracking-widest uppercase text-[color:var(--color-cyan)]">{c.category} · {c.year}</p>
                        <h3 className="font-display text-white text-2xl md:text-3xl mt-1">{c.title}</h3>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      {getPartners().length > 0 && (
        <section className="border-y border-slate-200 bg-white py-8 pause-on-hover">
          <p className="text-center font-mono text-xs tracking-widest text-slate-500 uppercase mb-5">Trusted by Chennai&apos;s most ambitious brands</p>
          <Marquee items={getPartners()} />
        </section>
      )}

      {/* EVENT PHOTOS GALLERY — masonry parallax */}
      <EventPhotosGallery />

      {/* REELS */}
      <ReelsSection />

      {/* ABOUT / FOUNDER */}
      <section className="section mx-auto max-w-7xl px-5 grid md:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <Reveal>
          <div className="card overflow-hidden shadow-2xl">
            <SafeImage src={site.founder.photo} alt={`${site.founder.name}, Founder of ${site.short}`} className="aspect-[4/5] w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">About Aerollerz</p>
          <h2 className="font-display mt-3 h-section">24 Years of Making<br />Chennai&apos;s Events<br /><span className="text-gradient">Unforgettable</span>.</h2>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">{site.founder.bio}</p>
          <p className="mt-7 font-display text-3xl">{site.founder.name}<span className="block font-sans text-sm text-slate-500 font-normal mt-1 tracking-normal">{site.founder.role}</span></p>
          <Link href="/about" className="btn btn-dark mt-8">Our Story</Link>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section id="services" className="section bg-cream relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30"><div className="blob" style={{width:260,height:260,background:"#22d3ee",top:"10%",right:"10%"}}/><div className="blob" style={{width:300,height:300,background:"#a56cc1",bottom:"10%",left:"5%",animationDelay:"3s"}}/></div>
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">What We Do</p>
            <h2 className="font-display mt-3 h-section">Services, End-to-End.</h2>
            <p className="mt-5 text-slate-600 text-lg max-w-2xl">From intimate 50-guest functions to 2000-guest conferences — planning, design, production, delivery in one studio.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 60}>
                <TiltCard className="card card-hover overflow-hidden group h-full">
                  <Link href={`/${s.slug}`} className="block h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <SafeImage src={s.hero} alt={s.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="font-display text-white text-2xl md:text-3xl">{s.short}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-slate-600 line-clamp-2">{s.tagline}</p>
                      <p className="mt-3 text-xs font-semibold text-[color:var(--color-brand-2)]">Learn more →</p>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">Journal</p>
                <h2 className="font-display mt-3 h-section">Guides & Ideas.</h2>
              </div>
              <Link href="/blog" className="btn btn-ghost !py-2.5">All articles →</Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <article className="card card-hover overflow-hidden h-full">
                  <Link href={`/blog/${p.slug}`} className="block h-full">
                    <div className="aspect-[16/10] overflow-hidden"><SafeImage src={p.cover} alt={p.title} className="h-full w-full object-cover" /></div>
                    <div className="p-5">
                      <p className="font-mono text-xs text-[color:var(--color-brand-2)]">{p.category} · {p.readMins} min read</p>
                      <h3 className="font-display text-2xl mt-2 line-clamp-2">{p.title}</h3>
                      <p className="text-sm text-slate-600 mt-2 line-clamp-2">{p.description}</p>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section px-5 bg-cream">
        <Reveal className="text-center">
          <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">FAQ</p>
          <h2 className="font-display mt-3 h-section">Common Questions.</h2>
        </Reveal>
        <Faq items={homepageFaqs} />
      </section>

      {/* CTA BAND */}
      <section className="section">
        <div className="mx-auto max-w-5xl px-5">
          <div className="bg-mesh card p-10 md:p-16 text-center overflow-hidden relative shadow-xl">
            <h2 className="font-display h-sub">Let&apos;s make yours<br /><span className="text-gradient">unforgettable</span>.</h2>
            <p className="mt-5 text-slate-600 max-w-xl mx-auto text-lg">Tell us about your event. We&apos;ll come back within 24 hours with a line-itemed proposal.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">Plan Your Event</Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">WhatsApp Us</a>
              <a href={site.phoneHref} className="btn btn-ghost">Call {site.phone}</a>
            </div>
          </div>
        </div>
      </section>
      <PartnersSection />
    </>
  );
}
