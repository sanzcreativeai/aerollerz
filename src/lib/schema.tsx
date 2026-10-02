import { site } from "./site";

export const orgSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.short,
  url: `${site.url}/`,
  logo: { "@type": "ImageObject", url: `${site.url}/brand/aerollerz-logo.png` },
  foundingDate: String(site.founded),
  founder: { "@type": "Person", name: site.founder.name },
  sameAs: [`https://instagram.com/${site.instagram}`],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: `${site.url}/`,
  name: site.name,
  inLanguage: "en-IN",
  publisher: { "@id": `${site.url}/#organization` },
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  "@id": `${site.url}/#localbusiness`,
  name: site.name,
  image: `${site.url}/portfolio/portfolio-01.jpg`,
  url: `${site.url}/`,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.pincode,
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.address.geo.lat, longitude: site.address.geo.lng },
  areaServed: [
    { "@type": "City", name: "Chennai" },
    ...["Nungambakkam", "T. Nagar", "Anna Nagar", "Adyar", "OMR", "ECR", "Velachery", "Guindy"].map((n) => ({ "@type": "AdministrativeArea", name: n })),
  ],
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating.value, reviewCount: site.rating.count },
  sameAs: [`https://instagram.com/${site.instagram}`],
});

export const serviceSchema = (s: { title: string; description: string; slug: string; hero: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.title,
  description: s.description,
  provider: { "@id": `${site.url}/#organization` },
  areaServed: { "@type": "City", name: "Chennai" },
  url: `${site.url}/${s.slug}`,
  image: `${site.url}${s.hero}`,
});

export const breadcrumbSchema = (items: { name: string; href: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${site.url}${it.href}` })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const JsonLd = ({ data }: { data: unknown }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);
