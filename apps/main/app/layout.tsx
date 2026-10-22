import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import "./motion.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@workspace/ui/lib/utils";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { contact, siteConfig } from "@/lib/site";
import { Analytics } from "@/components/analytics";
import { LeadCta } from "@/components/lead-cta";
import { ScrollProgress, SmoothScroll } from "@/components/motion";
// import { SessionProvider } from "next-auth/session"; // wrap children with <SessionProvider>

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Crossord | Web, App, Software & AI Development Company",
    template: "%s | Crossord",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "web development company",
    "mobile app development",
    "custom software development",
    "AI solutions",
    "UI/UX design",
    "e-commerce development",
    "Crossord",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: "Crossord | Digital Products Engineered to Perform",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Crossord | Digital Products Engineered to Perform",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  // Google Search Console "HTML tag" verification code
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/mark.png`,
  image: `${siteConfig.url}/opengraph-image`,
  email: siteConfig.email,
  telephone: contact.phone,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mohali",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
        <LeadCta />
        <Analytics />
      </body>
    </html>
  );
}
