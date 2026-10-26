import React from 'react';
import { MapPin, Zap, ShieldCheck } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-brand-yellow-500">
      {/* Subtle tech background accents */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Micro-badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase border border-white/20 backdrop-blur-xs">
            <MapPin className="w-3.5 h-3.5 text-brand-yellow-500" />
            Base Central: Friuli 1972
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase border border-white/20 backdrop-blur-xs">
            <Zap className="w-3.5 h-3.5 text-brand-yellow-500" />
            Atención Rápida
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-300 text-xs font-semibold tracking-wider uppercase border border-brand-yellow-500/40 backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow-400" />
            Flota Propia en Mar del Plata
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-4 leading-none">
          Contacto y Base Central
        </h1>

        <p className="font-sans text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed font-normal">
          Estamos para ayudarte a resolver tus entregas en Mar del Plata. Escribinos directamente por WhatsApp para una cotización inmediata o completá el formulario para propuestas comerciales y cuentas corporativas.
        </p>
      </div>
    </section>
  );
}
