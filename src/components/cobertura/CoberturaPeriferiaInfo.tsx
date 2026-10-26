import React from 'react';
import { AlertCircle, Navigation, MessageCircle, ArrowRight } from 'lucide-react';

export default function CoberturaPeriferiaInfo() {
  const whatsappUrl = `https://wa.me/5492236602699?text=${encodeURIComponent(
    'Hola Envíos DosRuedas! Necesito consultar la cotización para un destino periférico (Batán / Sierra / Chapadmalal / Santa Clara).'
  )}`;

  return (
    <div className="double-bezel-outer">
      <div className="double-bezel-inner p-6 sm:p-8 bg-white">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-brand-blue-100">
          <div className="w-10 h-10 rounded-xl bg-brand-yellow-500/20 text-brand-blue-500 flex items-center justify-center font-bold">
            <Navigation className="w-5 h-5 text-brand-blue-500" />
          </div>
          <div>
            <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
              Condiciones para Destinos Periféricos e Interurbanos
            </h3>
            <p className="font-sans text-xs text-brand-blue-400 mt-0.5">
              Batán, Sierra de los Padres, Chapadmalal, Acantilados Sur y Santa Clara del Mar
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-brand-blue-500 font-sans">
          <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 space-y-2">
            <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase tracking-wider block">
              Modalidad de Cálculo
            </span>
            <h4 className="font-sans font-bold text-sm text-brand-blue-500">
              Tarifa Lineal ($1.000/km)
            </h4>
            <p className="text-brand-blue-400 leading-relaxed">
              Los viajes que excedan el límite urbano de 10 km se computan a $1.000 por kilómetro lineal de recorrido real de asfalto medido desde el punto de retiro hasta el destino.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 space-y-2">
            <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase tracking-wider block">
              Tramos Mayores a 20 Km
            </span>
            <h4 className="font-sans font-bold text-sm text-brand-blue-500">
              Cotización Directa por WhatsApp
            </h4>
            <p className="text-brand-blue-400 leading-relaxed">
              Para traslados de larga distancia costera o rural profunda (más de 20 km), el cotizador web indica &ldquo;A consultar&rdquo; para coordinar disponibilidad de vehículo y peajes de ser necesario.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 space-y-2">
            <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase tracking-wider block">
              Accesos de Ripio o Tierra
            </span>
            <h4 className="font-sans font-bold text-sm text-brand-blue-500">
              Coordinación Preventiva
            </h4>
            <p className="text-brand-blue-400 leading-relaxed">
              En zonas residenciales con calles de tierra o barro tras lluvias (ej. ciertas zonas de Sierra o Chapadmalal), verificamos el estado del camino antes de comprometer la moto.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-brand-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-brand-blue-400">
            <AlertCircle className="w-4 h-4 text-brand-blue-500 shrink-0" />
            <span>Emitimos Factura C electrónica para empresas y particulares. No emitimos Factura A.</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue-500 text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-brand-blue-600 transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-brand-yellow-500" />
            <span>Consultar viaje a periferia</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
