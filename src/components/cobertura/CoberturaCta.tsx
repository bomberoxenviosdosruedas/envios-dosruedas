import React from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, MessageCircle, Bike } from 'lucide-react';

export default function CoberturaCta() {
  const whatsappUrl = `https://wa.me/5492236602699?text=${encodeURIComponent(
    'Hola Envíos DosRuedas! Quisiera consultar la tarifa y cobertura para una dirección específica en Mar del Plata.'
  )}`;

  return (
    <div className="double-bezel-outer">
      <div className="double-bezel-inner p-8 sm:p-10 bg-brand-blue-500 text-white relative overflow-hidden">
        <div 
          className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full pointer-events-none blur-2xl" 
          aria-hidden="true" 
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-300 border border-brand-yellow-500/30 text-xs font-semibold uppercase tracking-wider">
              <Bike className="w-3.5 h-3.5 text-brand-yellow-400" />
              <span>Flota Propia en la Calle</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
              ¿Querés saber cuánto sale tu recorrido exacto?
            </h3>

            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed">
              Ingresá en nuestro cotizador unificado. Marcamos los dos puntos en el mapa vial y te calculamos la tarifa oficial al instante, sin intermediarios.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/cotizar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-lg tracking-wider uppercase border-2 border-brand-yellow-500 hover:bg-brand-yellow-400 active:scale-[0.98] transition-all shadow-md font-bold"
            >
              <Calculator className="w-5 h-5 text-brand-blue-500 stroke-[2.2]" />
              <span>Cotizar Recorrido Ahora</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 text-white font-sans text-sm font-bold uppercase tracking-wider border border-white/30 hover:bg-white/20 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Consultar Cobertura</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
