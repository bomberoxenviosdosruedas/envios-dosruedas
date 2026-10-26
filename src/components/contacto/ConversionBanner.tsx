import React from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, CheckCircle2, Bike } from 'lucide-react';

export default function ConversionBanner() {
  return (
    <div className="double-bezel-outer">
      <div className="double-bezel-inner p-8 sm:p-10 bg-brand-blue-500 text-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div 
          className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full pointer-events-none blur-2xl" 
          aria-hidden="true" 
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-300 border border-brand-yellow-500/30 text-xs font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-brand-yellow-400" />
              <span>Cotizador Instantáneo</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
              ¿Buscás calcular el costo exacto de tu envío?
            </h3>

            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed">
              Ingresá a nuestro cotizador interactivo. Seleccioná el origen, el destino en Mar del Plata y conocé la tarifa zonal oficial al instante, sin esperas ni sorpresas.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-white/80 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-400" />
                Tarifas 2026 oficiales
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-400" />
                Cobertura en todos los barrios
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-400" />
                Confirmación directa
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/cotizar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-lg tracking-wider uppercase border-2 border-brand-yellow-500 hover:bg-brand-yellow-400 active:scale-[0.98] transition-all shadow-lg font-bold"
            >
              <Bike className="w-5 h-5 text-brand-blue-500 stroke-[2.2]" />
              <span>Calcular Tarifa Online</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
