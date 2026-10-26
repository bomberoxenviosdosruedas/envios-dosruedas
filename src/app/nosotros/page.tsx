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
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-brand-yellow-500">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" 
          aria-hidden="true" 
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-300 text-xs font-semibold tracking-wider uppercase border border-brand-yellow-500/30 mb-4">
            <Building className="w-3.5 h-3.5 text-brand-yellow-400" />
            Base Central: Friuli 1972
          </span>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-4 leading-none max-w-4xl mx-auto">
            Módulo Institucional
          </h1>

          <p className="font-sans text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Mensajería y logística urbana con raíces marplatenses. Compromiso de palabra, seriedad y atención personalizada para cada envío.
          </p>
        </div>
      </section>

      {/* Grid de Secciones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SECTIONS.map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.href} className="double-bezel-outer group h-full">
                <div className="double-bezel-inner p-6 sm:p-7 bg-white h-full flex flex-col justify-between group-hover:border-brand-blue-300 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-brand-yellow-500 transition-colors flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold px-3 py-1 bg-brand-yellow-500/20 text-brand-blue-500 border border-brand-yellow-500/40 rounded-full">
                        {sec.badge}
                      </span>
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
                </div>
              </div>
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
