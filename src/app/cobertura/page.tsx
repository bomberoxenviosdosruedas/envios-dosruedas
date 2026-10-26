import React from 'react';
import type { Metadata } from 'next';
import CoberturaHero from '@/components/cobertura/CoberturaHero';
import CoberturaMapaWrapper from '@/components/cobertura/CoberturaMapaWrapper';
import CoberturaZonasGrid from '@/components/cobertura/CoberturaZonasGrid';
import CoberturaPeriferiaInfo from '@/components/cobertura/CoberturaPeriferiaInfo';
import CoberturaCta from '@/components/cobertura/CoberturaCta';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Cobertura de Envíos en Mar del Plata | 5 Radios Zonales',
  description:
    'Conocé las 5 zonas de reparto y cobertura de Envíos DosRuedas en Mar del Plata: Centro, Puerto, Norte, Oeste y localidades periféricas (Batán, Sierra de los Padres, Chapadmalal). Base física en Friuli 1972.',
  alternates: { canonical: `${baseUrl}/cobertura` },
  openGraph: {
    title: 'Cobertura de Envíos en Mar del Plata | Envíos DosRuedas',
    description:
      'Llegamos a toda la ciudad con flota de motos propia. Mapa interactivo de los 5 radios zonales y base operativa en Friuli 1972.',
    url: `${baseUrl}/cobertura`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Envíos DosRuedas - Cobertura Logística',
  telephone: '+54-223-660-2699',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Friuli 1972',
    addressLocality: 'Mar del Plata',
    addressRegion: 'Buenos Aires',
    postalCode: '7600',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -38.0055,
    longitude: -57.5426,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Centro y Macrocentro Mar del Plata' },
    { '@type': 'AdministrativeArea', name: 'Puerto y Playa Grande' },
    { '@type': 'AdministrativeArea', name: 'Parque Luro y Constitución' },
    { '@type': 'AdministrativeArea', name: 'Zona Oeste y Regional' },
    { '@type': 'AdministrativeArea', name: 'Batán' },
    { '@type': 'AdministrativeArea', name: 'Sierra de los Padres' },
    { '@type': 'AdministrativeArea', name: 'Chapadmalal' },
    { '@type': 'AdministrativeArea', name: 'Santa Clara del Mar' },
  ],
};

export default function CoberturaPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <CoberturaHero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-14">
        {/* Mapa Interactivo */}
        <CoberturaMapaWrapper />

        {/* Fichas de los 5 Radios Zonales */}
        <CoberturaZonasGrid />

        {/* Especificaciones Periferia */}
        <CoberturaPeriferiaInfo />

        {/* CTA Cotizador */}
        <CoberturaCta />
      </section>
    </main>
  );
}
