'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  ArrowUpDown,
  Search,
  User,
  Phone,
  Package,
  Loader2,
  Check,
  Building,
} from 'lucide-react';
import { LocationPoint } from './useCotizadorUnified';

interface CotizadorFormProps {
  origen: LocationPoint;
  destino: LocationPoint;
  onSetOrigen: (point: LocationPoint) => void;
  onSetDestino: (point: LocationPoint) => void;
  onSwap: () => void;
  clienteNombre: string;
  setClienteNombre: (val: string) => void;
  clienteTelefono: string;
  setClienteTelefono: (val: string) => void;
  paqueteDetalle: string;
  setPaqueteDetalle: (val: string) => void;
  isCalculating: boolean;
}

interface Suggestion {
  placeId: string;
  description: string;
  mainText: string;
  secondaryText: string;
}

export default function CotizadorForm({
  origen,
  destino,
  onSetOrigen,
  onSetDestino,
  onSwap,
  clienteNombre,
  setClienteNombre,
  clienteTelefono,
  setClienteTelefono,
  paqueteDetalle,
  setPaqueteDetalle,
  isCalculating,
}: CotizadorFormProps) {
  // Autocomplete states for Origen
  const [origenInput, setOrigenInput] = useState(origen.address);
  const [origenSuggestions, setOrigenSuggestions] = useState<Suggestion[]>([]);
  const [isSearchingOrigen, setIsSearchingOrigen] = useState(false);
  const [showOrigenDropdown, setShowOrigenDropdown] = useState(false);

  // Autocomplete states for Destino
  const [destinoInput, setDestinoInput] = useState(destino.address);
  const [destinoSuggestions, setDestinoSuggestions] = useState<Suggestion[]>([]);
  const [isSearchingDestino, setIsSearchingDestino] = useState(false);
  const [showDestinoDropdown, setShowDestinoDropdown] = useState(false);

  const origenRef = useRef<HTMLDivElement>(null);
  const destinoRef = useRef<HTMLDivElement>(null);

  // Sync inputs with parent state when swapped
  useEffect(() => {
    setOrigenInput(origen.address);
  }, [origen.address]);

  useEffect(() => {
    setDestinoInput(destino.address);
  }, [destino.address]);

  // Click outside listener for dropdowns
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (origenRef.current && !origenRef.current.contains(e.target as Node)) {
        setShowOrigenDropdown(false);
      }
      if (destinoRef.current && !destinoRef.current.contains(e.target as Node)) {
        setShowDestinoDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounced search for Origen
  useEffect(() => {
    if (!origenInput || origenInput.length < 2 || origenInput === origen.address) {
      setOrigenSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearchingOrigen(true);
      try {
        const res = await fetch(`/api/places/autocomplete?input=${encodeURIComponent(origenInput)}`);
        if (res.ok) {
          const data = await res.json();
          setOrigenSuggestions(data.suggestions || []);
          setShowOrigenDropdown(true);
        }
      } catch (err) {
        console.error('Error fetching origen suggestions:', err);
      } finally {
        setIsSearchingOrigen(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [origenInput, origen.address]);

  // Debounced search for Destino
  useEffect(() => {
    if (!destinoInput || destinoInput.length < 2 || destinoInput === destino.address) {
      setDestinoSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearchingDestino(true);
      try {
        const res = await fetch(`/api/places/autocomplete?input=${encodeURIComponent(destinoInput)}`);
        if (res.ok) {
          const data = await res.json();
          setDestinoSuggestions(data.suggestions || []);
          setShowDestinoDropdown(true);
        }
      } catch (err) {
        console.error('Error fetching destino suggestions:', err);
      } finally {
        setIsSearchingDestino(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [destinoInput, destino.address]);

  // Geocode selection
  const handleSelectOrigen = async (sugg: Suggestion) => {
    setShowOrigenDropdown(false);
    setOrigenInput(sugg.mainText);
    try {
      const res = await fetch(`/api/places/geocode?placeId=${encodeURIComponent(sugg.placeId)}&address=${encodeURIComponent(sugg.description)}`);
      if (res.ok) {
        const data = await res.json();
        onSetOrigen({
          address: sugg.mainText,
          lat: data.lat,
          lng: data.lng,
          placeId: sugg.placeId,
        });
      }
    } catch (err) {
      console.error('Geocode origen error:', err);
    }
  };

  const handleSelectDestino = async (sugg: Suggestion) => {
    setShowDestinoDropdown(false);
    setDestinoInput(sugg.mainText);
    try {
      const res = await fetch(`/api/places/geocode?placeId=${encodeURIComponent(sugg.placeId)}&address=${encodeURIComponent(sugg.description)}`);
      if (res.ok) {
        const data = await res.json();
        onSetDestino({
          address: sugg.mainText,
          lat: data.lat,
          lng: data.lng,
          placeId: sugg.placeId,
        });
      }
    } catch (err) {
      console.error('Geocode destino error:', err);
    }
  };

  return (
    <div className="double-bezel-outer">
      <div className="double-bezel-inner p-6 sm:p-7 bg-white">
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-brand-blue-100">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
              1. Ingresá la Ruta
            </h2>
            <p className="font-sans text-xs text-brand-blue-400 mt-0.5">
              Dirección de retiro y destino en Mar del Plata y zona
            </p>
          </div>
          {isCalculating && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-blue-500 text-xs font-semibold uppercase tracking-wider">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-blue-500" />
              <span>Calculando...</span>
            </div>
          )}
        </div>

        {/* Inputs de Ubicación */}
        <div className="space-y-4 relative">
          {/* Origen Input */}
          <div ref={origenRef} className="relative">
            <label className="block font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 inline-block" />
                Punto de Retiro (Origen)
              </span>
              <span className="text-[10px] font-normal text-brand-blue-300">Mar del Plata</span>
            </label>

            <div className="relative">
              <input
                type="text"
                value={origenInput}
                onChange={(e) => setOrigenInput(e.target.value)}
                onFocus={() => {
                  if (origenSuggestions.length > 0) setShowOrigenDropdown(true);
                }}
                placeholder="Ej: Friuli 1972 o San Martín y San Luis"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-brand-blue-200 bg-brand-blue-50/40 text-brand-blue-500 placeholder:text-brand-blue-200 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:bg-white transition-all font-medium"
              />
              <MapPin className="w-4 h-4 text-brand-yellow-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {isSearchingOrigen ? (
                <Loader2 className="w-4 h-4 text-brand-blue-400 animate-spin absolute right-3.5 top-1/2 -translate-y-1/2" />
              ) : (
                <Search className="w-4 h-4 text-brand-blue-300 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              )}
            </div>

            {/* Dropdown Sugerencias Origen */}
            {showOrigenDropdown && origenSuggestions.length > 0 && (
              <ul className="absolute z-50 left-0 right-0 mt-1 max-h-56 overflow-y-auto bg-white rounded-xl border border-brand-blue-200 shadow-xl py-1 text-xs">
                {origenSuggestions.map((sugg) => (
                  <li key={sugg.placeId}>
                    <button
                      type="button"
                      onClick={() => handleSelectOrigen(sugg)}
                      className="w-full px-3.5 py-2.5 text-left hover:bg-brand-blue-50 flex items-start gap-2.5 transition-colors border-b border-brand-blue-50/60 last:border-b-0"
                    >
                      <MapPin className="w-3.5 h-3.5 text-brand-yellow-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-sans text-brand-blue-500 font-bold">
                          {sugg.mainText}
                        </strong>
                        <span className="font-sans text-[11px] text-brand-blue-400">
                          {sugg.secondaryText}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Botón de Swap */}
          <div className="flex justify-center -my-1 relative z-10">
            <button
              type="button"
              onClick={onSwap}
              aria-label="Invertir origen y destino"
              title="Invertir origen y destino"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-brand-blue-200 text-brand-blue-500 hover:bg-brand-yellow-500 hover:border-brand-yellow-500 hover:text-brand-blue-500 shadow-sm transition-all text-xs font-bold uppercase tracking-wider group cursor-pointer"
            >
              <ArrowUpDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
              <span>Invertir Sentido</span>
            </button>
          </div>

          {/* Destino Input */}
          <div ref={destinoRef} className="relative">
            <label className="block font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-blue-500 inline-block" />
                Punto de Entrega (Destino)
              </span>
              <span className="text-[10px] font-normal text-brand-blue-300">Mar del Plata</span>
            </label>

            <div className="relative">
              <input
                type="text"
                value={destinoInput}
                onChange={(e) => setDestinoInput(e.target.value)}
                onFocus={() => {
                  if (destinoSuggestions.length > 0) setShowDestinoDropdown(true);
                }}
                placeholder="Ej: Güemes y Rawson o Los Gallegos Shopping"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-brand-blue-200 bg-brand-blue-50/40 text-brand-blue-500 placeholder:text-brand-blue-200 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:bg-white transition-all font-medium"
              />
              <MapPin className="w-4 h-4 text-brand-blue-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {isSearchingDestino ? (
                <Loader2 className="w-4 h-4 text-brand-blue-400 animate-spin absolute right-3.5 top-1/2 -translate-y-1/2" />
              ) : (
                <Search className="w-4 h-4 text-brand-blue-300 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              )}
            </div>

            {/* Dropdown Sugerencias Destino */}
            {showDestinoDropdown && destinoSuggestions.length > 0 && (
              <ul className="absolute z-50 left-0 right-0 mt-1 max-h-56 overflow-y-auto bg-white rounded-xl border border-brand-blue-200 shadow-xl py-1 text-xs">
                {destinoSuggestions.map((sugg) => (
                  <li key={sugg.placeId}>
                    <button
                      type="button"
                      onClick={() => handleSelectDestino(sugg)}
                      className="w-full px-3.5 py-2.5 text-left hover:bg-brand-blue-50 flex items-start gap-2.5 transition-colors border-b border-brand-blue-50/60 last:border-b-0"
                    >
                      <MapPin className="w-3.5 h-3.5 text-brand-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-sans text-brand-blue-500 font-bold">
                          {sugg.mainText}
                        </strong>
                        <span className="font-sans text-[11px] text-brand-blue-400">
                          {sugg.secondaryText}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Datos Complementarios Opcionales */}
        <div className="mt-6 pt-5 border-t border-brand-blue-100 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-400 block">
            Datos del Remitente y Paquete (Opcional)
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-[11px] font-semibold text-brand-blue-400 mb-1">
                Tu Nombre o Comercio
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={clienteNombre}
                  onChange={(e) => setClienteNombre(e.target.value)}
                  placeholder="Ej: Tienda Verde o Carlos"
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-brand-blue-200 text-brand-blue-500 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-brand-blue-500"
                />
                <Building className="w-3.5 h-3.5 text-brand-blue-300 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block font-sans text-[11px] font-semibold text-brand-blue-400 mb-1">
                Teléfono de Contacto
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={clienteTelefono}
                  onChange={(e) => setClienteTelefono(e.target.value)}
                  placeholder="Ej: 223 555-4321"
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-brand-blue-200 text-brand-blue-500 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-brand-blue-500"
                />
                <Phone className="w-3.5 h-3.5 text-brand-blue-300 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <label className="block font-sans text-[11px] font-semibold text-brand-blue-400 mb-1">
              Detalle del Paquete / Aclaraciones
            </label>
            <div className="relative">
              <input
                type="text"
                value={paqueteDetalle}
                onChange={(e) => setPaqueteDetalle(e.target.value)}
                placeholder="Ej: Sobre con papeles, caja pequeña 1kg, timbre 2B..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-brand-blue-200 text-brand-blue-500 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-brand-blue-500"
              />
              <Package className="w-3.5 h-3.5 text-brand-blue-300 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
