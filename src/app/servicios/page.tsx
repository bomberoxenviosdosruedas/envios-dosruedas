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
import { HeroProceduralBackground } from '@/components/ui/HeroProceduralBackground';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { Badge } from '@/components/ui/Badge';
import { Knockout } from '@/components/ui/Knockout';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

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
      <section
        id="servicios-hero"
        aria-label="Catálogo integral de servicios de mensajería y logística urbana en Mar del Plata"
        className="relative isolate flex min-h-[75dvh] lg:min-h-[85dvh] w-full flex-col justify-center overflow-hidden bg-brand-blue-500 text-white border-b-4 border-brand-yellow-500"
      >
        <HeroProceduralBackground variant="default" tone="blue" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT 7 */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <Badge
                variant="accent"
                size="lg"
                className="-rotate-1"
                icon={<ShieldCheck className="h-4 w-4" aria-hidden="true" />}
              >
                Flota 100% Propia en MDQ
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
                <span className="block">Catálogo Oficial</span>
                <Knockout>Servicios 2026</Knockout>
              </h1>

              <p className="text-base sm:text-lg font-sans text-white/90 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Soluciones logísticas a medida para particulares, comercios e industrias de Mar del Plata. Rapidez, seriedad y base operativa física en Friuli 1972.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href="/cotizar"
                  variant="primary"
                  size="large"
                  icon={<ShieldCheck className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Cotizá tu envío ahora
                </CTANestedPill>
                <a
                  href="#grilla-servicios"
                  className="inline-flex min-h-11 items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 transition-colors"
                >
                  <span>Ver los 7 servicios disponibles</span>
                </a>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono text-white/80">
                <span>Express en 3 hs</span>
                <span>·</span>
                <span>LowCost en el día</span>
                <span>·</span>
                <span>Mercado Envíos Flex</span>
                <span>·</span>
                <span>Fulfillment 3PL</span>
              </div>
            </div>

            {/* RIGHT 5 */}
            <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
              <DoubleBezelCard
                className="w-full max-w-md shadow-2xl"
                innerClassName="p-6 sm:p-8 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-brand-blue-100 pb-3">
                  <span className="font-subheading text-xs font-bold uppercase tracking-wider text-brand-blue-500">
                    Garantías Operativas
                  </span>
                  <span className="font-mono text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    Vigente 2026
                  </span>
                </div>

                <div className="space-y-3 font-sans text-xs text-brand-blue-500">
                  <div className="p-3 rounded-xl bg-brand-blue-50/60">
                    <strong className="block text-sm font-display uppercase text-brand-blue-600 mb-0.5">
                      Base Central en Friuli 1972
                    </strong>
                    <span>Depósito propio para drop-off bonificado (-20%), guarda y consolidación.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-blue-50/60">
                    <strong className="block text-sm font-display uppercase text-brand-blue-600 mb-0.5">
                      Repartidores Registrados
                    </strong>
                    <span>Cero tercerización anónima: conductores profesionales con seguro y remito.</span>
                  </div>
                </div>
              </DoubleBezelCard>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section id="grilla-servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <DoubleBezelCard
                key={s.href}
                className="group h-full"
                innerClassName="p-6 sm:p-7 bg-white h-full flex flex-col justify-between transition-all group-hover:border-brand-blue-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-brand-yellow-500 transition-colors flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="neutral" size="sm">
                      {s.badge}
                    </Badge>
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
              </DoubleBezelCard>
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
