import React from 'react';
import { Calculator, Bike, Zap, CheckCircle2, ChevronDown, Clock, ShieldCheck } from 'lucide-react';
import { HeroProceduralBackground } from '@/components/ui/HeroProceduralBackground';
import { Knockout } from '@/components/ui/Knockout';
import { Badge } from '@/components/ui/Badge';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';

export default function CotizadorHero() {
  return (
    <section
      id="cotizador-hero"
      aria-label="Cotizador online de mensajería y envíos en moto en Mar del Plata"
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
              icon={<Calculator className="h-4 w-4" aria-hidden="true" />}
            >
              Motor Tarifario Oficial 2026
            </Badge>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
              <span className="block">Cotizá tu envío</span>
              <Knockout>en el acto</Knockout>
              <span className="block">en Mar del Plata</span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-white/90 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
              Ingresá el punto de retiro y entrega. Medimos la distancia vial exacta y te mostramos las tarifas comparadas de <strong>Express (franja 3 hs)</strong> y <strong>LowCost (en el día)</strong> con confirmación directa por WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
              <a
                href="#cotizador-widget"
                className="inline-flex min-h-12 items-center gap-2 px-6 py-3.5 rounded-full bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-base uppercase font-bold tracking-wider shadow-md transition-all active:scale-[0.98]"
              >
                <Calculator className="h-4 w-4" />
                <span>Calcular costo abajo</span>
                <ChevronDown className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/5492236602699?text=Hola!%20Quiero%20cotizar%20un%20env%C3%ADo%20especial%20en%20Mar%20del%20Plata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 transition-colors"
              >
                <span>Cotizar viaje especial por WhatsApp</span>
              </a>
            </div>

            {/* Chips de confianza */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono text-white/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-400" />
                Cálculo vial real (Google Maps)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-400" />
                Sin costos ocultos
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-400" />
                Base Friuli 1972
              </span>
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
                  Comparador Dual Inmediato
                </span>
                <span className="font-mono text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                  Tarifas 2026
                </span>
              </div>

              {/* Express Preview */}
              <div className="p-3.5 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 flex items-center justify-between">
                <div>
                  <span className="font-subheading text-xs uppercase font-bold text-brand-blue-500 block">
                    Servicio Express
                  </span>
                  <span className="font-sans text-2xs text-brand-blue-400">
                    Franja de 3 hs · Corte 15:00 hs
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xl font-bold text-brand-blue-500 block">
                    Desde $3.700
                  </span>
                  <span className="font-sans text-3xs text-brand-blue-400">hasta 3 km</span>
                </div>
              </div>

              {/* LowCost Preview */}
              <div className="p-3.5 rounded-xl bg-brand-yellow-500/15 border border-brand-yellow-500/40 flex items-center justify-between">
                <div>
                  <span className="font-subheading text-xs uppercase font-bold text-brand-blue-500 block">
                    Reparto LowCost
                  </span>
                  <span className="font-sans text-2xs text-brand-blue-400">
                    En el día · Corte 13:00 hs
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xl font-bold text-brand-blue-500 block">
                    Desde $3.000
                  </span>
                  <span className="font-sans text-3xs text-brand-blue-400">hasta 3 km</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="font-sans text-xs text-brand-blue-400 italic">
                  Completá origen y destino abajo para el trazado exacto.
                </span>
              </div>
            </DoubleBezelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
