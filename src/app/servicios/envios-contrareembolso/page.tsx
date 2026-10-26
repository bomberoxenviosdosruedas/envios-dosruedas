import React from 'react';
import type { Metadata } from 'next';
import { Banknote, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import ServiceHero from '@/components/servicios/ServiceHero';
import ServiceSpecs from '@/components/servicios/ServiceSpecs';
import ServicePricingTable from '@/components/servicios/ServicePricingTable';
import ServiceCta from '@/components/servicios/ServiceCta';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Envíos Contra Reembolso en Mar del Plata | Cobro en Efectivo Seguro',
  description:
    'Cobramos tus ventas en efectivo en el domicilio del comprador en Mar del Plata y te transferimos el dinero en 24 hs hábiles. Seguridad garantizada.',
  alternates: { canonical: `${baseUrl}/servicios/envios-contrareembolso` },
  openGraph: {
    title: 'Envíos Contra Reembolso en Mar del Plata | Envíos DosRuedas',
    description:
      'Multiplicá tus ventas ofreciendo pago en mano. Cobramos en efectivo y te rendimos el dinero por transferencia en 24 hs.',
    url: `${baseUrl}/servicios/envios-contrareembolso`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const CONTRA_REEMBOLSO_PRICING_ROWS = [
  { range: 'Flete de Envío', price: 'Tarifa oficial LowCost o Express', note: 'Según distancia en km de retiro a entrega' },
  { range: 'Comisión por Cobranza y Rendición', price: 'Consultar según monto', note: 'Porcentaje mínimo de custodia y transferencia bancaria' },
  { range: 'Plazo de Liquidación', price: 'Hasta 24 horas hábiles', note: 'Transferencia directa a tu alias/CBU o efectivo en base' },
  { range: 'Monto Máximo de Cobranza', price: 'Hasta $150.000 por viaje', note: 'Montos mayores se coordinan con protocolo de seguridad' },
];

export default function EnviosContraReembolsoPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      <ServiceHero
        title="Envíos Contra Reembolso"
        subtitle="Cobramos tu mercadería en efectivo al comprador al momento de entregar en su domicilio y te rendimos el dinero en 24 hs hábiles por transferencia bancaria o en mano en nuestra base de Friuli 1972."
        badge="Cobranza en Efectivo · Rendición 24 hs"
        icon={Banknote}
        whatsappMessage="Hola Envíos DosRuedas! Quisiera coordinar un envío Contra Reembolso con cobro en efectivo."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <ServiceSpecs
          corte="13:00 hs para reparto en el día · 15:00 hs para modalidad express"
          entrega="Mismo día con confirmación de cobro en puerta"
          capacidad="Hasta 5 kg y 40 × 40 × 30 cm por paquete"
          vehiculo="Moto con bolsín precintado y caja de seguridad"
          cobertura="Todo Mar del Plata urbana y localidades conectadas"
        />

        <ServicePricingTable
          title="Esquema Tarifario Contra Reembolso (2026)"
          rows={CONTRA_REEMBOLSO_PRICING_ROWS}
          extraNote="* El flete se abona independientemente del éxito de la venta si el comprador cancela en puerta. Rendición bancaria asegurada contra comprobante de transferencia. Emitimos Factura C. No emitimos Factura A."
        />

        {/* Cómo funciona */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-8 bg-white">
            <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-6">
              Circuito de Cobranza Segura
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-brand-blue-400">
              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-2">
                <span className="font-mono text-base font-bold text-brand-blue-500 block">01</span>
                <h4 className="font-sans font-bold text-sm text-brand-blue-500">Retiro del Paquete</h4>
                <p>Retiramos el paquete por tu comercio con el remito indicando el importe exacto a cobrar al cliente en destino.</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-2">
                <span className="font-mono text-base font-bold text-brand-blue-500 block">02</span>
                <h4 className="font-sans font-bold text-sm text-brand-blue-500">Entrega y Cobro en Mano</h4>
                <p>El cadete cobra el efectivo acordado antes de entregar el paquete al comprador y firma el comprobante de pago.</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-2">
                <span className="font-mono text-base font-bold text-brand-blue-500 block">03</span>
                <h4 className="font-sans font-bold text-sm text-brand-blue-500">Rendición a tu Cuenta</h4>
                <p>Te transferimos el dinero a tu cuenta bancaria o billetera digital dentro de las 24 horas hábiles con comprobante oficial.</p>
              </div>
            </div>
          </div>
        </div>

        <ServiceCta
          title="¿Tus clientes te piden pagar al recibir en efectivo?"
          subtitle="No pierdas ventas por desconfianza en transferencias previas. Sumá la modalidad contra reembolso a tu negocio hoy mismo."
          whatsappMessage="Hola Envíos DosRuedas! Quiero ofrecer cobro contra reembolso a mis clientes en Mar del Plata."
        />
      </section>
    </main>
  );
}
