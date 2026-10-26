import React from 'react';
import type { Metadata } from 'next';
import { Package, ShieldCheck, CheckCircle2 } from 'lucide-react';
import ServiceHero from '@/components/servicios/ServiceHero';
import ServiceSpecs from '@/components/servicios/ServiceSpecs';
import ServicePricingTable from '@/components/servicios/ServicePricingTable';
import ServiceCta from '@/components/servicios/ServiceCta';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Mercado Envíos Flex en Mar del Plata | Envíos en el Día',
  description:
    'Logística especializada para vendedores de Mercado Libre en Mar del Plata. Retiro a las 15:00 hs y entregas garantizadas en el día hasta las 20:00 hs.',
  alternates: { canonical: `${baseUrl}/servicios/enviosflex` },
  openGraph: {
    title: 'Mercado Envíos Flex en Mar del Plata | Envíos DosRuedas',
    description:
      'Mantené tu reputación verde en Mercado Libre. Despacho diario Flex con trazabilidad, escaneo y liquidación puntual.',
    url: `${baseUrl}/servicios/enviosflex`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const FLEX_PRICING_ROWS = [
  { range: 'Nivel 1 (1 a 4 envíos/día)', price: 'Tarifa LowCost ($3.000 - $4.000)', note: 'Según distancia en km de cada venta' },
  { range: 'Nivel 2 (Zonas 4 y 5 extendidas)', price: '$6.500', note: 'Zonas lejanas y perímetros urbanos' },
  { range: 'Nivel 3 (+5 envíos diarios)', price: '$4.500 Tarifa Plana', note: 'Tarifa unificada a cualquier punto de Mar del Plata' },
];

export default function EnviosFlexPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      <ServiceHero
        title="Mercado Envíos Flex"
        knockoutText="Métricas Verdes Aseguradas"
        subtitle="Entregá en el día a tus compradores de Mercado Libre y mantené tu reputación verde en lo más alto. Retiramos por tu depósito o local comercial a las 15:00 hs y entregamos de corrido hasta las 20:00 hs."
        badge="Mercado Libre Flex · Corte 15:00 hs"
        icon={Package}
        variant="flex"
        tone="blue"
        whatsappMessage="Hola Envíos DosRuedas! Vendo por Mercado Libre y quiero activar Mercado Envíos Flex con ustedes."
        summaryMetrics={[
          { label: 'Corte', value: '15:00 hs', desc: 'Retiro en tu local' },
          { label: 'Entrega', value: 'Hasta 20 hs', desc: 'Same-Day' },
          { label: 'Reputación', value: '100% Verde', desc: 'Termómetro ML' },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <ServiceSpecs
          corte="15:00 hs (Retiro en local o depósito)"
          entrega="Mismo día garantizado hasta las 20:00 hs"
          capacidad="Hasta 5 kg y 40 × 40 × 30 cm por paquete"
          vehiculo="Flota de motos y utilitarios con escaneo de código QR"
          cobertura="Zonas 1, 2, 3, 4 y 5 habilitadas por Mercado Libre en Mar del Plata"
        />

        <ServicePricingTable
          title="Esquema Tarifario Mercado Envíos Flex (2026)"
          rows={FLEX_PRICING_ROWS}
          extraNote="* Incluye escaneo de paquetes, comprobante de entrega en app de Mercado Envíos y reintentos coordinados. No cobramos costo de ingreso ni exclusividad. Facturación semanal o quincenal con Factura C (no Factura A)."
        />

        {/* Ventajas para vendedores */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-8 bg-white">
            <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-4">
              ¿Por qué elegirnos para tu logística Flex en MDQ?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs text-brand-blue-400">
              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-brand-blue-500">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Reputación Verde Blindada</span>
                </div>
                <p>Cero demoras. Si un comprador no está, coordinamos segundo llamado sin costo de flete fantasma.</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-brand-blue-500">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Retiro Fijo y Puntual</span>
                </div>
                <p>Pasamos por tu local o domicilio todos los días hábiles a las 15:00 hs en punto con remito de retiro.</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-brand-blue-500">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Base Central en Friuli 1972</span>
                </div>
                <p>Tenés un punto físico real de custodia y consolidación en el corazón logístico de la ciudad.</p>
              </div>
            </div>
          </div>
        </div>

        <ServiceCta
          title="¿Vendés por Mercado Libre en Mar del Plata?"
          subtitle="Conectá tu cuenta de Mercado Libre con nuestra logística Flex hoy mismo y empezá a entregar en el día sin preocuparte por los repartos."
          whatsappMessage="Hola! Tengo una cuenta de Mercado Libre en Mar del Plata y quiero coordinar retiros Flex diarios."
        />
      </section>
    </main>
  );
}
