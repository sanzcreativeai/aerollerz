import Link from "next/link";
export default function Breadcrumb({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-1.5">
            {i < items.length - 1 ? <Link href={it.href} className="hover:text-[color:var(--color-brand-2)]">{it.name}</Link> : <span className="text-slate-700 font-medium">{it.name}</span>}
            {i < items.length - 1 && <span className="opacity-40">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
