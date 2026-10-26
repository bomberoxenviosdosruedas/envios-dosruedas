import React from 'react';
import { MapPin, Compass, ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';
import { HeroProceduralBackground } from '@/components/ui/HeroProceduralBackground';
import { Knockout } from '@/components/ui/Knockout';
import { Badge } from '@/components/ui/Badge';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';

export default function CoberturaHero() {
  return (
    <section
      id="cobertura-hero"
      aria-label="Cobertura territorial de envíos en moto en Mar del Plata"
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
              icon={<Compass className="h-4 w-4" aria-hidden="true" />}
            >
              5 Radios Zonales Oficiales
            </Badge>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
              <span className="block">Cobertura en</span>
              <Knockout>toda la ciudad</Knockout>
              <span className="block">de Mar del Plata</span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-white/90 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
              Llegamos a cada rincón de Mar del Plata y localidades aledañas con cadetería propia en moto. Conocé nuestros 5 radios urbanos de despacho habitual y las condiciones para zonas periféricas.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
              <CTANestedPill
                href="/cotizar"
                variant="primary"
                size="large"
                icon={<MapPin className="w-5 h-5" />}
                iconPosition="left"
              >
                Cotizá según tu dirección
              </CTANestedPill>
              <a
                href="#mapa-cobertura"
                className="inline-flex min-h-11 items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 transition-colors"
              >
                <ChevronDown className="h-5 w-5 shrink-0" aria-hidden="true" />
                Explorar mapa interactivo
              </a>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono text-white/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-400" />
                Base Central: Friuli 1972
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-400" />
                Hasta 10 km urbanos
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-400" />
                Periferia lineal a $1.000/km
              </span>
            </div>
          </div>

          {/* RIGHT 5 */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
            <DoubleBezelCard
              className="w-full max-w-md shadow-2xl"
              innerClassName="p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-brand-blue-100 pb-4">
                <span className="font-subheading text-xs font-bold uppercase tracking-wider text-brand-blue-500">
                  Esquema Territorial
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-2xs font-bold bg-brand-yellow-500/20 text-brand-blue-500 border border-brand-yellow-500/40">
                  Mapa Verificado
                </span>
              </div>

              <div className="space-y-3 font-sans text-xs text-brand-blue-500">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-brand-blue-50/50">
                  <span className="font-bold">Zona 1 (0 a 3 km)</span>
                  <span className="font-mono font-bold text-brand-blue-600">Centro / Güemes / Chauvín</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-brand-blue-50/50">
                  <span className="font-bold">Zona 2 (3 a 5 km)</span>
                  <span className="font-mono font-bold text-brand-blue-600">San José / Puerto / La Perla</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-brand-blue-50/50">
                  <span className="font-bold">Zona 3 (5 a 7 km)</span>
                  <span className="font-mono font-bold text-brand-blue-600">Constitución / Pompeya / Caisamar</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-brand-blue-50/50">
                  <span className="font-bold">Zona 4 (7 a 10 km)</span>
                  <span className="font-mono font-bold text-brand-blue-600">Punta Mogotes / Faro / El Gaucho</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-brand-yellow-500/20 border border-brand-yellow-500/40">
                  <span className="font-bold">Zona 5 (&gt; 10 km)</span>
                  <span className="font-mono font-bold text-brand-blue-600">Batán / Sierra / Chapadmalal</span>
                </div>
              </div>
            </DoubleBezelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
