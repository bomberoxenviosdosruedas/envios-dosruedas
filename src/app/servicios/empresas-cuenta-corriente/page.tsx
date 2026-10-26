import React from 'react';
import type { Metadata } from 'next';
import { Building2, FileCheck, CreditCard, ShieldCheck } from 'lucide-react';
import ServiceHero from '@/components/servicios/ServiceHero';
import ServiceSpecs from '@/components/servicios/ServiceSpecs';
import ServicePricingTable from '@/components/servicios/ServicePricingTable';
import ServiceCta from '@/components/servicios/ServiceCta';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Cuenta Corriente para Empresas y Comercios en Mar del Plata',
  description:
    'Logística corporativa B2B en Mar del Plata. Facturación quincenal o mensual unificada, cadetería fija bajo demanda, remitos conformados y atención prioritaria.',
  alternates: { canonical: `${baseUrl}/servicios/empresas-cuenta-corriente` },
  openGraph: {
    title: 'Cuenta Corriente Corporativa | Envíos DosRuedas',
    description:
      'Soluciones de cadetería y logística B2B para empresas de Mar del Plata. Pagos quincenales/mensuales y remitos digitales.',
    url: `${baseUrl}/servicios/empresas-cuenta-corriente`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const B2B_PRICING_ROWS = [
  { range: 'Cadetería Administrativa', price: 'Tarifa oficial por viaje', note: 'Trámites bancarios, legales, notariales y firmas' },
  { range: 'Repartos Programados B2B', price: 'Tarifas preferenciales por volumen', note: 'Rutas fijas entre sucursales o clientes mayoristas' },
  { range: 'Liquidación Unificada', price: 'Quincenal o Mensual', note: 'Detalle de remitos y factura C consolidada' },
  { range: 'Cadete Exclusivo / Franja', price: 'A convenir por jornada', note: 'Cadete a disposición exclusiva de la empresa' },
];

export default function EmpresasCuentaCorrientePage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      <ServiceHero
        title="Empresas y Comercios"
        knockoutText="Cuenta Corriente PyME"
        subtitle="Agilizá la operativa diaria de tu empresa, estudio, farmacia o distribuidora. Facturación mensual o quincenal unificada, cadetes registrados con documentación al día, remitos conformados y prioridad de despacho."
        badge="Solución Corporativa B2B"
        icon={Building2}
        variant="default"
        tone="blue"
        whatsappMessage="Hola Envíos DosRuedas! Quisiera abrir una cuenta corriente corporativa para mi empresa."
        summaryMetrics={[
          { label: 'Facturación', value: 'Quincenal', desc: 'Factura C' },
          { label: 'Prioridad', value: 'Flota Fija', desc: 'Sin demoras' },
          { label: 'Remitos', value: 'Firmados', desc: 'Digital + Papel' },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <ServiceSpecs
          corte="Atención prioritaria extendida: Lun a Vie 08:30 a 18:30 hs"
          entrega="Servicios express en 3 hs o programados en el día según necesidad de la firma"
          capacidad="Documentación, valijas contables, muestras comerciales y cajas estándar"
          vehiculo="Motos equipadas y furgones para traslados voluminosos entre depósitos"
          cobertura="Mar del Plata, Parque Industrial, Batán y corredores comerciales"
        />

        <ServicePricingTable
          title="Esquema Corporativo para Empresas (2026)"
          rows={B2B_PRICING_ROWS}
          extraNote="* Apertura de cuenta corriente sujeta a validación comercial inicial. Emitimos Factura C electrónica oficial unificada (Régimen Simplificado). No emitimos Factura A."
        />

        {/* Ventajas B2B */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-8 bg-white">
            <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-6">
              Beneficios para tu Administración
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-brand-blue-400">
              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-2">
                <div className="flex items-center gap-2 font-bold text-brand-blue-500">
                  <CreditCard className="w-4 h-4 text-brand-yellow-500" />
                  <span>Cero Manejo de Efectivo Diario</span>
                </div>
                <p>Tus empleados no necesitan tener caja chica para pagar cada cadete. Se consolida todo en una sola liquidación bancaria.</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-2">
                <div className="flex items-center gap-2 font-bold text-brand-blue-500">
                  <FileCheck className="w-4 h-4 text-brand-blue-500" />
                  <span>Remitos Firmados y Fotos de Entrega</span>
                </div>
                <p>Cada entrega cuenta con firma de recepción, DNI o foto del comprobante enviado a tu administración por WhatsApp o email.</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-2">
                <div className="flex items-center gap-2 font-bold text-brand-blue-500">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span>Cadetes Identificados y Asegurados</span>
                </div>
                <p>Personal con ART, seguro de accidentes y antecedentes verificados para ingresar a bancos, escribanías e industrias.</p>
              </div>
            </div>
          </div>
        </div>

        <ServiceCta
          title="¿Querés abrir una cuenta corriente para tu negocio?"
          subtitle="Escribinos con los datos de tu empresa. Te enviamos la propuesta comercial y habilitamos tu cuenta en el día."
          whatsappMessage="Hola Envíos DosRuedas! Quisiera solicitar la apertura de una cuenta corriente para mi negocio en Mar del Plata."
        />
      </section>
    </main>
  );
}
