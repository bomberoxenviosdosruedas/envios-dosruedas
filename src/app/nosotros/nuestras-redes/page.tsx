import React from 'react';
import type { Metadata } from 'next';
import {
  MapPin,
  ExternalLink,
  Share2,
} from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

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
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-brand-yellow-500">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" 
          aria-hidden="true" 
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-300 text-xs font-semibold tracking-wider uppercase border border-brand-yellow-500/30 mb-4">
            <Share2 className="w-3.5 h-3.5 text-brand-yellow-400" />
            Canales Verificados
          </span>

          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4 leading-none max-w-4xl mx-auto">
            Nuestras Redes y Canales Oficiales
          </h1>

          <p className="font-sans text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Mantenete en contacto con nuestro equipo por el medio que te resulte más cómodo. Respondemos de forma inmediata.
          </p>
        </div>
      </section>

      {/* Grid de Canales */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOCIAL_CHANNELS.map((ch) => {
            const Icon = ch.icon;
            return (
              <div key={ch.name} className="double-bezel-outer group h-full">
                <div className="double-bezel-inner p-6 sm:p-8 bg-white h-full flex flex-col justify-between group-hover:border-brand-blue-300 transition-all">
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
                </div>
              </div>
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
