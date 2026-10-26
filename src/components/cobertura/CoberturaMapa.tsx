'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Layers, Navigation, Compass, Info } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

interface ZoneOverlay {
  id: string;
  name: string;
  center: [number, number];
  radius: number;
  color: string;
  fillColor: string;
  barrios: string;
  frecuencia: string;
}

const ZONES_DATA: ZoneOverlay[] = [
  {
    id: 'z1',
    name: 'Zona 1: Centro y Macrocentro',
    center: [-38.003, -57.548],
    radius: 2200,
    color: '#0950F6',
    fillColor: '#0950F6',
    barrios: 'San Martín, Güemes, Plaza Mitre, La Perla, Nueva Terminal',
    frecuencia: 'Alta Frecuencia (Salidas cada 30 min)',
  },
  {
    id: 'z2',
    name: 'Zona 2: Puerto y Sur Urbano',
    center: [-38.055, -57.545],
    radius: 3400,
    color: '#3570F8',
    fillColor: '#3570F8',
    barrios: 'Puerto Comercial, Playa Grande, Bosque Peralta Ramos, Punta Mogotes, Faro',
    frecuencia: 'Diario (Rondas continuas)',
  },
  {
    id: 'z3',
    name: 'Zona 3: Norte y Constitución',
    center: [-37.968, -57.555],
    radius: 2800,
    color: '#628FF9',
    fillColor: '#628FF9',
    barrios: 'Parque Luro, Av. Constitución, Estrada, Aeropuerto, Estación Camet',
    frecuencia: 'Diario (Rondas continuas)',
  },
  {
    id: 'z4',
    name: 'Zona 4: Oeste Urbano',
    center: [-38.002, -57.595],
    radius: 3200,
    color: '#8EAFFB',
    fillColor: '#8EAFFB',
    barrios: 'Los Galpones, Regional, Libertad, Av. Colón al fondo, Autódromo',
    frecuencia: 'Diario (Rondas continuas)',
  },
  {
    id: 'z5',
    name: 'Zona 5: Periferia y Alrededores',
    center: [-38.020, -57.650],
    radius: 9500,
    color: '#FFEC01',
    fillColor: '#FFF45C',
    barrios: 'Batán, Sierra de los Padres, Camet Norte, Santa Clara, Chapadmalal',
    frecuencia: 'Tarifa lineal por Km ($1.000/km)',
  },
];

export default function CoberturaMapa() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [activeZone, setActiveZone] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      const L = (await import('leaflet')).default;

      if ((mapContainerRef.current as any)._leaflet_id) {
        return;
      }

      // Center in Mar del Plata
      const map = L.map(mapContainerRef.current, {
        center: [-38.015, -57.575],
        zoom: 11,
        zoomControl: true,
        attributionControl: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(map);

      // Add Base Central marker (Friuli 1972)
      const baseIcon = L.divIcon({
        className: 'custom-base-marker',
        html: `
          <div style="position: relative; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center;">
            <div style="position: absolute; width: 38px; height: 38px; background: #FFEC01; border: 3px solid #0950F6; border-radius: 50%; box-shadow: 0 4px 12px rgba(9,80,246,0.3);"></div>
            <div style="position: relative; width: 14px; height: 14px; background: #0950F6; border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -8px; left: 14px; width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 8px solid #0950F6;"></div>
          </div>
        `,
        iconSize: [38, 46],
        iconAnchor: [19, 44],
        popupAnchor: [0, -42],
      });

      L.marker([-38.0315, -57.5682], { icon: baseIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family: inherit; font-size: 12px;">
            <strong style="color: #0950F6; font-size: 13px;">BASE CENTRAL OPERATIVA</strong><br/>
            Friuli 1972, Peralta Ramos Oeste<br/>
            Mar del Plata (B7600)<br/>
            <em>Punto de despacho y guarda de flota</em>
          </div>`
        )
        .openPopup();

      // Add Zone Overlays
      ZONES_DATA.forEach((zone) => {
        const circle = L.circle(zone.center, {
          radius: zone.radius,
          color: zone.color,
          fillColor: zone.fillColor,
          fillOpacity: 0.18,
          weight: 2,
          dashArray: zone.id === 'z5' ? '6, 6' : undefined,
        }).addTo(map);

        circle.bindTooltip(
          `<strong>${zone.name}</strong><br/>${zone.barrios}<br/><em>${zone.frecuencia}</em>`,
          { sticky: true }
        );

        circle.on('click', () => {
          if (isMounted) setActiveZone(zone.id);
        });
      });

      mapInstanceRef.current = map;
    }

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="double-bezel-outer">
      <div className="double-bezel-inner p-4 sm:p-6 bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-brand-blue-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-500">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                Visor Interactivo de Radios Urbanos
              </h2>
              <p className="font-sans text-xs text-brand-blue-400 mt-0.5">
                Visualización satelital y perimetral de Mar del Plata
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-sans text-brand-blue-500 bg-brand-blue-50 px-3 py-1.5 rounded-xl border border-brand-blue-100">
            <MapPin className="w-4 h-4 text-brand-yellow-500 fill-brand-yellow-500" />
            <span>Base Central: Friuli 1972</span>
          </div>
        </div>

        {/* Canvas de Mapa */}
        <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-xl overflow-hidden border border-brand-blue-200">
          <div ref={mapContainerRef} className="w-full h-full z-0" />

          {/* Floating Zone Pills on Top Left */}
          <div className="absolute top-3 left-3 z-[1000] hidden sm:flex flex-col gap-1.5 max-w-xs bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-brand-blue-200 shadow-md text-xs">
            <span className="font-sans font-bold uppercase text-[10px] tracking-wider text-brand-blue-400 mb-0.5">
              Radios de Entrega
            </span>
            {ZONES_DATA.map((z) => (
              <div
                key={z.id}
                className={`flex items-center gap-2 px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  activeZone === z.id
                    ? 'bg-brand-blue-500 text-white font-semibold'
                    : 'text-brand-blue-500 hover:bg-brand-blue-50'
                }`}
                onClick={() => {
                  setActiveZone(z.id);
                  if (mapInstanceRef.current) {
                    mapInstanceRef.current.flyTo(z.center, z.id === 'z5' ? 10 : 12);
                  }
                }}
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0 border border-black/20"
                  style={{ backgroundColor: z.color }}
                />
                <span className="truncate">{z.name}</span>
              </div>
            ))}
          </div>

          {/* Floating base pin indicator on bottom right */}
          <div className="absolute bottom-3 right-3 z-[1000] bg-white/95 backdrop-blur-xs px-3 py-2 rounded-xl border border-brand-blue-200 shadow-md text-xs font-sans flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-yellow-500 border border-brand-blue-500" />
            <span className="text-brand-blue-500 font-bold">Friuli 1972 (Base Logística)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
