import type { Metadata } from "next";
import { site } from "@/lib/site";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Aerollerz Media & Entertainment, Chennai.",
  alternates: { canonical: `${site.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <section className="section mx-auto max-w-3xl px-5 pt-32">
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Privacy", href: "/privacy" }]} />
      <Reveal>
        <h1 className="font-display mt-6 text-4xl md:text-6xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mt-2">Last updated: January 2026</p>
      </Reveal>
      <div className="prose max-w-none mt-10 space-y-6 text-slate-700 leading-relaxed">
        <p>Aerollerz Media & Entertainment (&quot;Aerollerz&quot;, &quot;we&quot;) is committed to protecting your privacy. This policy explains what we collect, how we use it, and your rights under India&apos;s Digital Personal Data Protection Act (DPDPA) 2023 and other applicable law.</p>

        <h2 className="font-display text-2xl font-bold mt-10">1. What we collect</h2>
        <p>Through our website and enquiry forms we may collect: your name, phone, email, event type, event date, budget range and any message you send us. Through standard web analytics we may collect anonymised usage data (page views, device type, approximate location).</p>

        <h2 className="font-display text-2xl font-bold mt-10">2. How we use it</h2>
        <p>We use your details only to (a) respond to your enquiry, (b) prepare a proposal for your event, (c) send operational communications about an event you have booked, and (d) improve our website. We do not sell your data.</p>

        <h2 className="font-display text-2xl font-bold mt-10">3. Who sees it</h2>
        <p>Your enquiry details are seen by our internal team and, where relevant, trusted vendors we engage for your specific event (venue, catering, décor suppliers). We bind these partners to confidentiality.</p>

        <h2 className="font-display text-2xl font-bold mt-10">4. Storage and retention</h2>
        <p>Data is stored on secure, access-controlled systems. Enquiry data is retained for up to 24 months unless you ask us to delete it earlier.</p>

        <h2 className="font-display text-2xl font-bold mt-10">5. Cookies</h2>
        <p>We use essential cookies for website function and anonymised analytics cookies (Google Analytics). You can control cookies via your browser settings.</p>

        <h2 className="font-display text-2xl font-bold mt-10">6. Your rights</h2>
        <p>You have the right to access, correct, or delete the personal data we hold about you, and to withdraw consent. Email <a className="text-[color:var(--color-brand-2)] underline" href={`mailto:${site.email}`}>{site.email}</a> and we will respond within 7 days.</p>

        <h2 className="font-display text-2xl font-bold mt-10">7. Minors</h2>
        <p>Our services are not directed to children. We do not knowingly collect data from anyone under 18.</p>

        <h2 className="font-display text-2xl font-bold mt-10">8. Changes</h2>
        <p>We may update this policy. The &quot;last updated&quot; date above shows when.</p>

        <h2 className="font-display text-2xl font-bold mt-10">9. Contact</h2>
        <p>Data queries? <a className="text-[color:var(--color-brand-2)] underline" href={`mailto:${site.email}`}>{site.email}</a> · <a className="text-[color:var(--color-brand-2)] underline" href={site.phoneHref}>{site.phone}</a>.</p>
      </div>
    </section>
  );
}
