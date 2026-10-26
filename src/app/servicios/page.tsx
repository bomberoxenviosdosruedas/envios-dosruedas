import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  PiggyBank,
  Package,
  Warehouse,
  Building2,
  Banknote,
  Rocket,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import ServiceCta from '@/components/servicios/ServiceCta';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Servicios de Mensajería y Logística Urbana en Mar del Plata',
  description:
    'Conocé la cartera integral de envíos en moto en Mar del Plata: Express en franja de 3 hs, LowCost en el día, Mercado Envíos Flex y soluciones corporativas con flota propia.',
  alternates: { canonical: `${baseUrl}/servicios` },
  openGraph: {
    title: 'Servicios de Mensajería y Logística Urbana | Envíos DosRuedas',
    description:
      'Soluciones logísticas integrales en Mar del Plata: Envíos Express, LowCost, Flex, Depósito y Cuentas Corrientes.',
    url: `${baseUrl}/servicios`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const SERVICES = [
  {
    href: '/servicios/envios-express',
    icon: Zap,
    title: 'Envíos Express',
    desc: 'Tu encomienda entregada en una franja horaria acotada de 3 hs, coordinada con al menos 2 hs de anticipación. Corte: 15:00 hs.',
    badge: 'Desde $3.700',
    highlight: 'Franja de 3 hs',
  },
  {
    href: '/servicios/envios-lowcost',
    icon: PiggyBank,
    title: 'Envíos LowCost',
    desc: 'La tarifa más conveniente de la ciudad para envíos programados. Retiramos y entregamos en la misma jornada hasta las 19:00 hs. Corte: 13:00 hs.',
    badge: 'Desde $3.000',
    highlight: 'Ahorro programado',
  },
  {
    href: '/servicios/enviosflex',
    icon: Package,
    title: 'Mercado Envíos Flex',
    desc: 'Entregá en el día a tus compradores de Mercado Libre y mantené tu reputación verde. Retiro hasta las 15:00 hs y entrega hasta las 20:00 hs.',
    badge: 'Desde $4.500',
    highlight: 'Mercado Libre Oficial',
  },
  {
    href: '/servicios/deposito-fulfillment',
    icon: Warehouse,
    title: 'Depósito & Fulfillment',
    desc: 'Almacenamiento de stock en nuestra base central de Friuli 1972, empaque de pedidos y despacho en primera ronda. DropOFF con 20% bonificado.',
    badge: 'Base Friuli 1972',
    highlight: 'DropOFF -20%',
  },
  {
    href: '/servicios/empresas-cuenta-corriente',
    icon: Building2,
    title: 'Empresas y Cuenta Corriente',
    desc: 'Facturación mensual unificada, cadetería fija bajo demanda, remitos conformados y atención prioritaria para firmas comerciales de Mar del Plata.',
    badge: 'Solución B2B',
    highlight: 'Crédito Quincenal/Mensual',
  },
  {
    href: '/servicios/envios-contrareembolso',
    icon: Banknote,
    title: 'Contra Reembolso',
    desc: 'Cobro de la mercadería en efectivo al comprador al momento de entregar y transferencia bancaria o liquidación al comerciante en 24 hs hábiles.',
    badge: 'Cobranza Segura',
    highlight: 'Rendición en 24 hs',
  },
  {
    href: '/servicios/plan-emprendedores',
    icon: Rocket,
    title: 'Plan Emprendedores',
    desc: 'Tarifas preferenciales por volumen mensual para tiendas online de redes sociales y emprendimientos locales en crecimiento.',
    badge: 'E-commerce MDQ',
    highlight: 'Tarifas por Volumen',
  },
];

export default function ServiciosPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      {/* Hero Section */}
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-brand-yellow-500">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" 
          aria-hidden="true" 
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-300 text-xs font-semibold tracking-wider uppercase border border-brand-yellow-500/30 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow-400" />
            Flota Propia en Mar del Plata
          </span>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-4 leading-none max-w-4xl mx-auto">
            Servicios de Mensajería y Logística Urbana
          </h1>

          <p className="font-sans text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Soluciones logísticas a medida para particulares, comercios e industrias de Mar del Plata. Rapidez, seriedad y base operativa central en Friuli 1972.
          </p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.href} className="double-bezel-outer group h-full">
                <div className="double-bezel-inner p-6 sm:p-7 bg-white h-full flex flex-col justify-between transition-all group-hover:border-brand-blue-300">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-brand-yellow-500 transition-colors flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold px-3 py-1 bg-brand-yellow-500/20 text-brand-blue-500 border border-brand-yellow-500/40 rounded-full">
                        {s.badge}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-400 block mb-0.5">
                        {s.highlight}
                      </span>
                      <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 group-hover:text-brand-blue-600">
                        {s.title}
                      </h2>
                    </div>

                    <p className="font-sans text-sm text-brand-blue-400 leading-relaxed mb-6">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-blue-100 flex items-center justify-between">
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500 group-hover:text-brand-blue-600 transition-colors"
                    >
                      <span>Ver especificaciones y tarifas</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <ServiceCta
          title="¿Tenés dudas sobre cuál servicio elegir?"
          subtitle="Escribinos con origen, destino y tipo de mercadería. Te asesoramos al instante sobre la opción más rápida y económica para tu envío."
          whatsappMessage="Hola Envíos DosRuedas! Quisiera que me asesoren sobre qué servicio me conviene para mi envío."
        />
      </section>
    </main>
  );
}
