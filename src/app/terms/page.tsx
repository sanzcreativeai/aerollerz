import type { Metadata } from "next";
import { site } from "@/lib/site";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Aerollerz Media & Entertainment, Chennai.",
  alternates: { canonical: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <section className="section mx-auto max-w-3xl px-5 pt-32">
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Terms", href: "/terms" }]} />
      <Reveal>
        <h1 className="font-display mt-6 text-4xl md:text-6xl font-bold">Terms of Service</h1>
        <p className="text-sm text-slate-500 mt-2">Last updated: January 2026</p>
      </Reveal>
      <div className="prose max-w-none mt-10 space-y-6 text-slate-700 leading-relaxed">
        <h2 className="font-display text-2xl font-bold mt-10">1. Who we are</h2>
        <p>Aerollerz Media & Entertainment (&quot;Aerollerz&quot;, &quot;we&quot;, &quot;us&quot;) is an event management, wedding planning and décor company based at {site.address.street}, {site.address.city} {site.address.pincode}, {site.address.state}, India. These Terms govern your use of our website and services.</p>
        <h2 className="font-display text-2xl font-bold mt-10">2. Services</h2>
        <p>We offer event management, wedding planning, event décor, design, production, entertainment coordination and related services. Specific scope, deliverables, timelines and pricing for your event are governed by a separate written agreement.</p>
        <h2 className="font-display text-2xl font-bold mt-10">3. Enquiries and proposals</h2>
        <p>Information shared via our website, WhatsApp or email is used to prepare a proposal for your event. Proposals are indicative and become binding only upon signed agreement and advance payment.</p>
        <h2 className="font-display text-2xl font-bold mt-10">4. Content and intellectual property</h2>
        <p>All content on this website — including photographs, videos, logos, and copy — is owned by Aerollerz or licensed to us, and is protected by Indian and international copyright law. You may not reproduce, distribute or create derivative works without written permission.</p>
        <h2 className="font-display text-2xl font-bold mt-10">5. Use of the website</h2>
        <p>You agree not to use the website for any unlawful purpose, to transmit malware, to attempt to gain unauthorized access, or to interfere with normal operation. We reserve the right to restrict access.</p>
        <h2 className="font-display text-2xl font-bold mt-10">6. Third-party links</h2>
        <p>Our website may link to third-party platforms (Instagram, WhatsApp, YouTube). We are not responsible for the content or practices of third-party sites.</p>
        <h2 className="font-display text-2xl font-bold mt-10">7. Disclaimer and limitation of liability</h2>
        <p>The website is provided &quot;as is&quot;. We make no warranties about accuracy or availability. To the extent permitted by law, Aerollerz is not liable for indirect or consequential loss arising from use of the website.</p>
        <h2 className="font-display text-2xl font-bold mt-10">8. Governing law</h2>
        <p>These Terms are governed by the laws of India. Any dispute is subject to the exclusive jurisdiction of courts in Chennai, Tamil Nadu.</p>
        <h2 className="font-display text-2xl font-bold mt-10">9. Changes</h2>
        <p>We may update these Terms. Continued use of the website after changes constitutes acceptance.</p>
        <h2 className="font-display text-2xl font-bold mt-10">10. Contact</h2>
        <p>Questions? Email <a className="text-[color:var(--color-brand-2)] underline" href={`mailto:${site.email}`}>{site.email}</a> or call <a className="text-[color:var(--color-brand-2)] underline" href={site.phoneHref}>{site.phone}</a>.</p>
      </div>
    </section>
  );
}
