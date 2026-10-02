import { site } from "@/lib/site";

const icons = {
  instagram: <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />,
  facebook: <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.8S15.6 3.5 14.4 3.5c-2.6 0-4.2 1.6-4.2 4.4v2.6H7.5v3.3h2.7V22h3.3Z" />,
  youtube: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />,
};

export default function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    { key: "instagram" as const, label: "Instagram", href: `https://instagram.com/${site.instagram}` },
    { key: "facebook" as const, label: "Facebook", href: site.facebook },
    { key: "youtube" as const, label: "YouTube", href: site.youtube },
  ].filter((l) => l.href);
  const bg = { instagram: "bg-[linear-gradient(45deg,#f9a825,#e1306c,#833ab4)]", facebook: "bg-[#1877F2]", youtube: "bg-[#FF0000]" };
  return (
    <div className={`flex gap-3 ${className}`}>
      {links.map((l) => (
        <a key={l.key} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`Aerollerz on ${l.label}`}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${bg[l.key]}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">{icons[l.key]}</svg>
        </a>
      ))}
    </div>
  );
}
