import React from 'react';
import type { Metadata } from 'next';
import { Zap } from 'lucide-react';
import ServiceHero from '@/components/servicios/ServiceHero';
import ServiceSpecs from '@/components/servicios/ServiceSpecs';
import ServicePricingTable from '@/components/servicios/ServicePricingTable';
import ServiceCta from '@/components/servicios/ServiceCta';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Envíos Express en Mar del Plata | Franja de 3 Horas',
  description:
    'Servicio de entrega express en moto para Mar del Plata. Tu encomienda entregada en una franja garantizada de 3 hs. Corte: 15:00 hs. Tarifas oficiales 2026.',
  alternates: { canonical: `${baseUrl}/servicios/envios-express` },
  openGraph: {
    title: 'Envíos Express en 3 Horas | Envíos DosRuedas',
    description:
      'Entregas urgentes punto a punto en Mar del Plata. Coordinación con 2 hs de anticipación y franja máxima de 3 hs.',
    url: `${baseUrl}/servicios/envios-express`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const EXPRESS_PRICING_ROWS = [
  { range: '0 a 3 km', price: '$3.700', note: 'Radio céntrico y barrios próximos' },
  { range: '3 a 5 km', price: '$4.600', note: 'Radio urbano intermedio' },
  { range: '5 a 7 km', price: '$6.100', note: 'Radio extendido (Puerto, Constitución, etc.)' },
  { range: '7 a 10 km', price: '$8.200', note: 'Periferia urbana (Mogotes, Bosque, etc.)' },
  { range: '+10 km', price: '$1.000 / km', note: 'Cálculo lineal total redondeado (hasta 20 km)' },
  { range: '+20 km', price: 'A consultar', note: 'Rutas interurbanas (Chapadmalal, Santa Clara)' },
];

export default function EnviosExpressPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      <ServiceHero
        title="Envíos Express en 3 Horas"
        subtitle="Tu encomienda entregada en una franja horaria acotada de 3 hs, coordinada con al menos 2 hs de anticipación. Máxima prioridad para documentos urgentes, repuestos, gastronomía y paquetería crítica."
        badge="Prioridad Máxima · Corte 15:00 hs"
        icon={Zap}
        whatsappMessage="Hola Envíos DosRuedas! Necesito coordinar un Envío Express en franja de 3 horas."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <ServiceSpecs
          corte="15:00 hs (Lunes a Viernes) · 13:00 hs (Sábados)"
          entrega="Franja acotada de 3 horas desde la confirmación"
          capacidad="Hasta 5 kg y 40 × 40 × 30 cm (bulto extra desde $1.800)"
          vehiculo="Moto exclusiva con caja térmica/estanca"
          cobertura="Todo el ejido urbano de Mar del Plata y accesos periféricos"
        />

        <ServicePricingTable
          title="Tarifas Oficiales Envíos Express (2026)"
          rows={EXPRESS_PRICING_ROWS}
          extraNote="* Los viajes express requieren coordinación con al menos 2 horas de anticipación previa. En días de lluvia aplica recargo del 30% al 50%. Espera en puerta: 10 min sin cargo, luego $2.200 cada 10 min adicionales. No emitimos Factura A."
        />

        <ServiceCta
          title="¿Tenés un envío urgente en Mar del Plata?"
          subtitle="Escribinos ahora por WhatsApp o utilizá nuestro cotizador vial para conocer el valor exacto de puerta a puerta."
          whatsappMessage="Hola! Tengo un envío urgente para retirar y entregar hoy en Mar del Plata. ¿Tienen cadete disponible?"
        />
      </section>
    </main>
  );
}
