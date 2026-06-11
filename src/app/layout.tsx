import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GrantMap Canada — AI Grant Matching for Canadian Businesses",
    template: "%s | GrantMap Canada",
  },
  description:
    "AI-powered grant matching for Canadian small businesses. Find SR&ED, CDAP, IRAP, and 15+ federal & provincial programs in minutes.",
  metadataBase: new URL("https://grantmap.ca"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://grantmap.ca",
    siteName: "GrantMap Canada",
    title: "GrantMap Canada — AI Grant Matching for Canadian Businesses",
    description:
      "AI-powered grant matching for Canadian small businesses. Find SR&ED, CDAP, IRAP, and 15+ federal & provincial programs in minutes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrantMap Canada — AI Grant Matching",
    description: "Find every Canadian grant your business qualifies for.",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GrantMap Canada",
  url: "https://grantmap.ca",
  description:
    "AI-powered grant matching platform that connects Canadian small businesses to federal and provincial funding programs including SR&ED, CDAP, IRAP, and more.",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Grant Matching Report",
      price: "150",
      priceCurrency: "CAD",
      description: "Single AI-powered grant matching report covering 15+ federal and provincial programs.",
    },
    {
      "@type": "Offer",
      name: "Monthly Unlimited Plan",
      price: "50",
      priceCurrency: "CAD",
      description: "Unlimited grant matching reports per month — ideal for accountants and business advisors.",
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GrantMap Canada",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://grantmap.ca",
  description:
    "AI grant matching software that evaluates 15+ Canadian federal and provincial funding programs and delivers a ranked eligibility report with draft application text.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "50",
    highPrice: "150",
    priceCurrency: "CAD",
  },
  featureList: [
    "AI-powered grant matching",
    "SR&ED tax credit eligibility screening",
    "CDAP, IRAP, CanExport programme matching",
    "Ready-to-submit application drafts",
    "Client management for accountants",
    "PDF report delivery",
  ],
  keywords:
    "Canadian business grants, grant matching Canada, SR&ED tax credit, CDAP grant, IRAP grant, small business funding Canada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
