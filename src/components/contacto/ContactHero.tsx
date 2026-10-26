import React from 'react';
import { MapPin, MessageCircle, ChevronDown, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { HeroProceduralBackground } from '@/components/ui/HeroProceduralBackground';
import { Knockout } from '@/components/ui/Knockout';
import { Badge } from '@/components/ui/Badge';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

const WHATSAPP_PHONE = '5492236602699';
const BASE_ADDRESS = 'Friuli 1972, Mar del Plata';

export default function ContactHero() {
  return (
    <section
      id="contact-hero"
      aria-label="Contacto directo con la base central de Envíos DosRuedas en Friuli 1972, Mar del Plata: WhatsApp, formulario y horarios de atención"
      className="relative isolate flex min-h-[75dvh] lg:min-h-[85dvh] w-full flex-col justify-center overflow-hidden bg-brand-blue-500 text-white border-b-4 border-brand-yellow-500"
    >
      <HeroProceduralBackground variant="contact" tone="blue" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT 7 — Copy + CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <Badge
              variant="accent"
              size="lg"
              className="-rotate-1"
              icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
            >
              Conexión directa
            </Badge>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
              <span className="block">Escribinos</span>
              <Knockout>te respondemos</Knockout>
            </h1>

            <p className="text-base sm:text-lg font-sans text-white/90 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
              Contanos qué necesitás mover y te cotizamos al toque. Atendemos desde la base central de Friuli 1972, en Mar del Plata, con flota propia de motos y cero tercerización.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
              <CTANestedPill
                href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=Hola!%20Quiero%20cotizar%20mis%20env%C3%ADos%20en%20Mar%20del%20Plata`}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="large"
                icon={<FaWhatsapp className="w-5 h-5" />}
                iconPosition="left"
              >
                Escribinos por WhatsApp
              </CTANestedPill>
              <a
                href="#contact-form"
                className="inline-flex min-h-11 items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 transition-colors"
              >
                <ChevronDown className="h-5 w-5 shrink-0" aria-hidden="true" />
                Completá el formulario
              </a>
            </div>

            {/* Canales inmediatos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-white/15 pt-6 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-bold">
                  <FaWhatsapp className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <span className="block font-sans text-2xs uppercase tracking-wider text-white/70">
                    Respuesta Inmediata
                  </span>
                  <span className="block font-mono text-xs sm:text-sm font-bold text-brand-yellow-300">
                    +54 9 223 660-2699
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-bold">
                  <MapPin className="w-5 h-5 text-brand-blue-500" />
                </div>
                <div>
                  <span className="block font-sans text-2xs uppercase tracking-wider text-white/70">
                    Base Física Central
                  </span>
                  <span className="block font-mono text-xs sm:text-sm font-bold text-white">
                    {BASE_ADDRESS}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 5 — Visual Card */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-left space-y-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="font-subheading text-xs font-bold uppercase tracking-wider text-brand-yellow-400">
                  Operativa en Mar del Plata
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-2xs font-bold bg-green-500/20 text-green-300 border border-green-500/30">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Base Abierta
                </span>
              </div>

              <div className="space-y-2">
                <span className="font-sans text-xs text-white/80 block">Atención comercial & DropOFF</span>
                <p className="font-display text-2xl uppercase tracking-tight text-white leading-tight">
                  Lunes a Viernes 08:00 a 19:00 hs
                </p>
                <p className="font-sans text-xs text-white/70">
                  Sábados de 08:30 a 13:30 hs. Despachos Same-Day en toda la ciudad.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/10 space-y-1 text-xs font-sans text-brand-yellow-300">
                <span className="font-bold uppercase tracking-wider block">Bonificación DropOFF</span>
                <p className="text-white/90">
                  Despachá directamente en Friuli 1972 y obtené un <strong>20% OFF</strong> en la tarifa de tu envío.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
