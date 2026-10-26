import React from 'react';
import { Clock, Package, ShieldCheck, MapPin, AlertCircle, Bike } from 'lucide-react';

interface ServiceSpecsProps {
  corte: string;
  entrega: string;
  capacidad?: string;
  vehiculo?: string;
  cobertura?: string;
}

export default function ServiceSpecs({
  corte,
  entrega,
  capacidad = 'Hasta 5 kg y 40 × 40 × 30 cm (bulto extra desde $1.800)',
  vehiculo = 'Moto equipada con baúl de alta seguridad / Utilitario bajo demanda',
  cobertura = 'Mar del Plata urbana, Batán, Chapadmalal y Santa Clara del Mar',
}: ServiceSpecsProps) {
  return (
    <div className="double-bezel-outer">
      <div className="double-bezel-inner p-6 sm:p-8 bg-white">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-brand-blue-100">
          <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-500">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
              Especificaciones y Condiciones Operativas
            </h2>
            <p className="font-sans text-xs text-brand-blue-400 mt-0.5">
              Parámetros técnicos estrictos para asegurar la puntualidad y seguridad de cada despacho
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
            <div className="flex items-center gap-2 mb-2 text-brand-blue-500">
              <Clock className="w-4 h-4 text-brand-yellow-500" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider">
                Horario de Corte
              </span>
            </div>
            <p className="font-display text-xl text-brand-blue-500 mb-1">{corte}</p>
            <p className="font-sans text-xs text-brand-blue-400 leading-relaxed">
              Límite para recepción de órdenes y coordinación operativa del día.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
            <div className="flex items-center gap-2 mb-2 text-brand-blue-500">
              <Clock className="w-4 h-4 text-brand-yellow-500" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider">
                Plazo de Entrega
              </span>
            </div>
            <p className="font-display text-xl text-brand-blue-500 mb-1">{entrega}</p>
            <p className="font-sans text-xs text-brand-blue-400 leading-relaxed">
              Ventana garantizada con seguimiento directo y remito de entrega.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
            <div className="flex items-center gap-2 mb-2 text-brand-blue-500">
              <Package className="w-4 h-4 text-brand-blue-500" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider">
                Capacidad Máxima
              </span>
            </div>
            <p className="font-sans text-xs text-brand-blue-500 font-semibold mb-1">
              {capacidad}
            </p>
            <p className="font-sans text-[11px] text-brand-blue-400 leading-relaxed">
              Pesos mayores o múltiples paquetes se coordinan con recargo o furgón.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100">
            <div className="flex items-center gap-2 mb-2 text-brand-blue-500">
              <Bike className="w-4 h-4 text-brand-blue-500" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider">
                Vehículo y Seguridad
              </span>
            </div>
            <p className="font-sans text-xs text-brand-blue-500 font-semibold mb-1">
              {vehiculo}
            </p>
            <p className="font-sans text-[11px] text-brand-blue-400 leading-relaxed">
              Conductores registrados con documentación y elementos de protección.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 md:col-span-2">
            <div className="flex items-center gap-2 mb-2 text-brand-blue-500">
              <MapPin className="w-4 h-4 text-brand-blue-500" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider">
                Radio de Cobertura
              </span>
            </div>
            <p className="font-sans text-xs text-brand-blue-500 font-semibold mb-1">
              {cobertura}
            </p>
            <p className="font-sans text-[11px] text-brand-blue-400 leading-relaxed">
              Base física de despacho en Friuli 1972, Peralta Ramos Oeste.
            </p>
          </div>
        </div>

        {/* Legal & Fiscal Notice */}
        <div className="mt-6 pt-5 border-t border-brand-blue-100 flex items-start gap-3 bg-brand-blue-50/60 p-4 rounded-xl">
          <AlertCircle className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" />
          <p className="font-sans text-xs text-brand-blue-400 leading-relaxed">
            <strong className="text-brand-blue-500">Aclaración impositiva:</strong> Envíos DosRuedas opera bajo Régimen Simplificado (Monotributo). Emitimos Factura C electrónica para todos los servicios. <strong className="text-brand-blue-500">No emitimos Factura A.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
