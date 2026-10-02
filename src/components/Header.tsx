"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { services } from "@/lib/services";

const mainNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services", sub: services.slice(0, 9).map((s) => ({ label: s.short, href: `/${s.slug}` })) },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-[#0a0e1a]/95 backdrop-blur-md shadow-xl" : "bg-[#0a0e1a]/90 backdrop-blur-sm"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Logo className="h-14 md:h-16 w-auto" />
        <nav aria-label="Main" className="hidden lg:flex items-center gap-8">
          {mainNav.map((l) => (
            <div key={l.href} className="relative" onMouseEnter={() => l.sub && setServicesOpen(true)} onMouseLeave={() => l.sub && setServicesOpen(false)}>
              <Link href={l.href} className="text-sm font-medium text-white/90 transition hover:text-[color:var(--color-cyan)]">{l.label}</Link>
              {l.sub && servicesOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-60">
                  <ul className="rounded-2xl bg-white p-2 shadow-2xl border border-slate-200">
                    {l.sub.map((s) => <li key={s.href}><Link href={s.href} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[color:var(--color-brand-2)]">{s.label}</Link></li>)}
                    <li className="border-t border-slate-100 mt-1 pt-1"><Link href="/#services" className="block rounded-lg px-3 py-2 text-sm font-semibold text-[color:var(--color-brand-2)]">All services →</Link></li>
                  </ul>
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="btn btn-primary !py-2 !px-5 text-sm">Get a Quote</Link>
        </nav>
        <button className="lg:hidden rounded-lg border border-white/20 text-white px-3 py-2 text-sm font-medium" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="lg:hidden px-5 pb-5 bg-[#0a0e1a]">
          <ul className="space-y-1">
            {mainNav.map((l) => <li key={l.href}><Link onClick={() => setOpen(false)} href={l.href} className="block rounded-lg px-3 py-3 text-white hover:bg-white/5">{l.label}</Link></li>)}
            <li><Link onClick={() => setOpen(false)} href="/contact" className="btn btn-primary mt-2 w-full">Get a Quote</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
