import type { Metadata, Viewport } from "next";
import { Outfit, Anton, Bebas_Neue, Geist_Mono } from "next/font/google";
import "./globals.css";
import OptimizedHeader from "@/components/layout/OptimizedHeader";
import OptimizedFooter from "@/components/layout/OptimizedFooter";
import CarruselRedes from "@/components/layout/CarruselRedes";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-subheading",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.enviosdosruedas.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0950F6",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mensajería en moto en Mar del Plata | Envíos DosRuedas",
    template: "%s | Envíos DosRuedas",
  },
  description:
    "Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express en franja de 3 hs, Mercado Envíos Flex en el día y reparto LowCost. Base física en Friuli 1972.",
  keywords: [
    "mensajeria mar del plata",
    "envios en moto mar del plata",
    "mercado envios flex mar del plata",
    "cadeteria mar del plata",
    "reparto low cost mdp",
    "envios dosruedas",
    "cadetes mar del plata",
  ],
  authors: [{ name: "Envíos DosRuedas", url: baseUrl }],
  creator: "Envíos DosRuedas",
  publisher: "Envíos DosRuedas",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: baseUrl,
    siteName: "Envíos DosRuedas",
    title: "Mensajería en moto en Mar del Plata | Envíos DosRuedas",
    description: "La solución logística y última milla de mayor confianza en Mar del Plata con flota propia.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Envíos DosRuedas - Mensajería Urbana en Mar del Plata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mensajería en moto en Mar del Plata | Envíos DosRuedas",
    description: "Envíos Express en franja de 3 hs, Flex en el día y tarifas LowCost.",
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Envíos DosRuedas",
  "image": `${baseUrl}/logo.png`,
  "@id": `${baseUrl}#localbusiness`,
  "url": baseUrl,
  "telephone": "+5492236602699",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Friuli 1972",
    "addressLocality": "Mar del Plata",
    "addressRegion": "Buenos Aires",
    "postalCode": "B7600",
    "addressCountry": "AR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -38.0163,
    "longitude": -57.5752,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:30",
      "closes": "13:30",
    },
  ],
  "sameAs": [
    "https://instagram.com/enviosdosruedas",
    "https://facebook.com/enviosdosruedas",
    "https://wa.me/5492236602699",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${anton.variable} ${bebasNeue.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-brand-blue-500 font-sans antialiased selection:bg-brand-yellow-500 selection:text-brand-blue-500">
        <OptimizedHeader />
        <main className="flex-1">{children}</main>
        <CarruselRedes />
        <OptimizedFooter />
      </body>
    </html>
  );
}
