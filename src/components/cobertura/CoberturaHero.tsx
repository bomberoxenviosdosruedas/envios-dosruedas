import React from 'react';
import { MapPin, Navigation, Compass, ShieldCheck } from 'lucide-react';

export default function CoberturaHero() {
  return (
    <section className="bg-brand-blue-500 text-white pt-14 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-brand-yellow-500">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-300 text-xs font-semibold tracking-wider uppercase border border-brand-yellow-500/30">
            <Compass className="w-3.5 h-3.5 text-brand-yellow-400" />
            5 Radios Zonales Oficiales
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase border border-white/20">
            <MapPin className="w-3.5 h-3.5 text-brand-yellow-500" />
            Base Central: Friuli 1972
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-4 leading-none max-w-4xl mx-auto">
          Cobertura de Envíos en Mar del Plata
        </h1>

        <p className="font-sans text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-normal">
          Llegamos a cada rincón de Mar del Plata y localidades aledañas con cadetería propia en moto. Conocé nuestros 5 radios urbanos de despacho habitual y las condiciones para zonas periféricas.
        </p>
      </div>
    </section>
  );
}
