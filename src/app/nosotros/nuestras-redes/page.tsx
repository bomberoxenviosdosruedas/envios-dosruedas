import React from 'react';
import type { Metadata } from 'next';
import {
  MapPin,
  ExternalLink,
  Share2,
  ChevronDown,
} from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { HeroProceduralBackground } from '@/components/ui/HeroProceduralBackground';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { Knockout } from '@/components/ui/Knockout';
import { Badge } from '@/components/ui/Badge';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Nuestras Redes y Canales Oficiales | Envíos DosRuedas',
  description:
    'Conectate con Envíos DosRuedas a través de nuestros canales oficiales: WhatsApp, Instagram, Facebook y nuestra sede física en Friuli 1972, Mar del Plata.',
  alternates: { canonical: `${baseUrl}/nosotros/nuestras-redes` },
  openGraph: {
    title: 'Nuestras Redes Oficiales | Envíos DosRuedas',
    description:
      'Canales oficiales de comunicación directa: WhatsApp, Instagram, Facebook y base operativa en Mar del Plata.',
    url: `${baseUrl}/nosotros/nuestras-redes`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const SOCIAL_CHANNELS = [
  {
    name: 'WhatsApp Oficial',
    handle: '+54 9 223 660-2699',
    description: 'Canal prioritario para cotizaciones inmediatas, coordinación de retiros en moto y confirmaciones de entrega en el día.',
    href: 'https://wa.me/5492236602699',
    icon: FaWhatsapp,
    color: '#25D366',
    cta: 'Iniciar conversación',
    status: 'En línea en horario comercial',
  },
  {
    name: 'Instagram',
    handle: '@enviosdosruedas',
    description: 'Comunidad, fotos de nuestra flota en las calles marplatenses, historias de comercios locales y avisos meteorológicos.',
    href: 'https://instagram.com/enviosdosruedas',
    icon: FaInstagram,
    color: '#E4405F',
    cta: 'Seguir en Instagram',
    status: 'Historias y novedades diarias',
  },
  {
    name: 'Facebook',
    handle: '/enviosdosruedas',
    description: 'Página oficial de la empresa para reseñas de clientes, publicaciones comerciales y consultas de empresas.',
    href: 'https://facebook.com/enviosdosruedas',
    icon: FaFacebookF,
    color: '#1877F2',
    cta: 'Visitar en Facebook',
    status: 'Página verificada',
  },
  {
    name: 'Base Operativa Friuli 1972',
    handle: 'Friuli 1972, Peralta Ramos Oeste',
    description: 'Nuestra sede central física para DropOFF con 20% bonificado, guarda de mercadería y atención comercial directa.',
    href: 'https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata',
    icon: MapPin,
    color: '#0950F6',
    cta: 'Abrir en Google Maps',
    status: 'Atención presencial activa',
  },
];

export default function NuestrasRedesPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      {/* Hero */}
      <section
        id="networks-hero"
        aria-label="Canales oficiales de Envíos DosRuedas en redes sociales"
        className="relative isolate flex min-h-[75dvh] lg:min-h-[85dvh] w-full flex-col justify-center overflow-hidden bg-brand-blue-500 text-white border-b-4 border-brand-yellow-500"
      >
        <HeroProceduralBackground variant="community" tone="blue" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT 7 */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <Badge
                variant="accent"
                size="lg"
                className="-rotate-1"
                icon={<Share2 className="h-4 w-4" aria-hidden="true" />}
              >
                Comunidad DosRuedas
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
                <span className="block">Comunidad en</span>
                <Knockout>línea</Knockout>
              </h1>

              <p className="text-base sm:text-lg font-sans text-white/90 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Rutas en vivo, entregas de la flota y novedades de la operativa diaria, publicadas en nuestros canales oficiales de Mar del Plata.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href="https://www.instagram.com/enviosdosruedas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="large"
                  icon={<FaInstagram className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Seguinos en Instagram
                </CTANestedPill>
                <a
                  href="#redes-oficiales"
                  className="inline-flex min-h-11 items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 transition-colors"
                >
                  <ChevronDown className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Ver todos los canales
                </a>
              </div>
            </div>

            {/* RIGHT 5 */}
            <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
              <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-left space-y-5">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <span className="font-subheading text-xs font-bold uppercase tracking-wider text-brand-yellow-400">
                    Canales Verificados
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-2xs font-bold bg-brand-yellow-500/20 text-brand-yellow-300 border border-brand-yellow-500/30">
                    4 Canales Activos
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
                    <FaWhatsapp className="w-5 h-5 text-green-400 shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold text-white block">WhatsApp Oficial</span>
                      <span className="font-mono text-white/70">+54 9 223 660-2699</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
                    <FaInstagram className="w-5 h-5 text-pink-400 shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold text-white block">Instagram Oficial</span>
                      <span className="font-mono text-white/70">@enviosdosruedas</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
                    <MapPin className="w-5 h-5 text-brand-yellow-400 shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold text-white block">Base Friuli 1972</span>
                      <span className="font-mono text-white/70">Mar del Plata</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Canales */}
      <section id="redes-oficiales" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOCIAL_CHANNELS.map((ch) => {
            const Icon = ch.icon;
            return (
              <DoubleBezelCard
                key={ch.name}
                className="group h-full"
                innerClassName="p-6 sm:p-8 bg-white h-full flex flex-col justify-between group-hover:border-brand-blue-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-xs"
                        style={{ backgroundColor: ch.color }}
                      >
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                          {ch.name}
                        </h2>
                        <span className="font-mono text-xs font-semibold text-brand-blue-400">
                          {ch.handle}
                        </span>
                      </div>
                    </div>

                    <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-100">
                      {ch.status}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-brand-blue-400 leading-relaxed mb-6">
                    {ch.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-blue-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    Oficial
                  </span>

                  <a
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-blue-50 text-brand-blue-500 hover:bg-brand-blue-500 hover:text-white font-sans text-xs font-bold uppercase tracking-wider border border-brand-blue-200 transition-all shadow-xs"
                  >
                    <span>{ch.cta}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </DoubleBezelCard>
            );
          })}
        </div>

        {/* Contacto directo telefónico */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-8 bg-brand-blue-50/60 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-400">
                Atención Telefónica Directa
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
                +54 9 223 660-2699
              </h3>
              <p className="font-sans text-xs text-brand-blue-400">
                Lunes a Viernes de 09:00 a 18:00 hs · Sábados de 10:00 a 15:00 hs
              </p>
            </div>

            <a
              href="https://wa.me/5492236602699"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-sans text-sm font-bold uppercase tracking-wider hover:bg-[#20ba59] transition-all shadow-md active:scale-[0.98]"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Chatear por WhatsApp Ahora</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
