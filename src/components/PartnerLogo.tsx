// eslint-disable-next-line @next/next/no-img-element
export default function PartnerLogo({ name, logo, className = "max-h-14 md:max-h-16" }: { name: string; logo: string; className?: string }) {
  return <img src={`/partners/${logo}`} alt={name} loading="lazy" decoding="async" className={`${className} h-auto w-auto max-w-[150px] object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100`} />;
}
