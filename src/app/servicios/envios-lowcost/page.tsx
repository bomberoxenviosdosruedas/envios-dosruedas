import React from 'react';
import type { Metadata } from 'next';
import { PiggyBank } from 'lucide-react';
import ServiceHero from '@/components/servicios/ServiceHero';
import ServiceSpecs from '@/components/servicios/ServiceSpecs';
import ServicePricingTable from '@/components/servicios/ServicePricingTable';
import ServiceCta from '@/components/servicios/ServiceCta';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Envíos LowCost en Mar del Plata | Tarifa Económica Programada',
  description:
    'La opción más económica para envíos en el día en Mar del Plata. Reparto en hoja de ruta hasta las 19:00 hs. Horario de corte: 13:00 hs. Tarifas oficiales 2026.',
  alternates: { canonical: `${baseUrl}/servicios/envios-lowcost` },
  openGraph: {
    title: 'Envíos LowCost en el Día | Envíos DosRuedas',
    description:
      'Ahorrá hasta un 35% agrupando tus envíos en Mar del Plata. Retiramos antes de las 14:00 y entregamos en el día.',
    url: `${baseUrl}/servicios/envios-lowcost`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const LOW_COST_PRICING_ROWS = [
  { range: '0 a 3 km', price: '$3.000', note: 'Tarifa mínima urbana' },
  { range: '3 a 5 km', price: '$4.000', note: 'Barrios intermedios de MDP' },
  { range: '5 a 7 km', price: '$5.300', note: 'Zonas Norte, Sur y Oeste consolidadas' },
  { range: '7 a 10 km', price: '$7.000', note: 'Periferia urbana residencial' },
  { range: '+10 km', price: '$700 / km', note: 'Cálculo lineal total redondeado (hasta 20 km)' },
  { range: '+20 km', price: 'A consultar', note: 'Destinos periféricos o interurbanos' },
];

export default function EnviosLowCostPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      <ServiceHero
        title="Envíos LowCost en el Día"
        subtitle="La tarifa más conveniente de la ciudad para envíos programados. Retiramos y entregamos en la misma jornada hasta las 19:00 hs optimizando las hojas de ruta. Ideal para emprendedores y compras no urgentes."
        badge="Máximo Ahorro · Corte 13:00 hs"
        icon={PiggyBank}
        whatsappMessage="Hola Envíos DosRuedas! Quisiera coordinar un envío en modalidad LowCost."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <ServiceSpecs
          corte="13:00 hs (Lunes a Viernes)"
          entrega="Mismo día entre 14:00 y 19:00 hs (en hoja de ruta)"
          capacidad="Hasta 5 kg y 40 × 40 × 30 cm (bulto extra desde $1.800)"
          vehiculo="Moto de reparto consolidado urbano"
          cobertura="Todo el casco urbano y corredores principales de Mar del Plata"
        />

        <ServicePricingTable
          title="Tarifas Oficiales Envíos LowCost (2026)"
          rows={LOW_COST_PRICING_ROWS}
          extraNote="* Servicio sujeto a corte a las 13:00 hs. En días de lluvia aplica recargo del 30% al 50%. Espera en puerta: 10 min sin cargo, luego $2.200 cada 10 min adicionales. Régimen Simplificado: Emitimos Factura C, no Factura A."
        />

        <ServiceCta
          title="¿Querés despachar con la tarifa más baja de Mar del Plata?"
          subtitle="Completá origen y destino en el cotizador interactivo o envianos un WhatsApp para coordinar tu retiro hoy."
          whatsappMessage="Hola Envíos DosRuedas! Tengo paquetes para despacho LowCost hoy antes de las 13:00 hs."
        />
      </section>
    </main>
  );
}
