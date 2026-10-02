// eslint-disable-next-line @next/next/no-img-element
export default function PartnerLogo({ name, logo, className = "max-h-14 md:max-h-16" }: { name: string; logo: string; className?: string }) {
  return <img src={`/partners/${logo}`} alt={name} loading="lazy" decoding="async" className={`${className} h-auto w-auto max-w-[150px] object-contain transition-transform duration-300 hover:scale-105`} />;
}
