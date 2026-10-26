'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useCotizadorUnified } from './useCotizadorUnified';
import CotizadorForm from './CotizadorForm';
import CotizadorComparativa from './CotizadorComparativa';
import CotizadorRecargos from './CotizadorRecargos';
import { AlertCircle } from 'lucide-react';

// Dynamic import for Leaflet map to guarantee no SSR execution
const CotizadorMapa = dynamic(() => import('./CotizadorMapa'), {
  ssr: false,
  loading: () => (
    <div className="double-bezel-outer h-full min-h-[380px]">
      <div className="double-bezel-inner p-6 bg-white h-full flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full border-4 border-brand-blue-100 border-t-brand-blue-500 animate-spin mb-3" />
        <span className="font-sans text-xs uppercase tracking-wider text-brand-blue-400 font-semibold">
          Cargando mapa de Mar del Plata...
        </span>
      </div>
    </div>
  ),
});

export default function CotizadorUnificado() {
  const {
    origen,
    destino,
    setOrigen,
    setDestino,
    swapPoints,
    clienteNombre,
    setClienteNombre,
    clienteTelefono,
    setClienteTelefono,
    paqueteDetalle,
    setPaqueteDetalle,
    isCalculating,
    distanceKm,
    expressPrice,
    lowCostPrice,
    error,
    getWhatsAppUrl,
  } = useCotizadorUnified();

  return (
    <div className="space-y-12">
      {/* Error alert if any */}
      {error && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Bloque Superior: Formulario + Mapa */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-6 h-full">
          <CotizadorForm
            origen={origen}
            destino={destino}
            onSetOrigen={setOrigen}
            onSetDestino={setDestino}
            onSwap={swapPoints}
            clienteNombre={clienteNombre}
            setClienteNombre={setClienteNombre}
            clienteTelefono={clienteTelefono}
            setClienteTelefono={setClienteTelefono}
            paqueteDetalle={paqueteDetalle}
            setPaqueteDetalle={setPaqueteDetalle}
            isCalculating={isCalculating}
          />
        </div>

        <div className="lg:col-span-6 h-full">
          <CotizadorMapa
            origen={origen}
            destino={destino}
            distanceKm={distanceKm}
          />
        </div>
      </div>

      {/* Bloque Medio: Comparativa Dual */}
      <CotizadorComparativa
        distanceKm={distanceKm}
        expressPrice={expressPrice}
        lowCostPrice={lowCostPrice}
        getWhatsAppUrl={getWhatsAppUrl}
        isCalculating={isCalculating}
      />

      {/* Bloque Inferior: Política de Recargos */}
      <CotizadorRecargos />
    </div>
  );
}
