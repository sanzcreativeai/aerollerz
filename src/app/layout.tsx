import type { Metadata, Viewport } from "next";
import { Big_Shoulders, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { JsonLd, orgSchema, websiteSchema } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ChatBot from "@/components/ChatBot";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import LightboxRoot from "@/components/Lightbox";

const display = Big_Shoulders({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--nf-display", display: "swap" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--nf-body", display: "swap" });
const code = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--nf-code", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Event Management & Wedding Planners in Chennai`, template: `%s | ${site.short}` },
  description: site.description,
  keywords: ["event management company in Chennai", "wedding planners in Chennai", "wedding decorators in Chennai", "corporate event management Chennai", "event planners in Chennai", "Aerollerz"],
  authors: [{ name: site.founder.name }],
  creator: site.name,
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name, locale: "en_IN", type: "website", images: [{ url: "/portfolio/portfolio-01.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/portfolio/portfolio-01.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = { themeColor: "#0a0e1a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${code.variable}`}>
      <body>
        <JsonLd data={orgSchema()} />
        <JsonLd data={websiteSchema()} />
        <LoadingScreen />
        <ScrollProgress />
        <Header />
        <LightboxRoot>
          <main>{children}</main>
        </LightboxRoot>
        <Footer />
        <FloatingActions />
        <ChatBot />
      </body>
    </html>
  );
}
