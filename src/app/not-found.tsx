import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section mx-auto max-w-3xl px-5 pt-32 text-center">
      <p className="font-mono text-xs tracking-widest text-[color:var(--color-brand-2)] uppercase">404</p>
      <h1 className="font-display mt-3 text-5xl md:text-7xl font-bold">Page not found</h1>
      <p className="mt-6 text-slate-600">The page you&apos;re looking for isn&apos;t here. Try one of these instead.</p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">Home</Link>
        <Link href="/portfolio" className="btn btn-ghost">Portfolio</Link>
        <Link href="/contact" className="btn btn-ghost">Contact</Link>
      </div>
    </section>
  );
}
