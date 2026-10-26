import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  HelpCircle,
  Share2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Bike,
  Building,
  CheckCircle2,
} from 'lucide-react';
import { HeroProceduralBackground } from '@/components/ui/HeroProceduralBackground';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { Badge } from '@/components/ui/Badge';
import { Knockout } from '@/components/ui/Knockout';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Nosotros | Envíos DosRuedas Mar del Plata',
  description:
    'Conocé la historia, el equipo y la base operativa de Envíos DosRuedas en Friuli 1972 (Mar del Plata). Logística urbana con flota propia y atención directa.',
  alternates: { canonical: `${baseUrl}/nosotros` },
  openGraph: {
    title: 'Nosotros | Envíos DosRuedas Mar del Plata',
    description:
      'Logística urbana real y comprometida con Mar del Plata. Flota propia, base en Friuli 1972 y atención personalizada.',
    url: `${baseUrl}/nosotros`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const SECTIONS = [
  {
    href: '/nosotros/sobre-nosotros',
    icon: Users,
    title: 'Sobre Nosotros',
    subtitle: 'Nuestra Historia y Filosofía',
    desc: 'Empresa marplatense con base física en Friuli 1972. Sin apps intermediarias ni tercerización: sabemos quién traslada cada paquete.',
    cta: 'Conocer nuestra historia',
    badge: 'Flota Propia MDQ',
  },
  {
    href: '/nosotros/preguntas-frecuentes',
    icon: HelpCircle,
    title: 'Preguntas Frecuentes',
    subtitle: 'Respuestas Claras y Transparentes',
    desc: 'Condiciones de bulto estándar (hasta 5 kg), recargos por lluvia (30%-50%), tolerancia de espera (10 min gratis) y medios de pago.',
    cta: 'Ver preguntas frecuentes',
    badge: 'Centro de Ayuda',
  },
  {
    href: '/nosotros/nuestras-redes',
    icon: Share2,
    title: 'Nuestras Redes',
    subtitle: 'Canales Oficiales de Contacto',
    desc: 'Seguinos en Instagram, contactanos al WhatsApp oficial y conocé las novedades diarias de nuestras rutas en Mar del Plata.',
    cta: 'Ver canales y redes',
    badge: 'Comunidad Activa',
  },
];

export default function NosotrosHubPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      {/* Hero */}
      <section
        id="nosotros-hero"
        aria-label="Información institucional sobre Envíos DosRuedas en Mar del Plata"
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
                icon={<Building className="h-4 w-4" aria-hidden="true" />}
              >
                Base Central: Friuli 1972
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
                <span className="block">Trayectoria y Base</span>
                <Knockout>Friuli 1972</Knockout>
              </h1>

              <p className="text-base sm:text-lg font-sans text-white/90 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Mensajería y logística urbana con raíces marplatenses. Compromiso de palabra, seriedad y atención personalizada para cada envío.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href="/nosotros/sobre-nosotros"
                  variant="primary"
                  size="large"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Conocer nuestra historia
                </CTANestedPill>
                <a
                  href="#secciones-nosotros"
                  className="inline-flex min-h-11 items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 transition-colors"
                >
                  <span>Explorar secciones</span>
                </a>
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
                    Firma Marplatense
                  </span>
                  <span className="font-mono text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    Desde 2019
                  </span>
                </div>

                <div className="space-y-3 font-sans text-xs text-brand-blue-500">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center shrink-0">
                      <Bike className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block font-bold">Flota 100% Propia</strong>
                      <span className="text-brand-blue-400">Sin intermediarios ni aplicaciones foráneas.</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block font-bold">Responsabilidad Fiscal</strong>
                      <span className="text-brand-blue-400">Régimen Simplificado (Monotributo) · Factura C.</span>
                    </div>
                  </div>
                </div>
              </DoubleBezelCard>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Secciones */}
      <section id="secciones-nosotros" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SECTIONS.map((sec) => {
            const Icon = sec.icon;
            return (
              <DoubleBezelCard
                key={sec.href}
                className="group h-full"
                innerClassName="p-6 sm:p-7 bg-white h-full flex flex-col justify-between group-hover:border-brand-blue-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-brand-yellow-500 transition-colors flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="neutral" size="sm">
                      {sec.badge}
                    </Badge>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-400 block mb-1">
                    {sec.subtitle}
                  </span>
                  <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-3 group-hover:text-brand-blue-600">
                    {sec.title}
                  </h2>
                  <p className="font-sans text-sm text-brand-blue-400 leading-relaxed mb-6">
                    {sec.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-blue-100">
                  <Link
                    href={sec.href}
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500 group-hover:text-brand-blue-600 transition-colors"
                  >
                    <span>{sec.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </DoubleBezelCard>
            );
          })}
        </div>

        {/* Banner Identidad */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-8 sm:p-10 bg-brand-blue-500 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-300 border border-brand-yellow-500/30 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-brand-yellow-400" />
                <span>Nuestra Promesa</span>
              </span>

              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
                Logística de cercanía con rostro humano
              </h3>

              <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed">
                A diferencia de las aplicaciones de delivery masivo, en Envíos DosRuedas atendemos de forma directa y personalizada. Nuestro equipo conoce cada diagonal, calle y barrio de Mar del Plata para garantizar que tu paquete llegue seguro y a tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
