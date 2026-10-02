import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ChatWidget from "@/components/ChatWidget";
import LoadingScreen from "@/components/LoadingScreen";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: "Aerollerz Media & Entertainment — Event Management Company in Chennai",
    template: "%s — Aerollerz Media & Entertainment",
  },
  description:
    "Aerollerz Media & Entertainment is a Chennai-based event management company producing corporate events, award ceremonies, live entertainment, and brand activations since 2002.",
  keywords: [
    "event management company Chennai",
    "corporate event management Chennai",
    "event management Nungambakkam",
    "wedding events",
    "concert production",
    "brand activations",
  ],
  openGraph: {
    title: "Aerollerz Media & Entertainment",
    description:
      "Chennai event management company — corporate events, award ceremonies, live entertainment, and brand activations since 2002.",
    url: business.domain,
    siteName: business.name,
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  name: business.name,
  url: business.domain,
  telephone: business.phone,
  email: business.email,
  foundingDate: String(business.founded),
  founder: { "@type": "Person", name: business.founder },
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: business.address.city,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating.value,
    reviewCount: business.rating.count,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;700;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <ChatWidget />
      </body>
    </html>
  );
}
