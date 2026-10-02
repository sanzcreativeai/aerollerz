"use client";
import { useState } from "react";
import { waLink } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (d.website) return;
    const summary = `Hi Aerollerz — new enquiry from the website:\n• Name: ${d.name}\n• Phone: ${d.phone}\n• Email: ${d.email}\n• Event: ${d.type || "—"} on ${d.date || "TBD"}\n• Budget: ${d.budget || "—"}\n• Message: ${d.message}`;
    if (!endpoint) { window.open(waLink(summary), "_blank", "noopener"); setStatus("sent"); return; }
    setStatus("sending");
    try {
      const r = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
      if (!r.ok) throw new Error();
      setStatus("sent"); form.reset();
    } catch { setStatus("error"); }
  }
  return (
    <form onSubmit={onSubmit} className="card grid gap-4 p-6 md:grid-cols-2">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <label className="text-sm font-medium text-slate-700">Your name<input required name="name" className="field mt-1.5" autoComplete="name" /></label>
      <label className="text-sm font-medium text-slate-700">Phone / WhatsApp<input required name="phone" type="tel" className="field mt-1.5" autoComplete="tel" placeholder="+91…" /></label>
      <label className="text-sm font-medium text-slate-700">Email<input required name="email" type="email" className="field mt-1.5" autoComplete="email" /></label>
      <label className="text-sm font-medium text-slate-700">Event date<input name="date" type="date" className="field mt-1.5" /></label>
      <label className="text-sm font-medium text-slate-700 md:col-span-1">Event type
        <select name="type" className="field mt-1.5" defaultValue="">
          <option value="">Select…</option>
          {["Wedding", "Engagement", "Reception", "Corporate Event", "Conference", "Product Launch", "Award Ceremony", "Birthday", "Brand Activation", "Other"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label className="text-sm font-medium text-slate-700 md:col-span-1">Rough budget
        <select name="budget" className="field mt-1.5" defaultValue="">
          <option value="">Select…</option>
          {["₹1-3 Lakh", "₹3-8 Lakh", "₹8-20 Lakh", "₹20 Lakh+", "Not sure yet"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label className="text-sm font-medium text-slate-700 md:col-span-2">Tell us about your event<textarea required name="message" rows={4} className="field mt-1.5" placeholder="Guest count, venue if confirmed, specific things you'd like..." /></label>
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button disabled={status === "sending"} className="btn btn-primary" type="submit">{status === "sending" ? "Sending…" : "Get My Proposal"}</button>
        <span className="text-xs text-slate-500">We reply within 24 hours · Monday–Sunday</span>
        <p role="status" className="text-sm text-slate-600 w-full">
          {status === "sent" && "✨ Thanks — we've received your brief. The team will respond on WhatsApp or email within 24 hours."}
          {status === "error" && "Something went wrong. Please WhatsApp or call us directly."}
        </p>
      </div>
    </form>
  );
}
