import React from 'react';
import type { Metadata } from 'next';
import CotizadorHero from '@/components/cotizador/CotizadorHero';
import CotizadorUnificado from '@/components/cotizador/CotizadorUnificado';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Cotizador de Envíos en Mar del Plata | Tarifas Express y LowCost',
  description:
    'Calculá la tarifa oficial de tu envío en moto en Mar del Plata. Compará en tiempo real los costos de Servicio Express y LowCost con confirmación directa por WhatsApp.',
  alternates: { canonical: `${baseUrl}/cotizar` },
  openGraph: {
    title: 'Cotizador de Envíos en Mar del Plata | Envíos DosRuedas',
    description:
      'Calculá al instante el costo de tu envío en Mar del Plata. Cotización dual Express y LowCost con trazado de ruta en mapa.',
    url: `${baseUrl}/cotizar`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cotizador de Cadetería y Mensajería Urbana',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Envíos DosRuedas',
    telephone: '+54-223-660-2699',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Friuli 1972',
      addressLocality: 'Mar del Plata',
      addressRegion: 'Buenos Aires',
      postalCode: '7600',
      addressCountry: 'AR',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Mar del Plata',
  },
  description:
    'Servicio de cotización instantánea de entregas urbanas en moto y utilitarios para Mar del Plata y localidades aledañas.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Servicio Express',
      price: '3700',
      priceCurrency: 'ARS',
      description: 'Entrega prioritaria en franja de 3 horas con corte a las 15:00 hs.',
    },
    {
      '@type': 'Offer',
      name: 'Servicio LowCost',
      price: '3000',
      priceCurrency: 'ARS',
      description: 'Reparto agrupado en el día con corte a las 13:00 hs y entrega hasta las 19:00 hs.',
    },
  ],
};

export default function CotizarPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 relative overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <CotizadorHero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10 bg-white">
        <CotizadorUnificado />
      </section>
    </main>
  );
}
