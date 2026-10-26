import React from 'react';
import { CloudRain, Hourglass, PlusCircle, PackageCheck, Info } from 'lucide-react';

export default function CotizadorRecargos() {
  return (
    <div className="double-bezel-outer">
      <div className="double-bezel-inner p-6 sm:p-8 bg-white">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-brand-blue-100">
          <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-500">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
              3. Política de Recargos Transparentes
            </h3>
            <p className="font-sans text-xs text-brand-blue-400 mt-0.5">
              Condiciones claras y sin letra chica para garantizar un servicio justo y seguro
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Recargo 1: Lluvia */}
          <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-8 h-8 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center">
                  <CloudRain className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs font-bold text-brand-blue-500 bg-white px-2 py-0.5 rounded border border-brand-blue-100">
                  +30% a +50%
                </span>
              </div>
              <h4 className="font-display text-base uppercase tracking-tight text-brand-blue-500 mb-1">
                Día de Lluvia
              </h4>
              <p className="font-sans text-xs text-brand-blue-400 leading-relaxed">
                Aplica según la intensidad meteorológica para proteger la integridad del repartidor y el equipamiento estanco de la moto.
              </p>
            </div>
          </div>

          {/* Recargo 2: Espera en Puerta */}
          <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 flex items-center justify-center">
                  <Hourglass className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs font-bold text-brand-blue-500 bg-white px-2 py-0.5 rounded border border-brand-blue-100">
                  10 min gratis
                </span>
              </div>
              <h4 className="font-display text-base uppercase tracking-tight text-brand-blue-500 mb-1">
                Espera en Puerta
              </h4>
              <p className="font-sans text-xs text-brand-blue-400 leading-relaxed">
                Los primeros 10 minutos son sin cargo. A partir del minuto 11 se cobra $2.200 por cada bloque de 10 minutos de espera.
              </p>
            </div>
          </div>

          {/* Recargo 3: Paradas Extra */}
          <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-8 h-8 rounded-lg bg-green-100/80 text-green-700 flex items-center justify-center">
                  <PlusCircle className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs font-bold text-brand-blue-500 bg-white px-2 py-0.5 rounded border border-brand-blue-100">
                  +50% de viaje
                </span>
              </div>
              <h4 className="font-display text-base uppercase tracking-tight text-brand-blue-500 mb-1">
                Parada Intermedia
              </h4>
              <p className="font-sans text-xs text-brand-blue-400 leading-relaxed">
                Desvío en el trayecto para firma de remito, retiro o entrega secundaria (hasta 2 km adicionales sobre la ruta).
              </p>
            </div>
          </div>

          {/* Recargo 4: Bulto Extra */}
          <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-8 h-8 rounded-lg bg-purple-100/80 text-purple-700 flex items-center justify-center">
                  <PackageCheck className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs font-bold text-brand-blue-500 bg-white px-2 py-0.5 rounded border border-brand-blue-100">
                  Desde $1.800
                </span>
              </div>
              <h4 className="font-display text-base uppercase tracking-tight text-brand-blue-500 mb-1">
                Bulto Extra / Peso
              </h4>
              <p className="font-sans text-xs text-brand-blue-400 leading-relaxed">
                Paquetes que superen los 5 kg o medidas superiores a 40x40x30 cm que requieran sujeción especial en baúl de moto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
