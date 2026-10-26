import React from 'react';
import type { Metadata } from 'next';
import { Warehouse, MapPin, CheckCircle2, ShieldCheck, Box } from 'lucide-react';
import ServiceHero from '@/components/servicios/ServiceHero';
import ServiceSpecs from '@/components/servicios/ServiceSpecs';
import ServicePricingTable from '@/components/servicios/ServicePricingTable';
import ServiceCta from '@/components/servicios/ServiceCta';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Depósito & Fulfillment en Mar del Plata | Almacenamiento y Despacho',
  description:
    'Almacená tu stock en nuestra base operativa de Friuli 1972 (Mar del Plata). Preparamos tus paquetes y los despachamos en la primera ronda diaria. Bonificación DropOFF 20%.',
  alternates: { canonical: `${baseUrl}/servicios/deposito-fulfillment` },
  openGraph: {
    title: 'Depósito y Fulfillment en Mar del Plata | Envíos DosRuedas',
    description:
      'Tu mercadería segura en Friuli 1972. Empaque, stock y despacho inmediato para e-commerce y empresas locales.',
    url: `${baseUrl}/servicios/deposito-fulfillment`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const FULFILLMENT_PRICING_ROWS = [
  { range: 'DropOFF en Base Friuli 1972', price: '20% Descuento en Envíos', note: 'Traés tus paquetes listos y ahorrás el flete de retiro' },
  { range: 'Guarda y Stock de Mercadería', price: 'Planes mensuales a medida', note: 'Estantería dedicada según metros cúbicos y rotación' },
  { range: 'Picking & Packing (Armado)', price: 'Consultar según volumen', note: 'Empaque con insumos propios o provistos por el comercio' },
  { range: 'Despacho Primera Ronda', price: 'Tarifa oficial LowCost / Express', note: 'Tus pedidos salen en moto a primera hora de la mañana' },
];

export default function DepositoFulfillmentPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      <ServiceHero
        title="Depósito y Guarda"
        knockoutText="Stock & Fulfillment 3PL"
        subtitle="Almacenamos tu stock en nuestra base central de Friuli 1972, empacamos tus pedidos y los despachamos en la primera ronda del día. Olvidate del espacio físico, la cinta de embalar y las corridas de última hora."
        badge="Base Friuli 1972 · DropOFF -20%"
        icon={Warehouse}
        variant="3pl"
        tone="blue"
        whatsappMessage="Hola Envíos DosRuedas! Quisiera consultar por el servicio de Depósito y Fulfillment en Friuli 1972."
        summaryMetrics={[
          { label: 'DropOFF', value: '20% OFF', desc: 'En Friuli 1972' },
          { label: 'Inventario', value: 'En Base', desc: 'Guarda segura' },
          { label: 'Despacho', value: '1ª Ronda', desc: 'Same-Day' },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <ServiceSpecs
          corte="Recepción continua en base: Lun a Vie 09:00 a 18:00 hs · Sáb 10:00 a 15:00 hs"
          entrega="Despacho en primera ronda matutina o en franja express según demanda"
          capacidad="Mercadería no perecedera ni peligrosa. Bultos estándar y stock en estantería seca"
          vehiculo="Control de inventario en base + flota de motos y camionetas de reparto"
          cobertura="Base física en Friuli 1972, Mar del Plata con despacho a toda la ciudad"
        />

        <ServicePricingTable
          title="Modalidades y Beneficios Fulfillment (2026)"
          rows={FULFILLMENT_PRICING_ROWS}
          extraNote="* El beneficio DropOFF del 20% aplica al traer tus paquetes directamente a nuestra base de Friuli 1972. Factura C oficial por todos los servicios. No emitimos Factura A."
        />

        {/* Pilares del servicio */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-8 bg-white">
            <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-6">
              El Circuito Logístico en Friuli 1972
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-brand-blue-400">
              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-2">
                <span className="font-mono text-base font-bold text-brand-blue-500 block">Paso 01</span>
                <h4 className="font-sans font-bold text-sm text-brand-blue-500">Ingreso y Control</h4>
                <p>Nos entregás o enviás tu mercadería. Registramos el stock ingresado y lo ubicamos en estanterías protegidas y secas.</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-2">
                <span className="font-mono text-base font-bold text-brand-blue-500 block">Paso 02</span>
                <h4 className="font-sans font-bold text-sm text-brand-blue-500">Venta y Armado (Picking)</h4>
                <p>Nos pasás la orden por WhatsApp o sistema. Buscamos el producto, lo empaquetamos y pegamos la etiqueta de envío.</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-2">
                <span className="font-mono text-base font-bold text-brand-blue-500 block">Paso 03</span>
                <h4 className="font-sans font-bold text-sm text-brand-blue-500">Despacho Inmediato</h4>
                <p>Sale en la primera moto de la mañana directo a la puerta de tu cliente, sin tiempos muertos de retiro intermedio.</p>
              </div>
            </div>
          </div>
        </div>

        <ServiceCta
          title="¿Querés delegar el almacenamiento y despacho de tus ventas?"
          subtitle="Coordiná una visita a nuestra base de Friuli 1972 o consultanos por un presupuesto adaptado al volumen de tu tienda."
          whatsappMessage="Hola Envíos DosRuedas! Quisiera coordinar una propuesta para almacenar mi stock y despachar con ustedes en Friuli 1972."
        />
      </section>
    </main>
  );
}
