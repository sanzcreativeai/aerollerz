"use client";
import { useEffect, useRef, useState } from "react";
import { site, waLink } from "@/lib/site";

type Msg = { from: "bot" | "me"; text: string; chips?: string[] };
type Field = "event" | "date" | "budget" | "name" | "phone" | "done";

const eventTypes = ["Wedding", "Corporate", "Birthday", "Engagement", "Reception", "Other"];
const budgets = ["₹1-3 Lakh", "₹3-8 Lakh", "₹8-20 Lakh", "₹20 Lakh+", "Not sure yet"];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [field, setField] = useState<Field>("event");
  const [data, setData] = useState<Record<string, string>>({});
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm Aero, Aerollerz's assistant 👋 I'll quickly take your event brief and connect you to the team on WhatsApp. Shall we start?" },
    { from: "bot", text: "What kind of event are you planning?", chips: eventTypes },
  ]);
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => { end.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing, open]);

  const say = (text: string, chips?: string[]) => {
    setTyping(true);
    setTimeout(() => { setTyping(false); setMsgs((m) => [...m, { from: "bot", text, chips }]); }, 650);
  };

  const pick = (value: string) => {
    setMsgs((m) => [...m, { from: "me", text: value }]);
    const next = { ...data, [field]: value };
    setData(next);
    if (field === "event") { setField("date"); say(`Nice. When are you planning the ${value.toLowerCase()}?`, ["This month", "Next 1-3 months", "3-6 months", "6+ months", "Flexible"]); }
    else if (field === "date") { setField("budget"); say("What's a rough budget band? (helps us tailor the proposal)", budgets); }
    else if (field === "budget") { setField("name"); say("Great. What's your name?"); }
  };

  const submit = (txt: string) => {
    if (!txt.trim()) return;
    setMsgs((m) => [...m, { from: "me", text: txt }]);
    if (field === "name") {
      const next = { ...data, name: txt }; setData(next); setField("phone");
      say(`Thanks ${txt}. Your WhatsApp number (so Sudhakar's team can reach you)?`);
    } else if (field === "phone") {
      const next: Record<string, string> = { ...data, phone: txt }; setData(next); setField("done");
      say(`Perfect — opening WhatsApp with your brief now. Our team will reply within an hour during business hours. ✨`);
      setTimeout(() => {
        const summary = `Hi Aerollerz 👋 I'd like a quote for an event:\n• Type: ${next.event}\n• Timing: ${next.date}\n• Budget: ${next.budget}\n• Name: ${next.name}\n• Phone: ${next.phone}`;
        window.open(waLink(summary), "_blank", "noopener");
      }, 1400);
    }
  };

  const [input, setInput] = useState("");
  const needsText = field === "name" || field === "phone";

  return (
    <div className="fixed bottom-5 right-4 z-40">
      {open && (
        <div role="dialog" aria-label="Aero chat" className="card mb-3 flex h-[520px] max-h-[80vh] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden shadow-2xl animate-fade-up">
          <div className="flex items-center justify-between bg-gradient-brand px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-display text-lg font-bold">A</div>
              <div><div className="font-display text-lg leading-tight">Aero Assistant</div><div className="text-xs opacity-90">Typically replies instantly</div></div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-2xl leading-none opacity-90 hover:opacity-100">×</button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm bg-slate-50">
            {msgs.map((m, i) => (
              <div key={i}>
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${m.from === "me" ? "ml-auto bg-[color:var(--color-brand-2)] text-white rounded-br-sm" : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm"}`}>{m.text}</div>
                {m.chips && i === msgs.length - 1 && !typing && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {m.chips.map((c) => (
                      <button key={c} onClick={() => pick(c)} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-[color:var(--color-cyan)] hover:text-[color:var(--color-brand-2)] transition">{c}</button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {typing && <div className="inline-flex gap-1 rounded-2xl bg-white border border-slate-200 px-3 py-3"><span className="dot dot-cyan" /><span className="dot dot-pink" /><span className="dot dot-purple" /></div>}
            <div ref={end} />
          </div>
          <div className="border-t border-slate-200 p-3 bg-white">
            {needsText ? (
              <form onSubmit={(e) => { e.preventDefault(); submit(input); setInput(""); }} className="flex gap-2">
                <input className="field" value={input} onChange={(e) => setInput(e.target.value)} placeholder={field === "phone" ? "+91…" : "Your name"} autoFocus />
                <button type="submit" className="btn btn-primary !py-2 !px-4">Send</button>
              </form>
            ) : (
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full !py-2.5 text-sm">Skip to WhatsApp instead</a>
            )}
            <p className="mt-2 text-center text-[10px] text-slate-500">We never share your details. GDPR + India DPDPA compliant.</p>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-label="Open Aero chat" aria-expanded={open}
              className="pulse-ring flex items-center justify-center rounded-full bg-gradient-brand text-white shadow-xl hover:scale-110 transition" style={{ width: 56, height: 56 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /></svg>
      </button>
    </div>
  );
}
