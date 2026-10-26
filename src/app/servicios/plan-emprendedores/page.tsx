import React from 'react';
import type { Metadata } from 'next';
import { Rocket, ShoppingBag, TrendingUp, CheckCircle2 } from 'lucide-react';
import ServiceHero from '@/components/servicios/ServiceHero';
import ServiceSpecs from '@/components/servicios/ServiceSpecs';
import ServicePricingTable from '@/components/servicios/ServicePricingTable';
import ServiceCta from '@/components/servicios/ServiceCta';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Plan Emprendedores en Mar del Plata | Envíos para Tiendas Online',
  description:
    'Tarifas con descuento por volumen para tiendas de Instagram, Tiendanube y marcas locales en Mar del Plata. Retiros fijos y entregas en el día.',
  alternates: { canonical: `${baseUrl}/servicios/plan-emprendedores` },
  openGraph: {
    title: 'Plan Emprendedores en Mar del Plata | Envíos DosRuedas',
    description:
      'Hacé crecer tu tienda online en Mar del Plata. Tarifas especiales por volumen mensual, retiro diario y atención directa por WhatsApp.',
    url: `${baseUrl}/servicios/plan-emprendedores`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const EMPRENDEDORES_PRICING_ROWS = [
  { range: 'Escalón Inicial (1 a 15 envíos/mes)', price: 'Tarifa LowCost estándar', note: 'Sin requisitos de volumen mínimo ni abono mensual' },
  { range: 'Escalón Crecimiento (16 a 40 envíos/mes)', price: '10% OFF en todos los viajes', note: 'Retiro programado bonificado y soporte directo' },
  { range: 'Escalón Consolidado (+40 envíos/mes)', price: 'Tarifa Plana Zonal Preferencial', note: 'Despacho prioritario y DropOFF especial en Friuli 1972' },
];

export default function PlanEmprendedoresPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      <ServiceHero
        title="Plan Especial"
        knockoutText="E-Commerce & Showrooms"
        subtitle="Diseñado a la medida de marcas de indumentaria, accesorios, cosmética, calzado y tiendas de redes sociales de Mar del Plata. Accedé a tarifas preferenciales por volumen mensual, retiros fijos y seguimiento de cada venta."
        badge="E-commerce Mar del Plata · Volumen Bonificado"
        icon={Rocket}
        variant="default"
        tone="blue"
        whatsappMessage="Hola Envíos DosRuedas! Tengo un emprendimiento en Mar del Plata y quiero sumarme al Plan Emprendedores."
        summaryMetrics={[
          { label: 'Volumen', value: 'Tarifa Plana', desc: 'Desde 15 envíos' },
          { label: 'DropOFF', value: '20% OFF', desc: 'En Friuli 1972' },
          { label: 'Retiro', value: 'Programado', desc: 'Por tu showroom' },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <ServiceSpecs
          corte="13:00 hs para reparto lowcost · 15:00 hs para modalidad express"
          entrega="Mismo día con confirmación de entrega inmediata al comerciante"
          capacidad="Hasta 5 kg y 40 × 40 × 30 cm por paquete (bolsas e-commerce estándar)"
          vehiculo="Moto ágil con protección para paquetes de indumentaria y diseño"
          cobertura="Todos los barrios de Mar del Plata de extremo a extremo"
        />

        <ServicePricingTable
          title="Escala de Descuentos Plan Emprendedores (2026)"
          rows={EMPRENDEDORES_PRICING_ROWS}
          extraNote="* No cobramos costos fijos de mantenimiento. El descuento por volumen se computa al cierre de cada mes según los envíos completados. Emitimos Factura C electrónica (no Factura A)."
        />

        {/* Beneficios directos */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-8 bg-white">
            <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-6">
              El Aliado Logístico de las Marcas Marplatenses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-brand-blue-400">
              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-2">
                <div className="flex items-center gap-2 font-bold text-brand-blue-500">
                  <ShoppingBag className="w-4 h-4 text-brand-yellow-500" />
                  <span>Tu Cliente Recibe Hoy Mismo</span>
                </div>
                <p>Cerrás la venta por WhatsApp o Instagram a la mañana y a la tarde tu cliente ya tiene su prenda o producto en sus manos.</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-2">
                <div className="flex items-center gap-2 font-bold text-brand-blue-500">
                  <TrendingUp className="w-4 h-4 text-brand-blue-500" />
                  <span>Mayor Margen de Ganancia</span>
                </div>
                <p>Tarifas más bajas significan que podés ofrecer envíos más accesibles a tus compradores o absorberlos en promociones sin perder margen.</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-2">
                <div className="flex items-center gap-2 font-bold text-brand-blue-500">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Cero Estrés de Reparto</span>
                </div>
                <p>Dedicás el 100% de tu tiempo a producir, vender y crear contenido, sabiendo que la entrega en la calle está en manos profesionales.</p>
              </div>
            </div>
          </div>
        </div>

        <ServiceCta
          title="¿Querés que tu tienda online entregue en el día?"
          subtitle="Mandanos un mensaje con el Instagram o web de tu marca y el promedio de pedidos semanales para habilitar tus tarifas preferenciales."
          whatsappMessage="Hola Envíos DosRuedas! Tengo una tienda online en Mar del Plata y quiero activar el Plan Emprendedores."
        />
      </section>
    </main>
  );
}
