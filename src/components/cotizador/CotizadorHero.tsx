import React from 'react';
import { Calculator, Bike, Zap, CheckCircle2 } from 'lucide-react';
import { HeroProceduralBackground } from '@/components/ui/HeroProceduralBackground';

export default function CotizadorHero() {
  return (
    <section className="bg-brand-blue-500 text-white pt-14 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-brand-yellow-500">
      {/* Background procedural topology */}
      <HeroProceduralBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-300 text-xs font-semibold tracking-wider uppercase border border-brand-yellow-500/30">
            <Calculator className="w-3.5 h-3.5 text-brand-yellow-400" />
            Motor Tarifario Oficial 2026
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase border border-white/20">
            <Zap className="w-3.5 h-3.5 text-brand-yellow-500" />
            Comparador Dual en Tiempo Real
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-4 leading-none">
          Cotizador Unificado de Envíos
        </h1>

        <p className="font-sans text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed font-normal">
          Ingresá el punto de retiro y entrega en Mar del Plata. Calculamos la distancia vial exacta y te mostramos las tarifas comparadas para <strong>Express</strong> y <strong>LowCost</strong> al instante con confirmación directa por WhatsApp.
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-white/15 text-xs text-white/80 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-yellow-400 shrink-0" />
            <span>Sin costos ocultos ni comisiones sorpresa</span>
          </div>
          <div className="flex items-center gap-2">
            <Bike className="w-4 h-4 text-brand-yellow-400 shrink-0" />
            <span>Motos equipadas y repartidores marplatenses</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-yellow-400 shrink-0" />
            <span>Cobertura integral de Chapadmalal a Santa Clara</span>
          </div>
        </div>
      </div>
    </section>
  );
}
