'use client';

import React from 'react';
import { Zap, Clock, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

interface CotizadorComparativaProps {
  distanceKm: number | null;
  expressPrice: number | 'consultar' | null;
  lowCostPrice: number | 'consultar' | null;
  getWhatsAppUrl: (service: 'EXPRESS' | 'LOW_COST') => string;
  isCalculating: boolean;
}

export default function CotizadorComparativa({
  distanceKm,
  expressPrice,
  lowCostPrice,
  getWhatsAppUrl,
  isCalculating,
}: CotizadorComparativaProps) {
  const formatPrice = (val: number | 'consultar' | null) => {
    if (val === null) return '---';
    if (val === 'consultar') return 'A consultar';
    return `$${val.toLocaleString('es-AR')}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-2 border-b border-brand-blue-100">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
            2. Comparativa de Tarifas
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-blue-400 mt-0.5">
            Elegí la modalidad que mejor se adapte a los tiempos de tu entrega
          </p>
        </div>

        {distanceKm !== null && (
          <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-200">
            Distancia: {distanceKm} km
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Card 1: EXPRESS */}
        <div className="double-bezel-outer relative">
          {/* Badge Destacado */}
          <div className="absolute -top-3.5 right-6 z-20">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-yellow-500 text-brand-blue-500 font-sans text-[11px] font-bold uppercase tracking-wider shadow-sm border border-brand-yellow-400">
              <Flame className="w-3.5 h-3.5 fill-current" />
              Prioridad Urgente
            </span>
          </div>

          <div className="double-bezel-inner p-6 sm:p-7 bg-white h-full flex flex-col justify-between border-2 border-brand-blue-300">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded-xl bg-brand-yellow-500/20 text-brand-blue-500 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5 text-brand-blue-500 stroke-[2.3]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 leading-none">
                    Servicio Express
                  </h3>
                  <span className="font-sans text-[11px] text-brand-blue-400 uppercase tracking-wider font-semibold">
                    Franja de 3 horas
                  </span>
                </div>
              </div>

              {/* Price display */}
              <div className="my-5 p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 text-center">
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-brand-blue-400 block mb-1">
                  Tarifa Final Estimada
                </span>
                <span className="font-mono text-4xl sm:text-5xl font-black text-brand-blue-500 tracking-tight">
                  {formatPrice(expressPrice)}
                </span>
                {expressPrice === 'consultar' && (
                  <span className="font-sans text-xs text-brand-blue-400 mt-1 block">
                    Distancia mayor a 20 km (ruta periférica)
                  </span>
                )}
              </div>

              {/* Key Features */}
              <ul className="space-y-2.5 text-xs font-sans text-brand-blue-500 pb-4">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Corte 15:00 hs:</strong> Pedidos recibidos hasta las 15:00 hs se entregan en el día con franja garantizada de 3 horas.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Cadete asignado de forma prioritaria con retiro inmediato.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-blue-400 shrink-0 mt-0.5" />
                  <span>Seguimiento directo de la moto por WhatsApp.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-brand-blue-100">
              <a
                href={getWhatsAppUrl('EXPRESS')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-base tracking-wider uppercase border-2 border-brand-yellow-500 hover:bg-brand-yellow-400 active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 font-bold cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-brand-blue-500 text-brand-yellow-500" />
                <span>Pedir Express por WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: LOW COST */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-7 bg-white h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded-xl bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5 text-brand-blue-500" />
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 leading-none">
                    Servicio LowCost
                  </h3>
                  <span className="font-sans text-[11px] text-brand-blue-400 uppercase tracking-wider font-semibold">
                    Reparto agrupado en el día
                  </span>
                </div>
              </div>

              {/* Price display */}
              <div className="my-5 p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 text-center">
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-brand-blue-400 block mb-1">
                  Tarifa Final Estimada
                </span>
                <span className="font-mono text-4xl sm:text-5xl font-black text-brand-blue-500 tracking-tight">
                  {formatPrice(lowCostPrice)}
                </span>
                {lowCostPrice === 'consultar' && (
                  <span className="font-sans text-xs text-brand-blue-400 mt-1 block">
                    Distancia mayor a 20 km (ruta periférica)
                  </span>
                )}
              </div>

              {/* Key Features */}
              <ul className="space-y-2.5 text-xs font-sans text-brand-blue-500 pb-4">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-brand-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Corte 13:00 hs:</strong> Retiramos antes de las 14:00 y entregamos en hoja de ruta hasta las 19:00 hs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Ideal para tiendas online, indumentaria y envíos sin urgencia horaria.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-blue-400 shrink-0 mt-0.5" />
                  <span>Máximo ahorro con la misma seriedad y custodia.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-brand-blue-100">
              <a
                href={getWhatsAppUrl('LOW_COST')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-brand-blue-500 text-white font-display text-base tracking-wider uppercase border-2 border-brand-blue-500 hover:bg-brand-blue-600 active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 font-bold cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-brand-yellow-500" />
                <span>Pedir LowCost por WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
