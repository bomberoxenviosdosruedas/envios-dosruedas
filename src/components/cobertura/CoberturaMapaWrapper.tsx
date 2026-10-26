'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const CoberturaMapa = dynamic(() => import('./CoberturaMapa'), {
  ssr: false,
  loading: () => (
    <div className="double-bezel-outer min-h-[440px]">
      <div className="double-bezel-inner p-8 bg-white h-full flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full border-4 border-brand-blue-100 border-t-brand-blue-500 animate-spin mb-3" />
        <span className="font-sans text-xs uppercase tracking-wider text-brand-blue-400 font-semibold">
          Cargando mapa de cobertura de Mar del Plata...
        </span>
      </div>
    </div>
  ),
});

export default function CoberturaMapaWrapper() {
  return <CoberturaMapa />;
}
