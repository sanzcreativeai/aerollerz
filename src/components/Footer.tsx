import Link from "next/link";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { site, waLink } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo className="h-16 w-auto" />
          <p className="mt-4 text-sm text-slate-600 max-w-xs">{site.tagline}</p>
          <p className="mt-2 text-xs text-slate-500">Est. {site.founded} · Nungambakkam, Chennai</p>
          <SocialLinks className="mt-5" />
        </div>
        <div>
          <h3 className="font-display text-lg">Services</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
            {services.slice(0, 7).map((s) => <li key={s.slug}><Link className="hover:text-[color:var(--color-brand-2)]" href={`/${s.slug}`}>{s.short}</Link></li>)}
            <li><Link className="hover:text-[color:var(--color-brand-2)]" href="/#services">All services →</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg">Company</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
            <li><Link className="hover:text-[color:var(--color-brand-2)]" href="/about">About</Link></li>
            <li><Link className="hover:text-[color:var(--color-brand-2)]" href="/portfolio">Portfolio</Link></li>
            <li><Link className="hover:text-[color:var(--color-brand-2)]" href="/blog">Journal</Link></li>
            <li><Link className="hover:text-[color:var(--color-brand-2)]" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-[color:var(--color-brand-2)]" href="/privacy">Privacy</Link></li>
            <li><Link className="hover:text-[color:var(--color-brand-2)]" href="/terms">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg">Contact</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
            <li><a className="hover:text-[color:var(--color-brand-2)]" href={site.phoneHref}>{site.phone}</a></li>
            <li><a className="hover:text-[color:var(--color-brand-2)]" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className="hover:text-[color:var(--color-brand-2)]" href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a className="hover:text-[color:var(--color-brand-2)]" href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">@{site.instagram}</a></li>
            <li className="pt-2 text-xs text-slate-500 leading-relaxed">{site.address.street}, {site.address.city} {site.address.pincode}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved. · Site crafted by SanzCreative.ai
      </div>
    </footer>
  );
}
