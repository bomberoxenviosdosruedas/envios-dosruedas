'use client';

import React, { useEffect, useRef, useState } from 'react';
import { LocationPoint } from './useCotizadorUnified';
import { MapPin, Navigation, Compass, Layers } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

interface CotizadorMapaProps {
  origen: LocationPoint;
  destino: LocationPoint;
  distanceKm: number | null;
}

export default function CotizadorMapa({ origen, destino, distanceKm }: CotizadorMapaProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);
  const routeLayerRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      const L = (await import('leaflet')).default;

      // Ensure container has no prior leaflet instance
      if ((mapContainerRef.current as any)._leaflet_id) {
        return;
      }

      // Mar del Plata default center
      const map = L.map(mapContainerRef.current, {
        center: [-38.0055, -57.5426],
        zoom: 12,
        zoomControl: true,
        attributionControl: false,
      });

      // CartoDB Positron tiles for high readability
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(map);

      const markersLayer = L.layerGroup().addTo(map);
      const routeLayer = L.layerGroup().addTo(map);

      mapInstanceRef.current = map;
      markersLayerRef.current = markersLayer;
      routeLayerRef.current = routeLayer;

      if (isMounted) setMapLoaded(true);
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

  // Update markers and route when origen / destino change
  useEffect(() => {
    if (!mapLoaded || !mapInstanceRef.current) return;

    let isMounted = true;

    async function updateMarkers() {
      const L = (await import('leaflet')).default;
      const map = mapInstanceRef.current;
      const markersLayer = markersLayerRef.current;
      const routeLayer = routeLayerRef.current;

      if (!map || !markersLayer || !routeLayer) return;

      markersLayer.clearLayers();
      routeLayer.clearLayers();

      const origCoord: [number, number] = [origen.lat, origen.lng];
      const destCoord: [number, number] = [destino.lat, destino.lng];

      // Custom HTML Marker for Origen (Yellow with black/blue core)
      const origenIcon = L.divIcon({
        className: 'custom-map-marker-origen',
        html: `
          <div style="position: relative; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;">
            <div style="position: absolute; width: 34px; height: 34px; background: #FFEC01; border: 2px solid #0950F6; border-radius: 50%; box-shadow: 0 4px 10px rgba(0,0,0,0.25);"></div>
            <div style="position: relative; width: 12px; height: 12px; background: #0950F6; border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -7px; left: 12px; width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 7px solid #0950F6;"></div>
          </div>
        `,
        iconSize: [34, 42],
        iconAnchor: [17, 40],
        popupAnchor: [0, -38],
      });

      // Custom HTML Marker for Destino (Brand Blue with Yellow core)
      const destinoIcon = L.divIcon({
        className: 'custom-map-marker-destino',
        html: `
          <div style="position: relative; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;">
            <div style="position: absolute; width: 34px; height: 34px; background: #0950F6; border: 2px solid #FFFFFF; border-radius: 50%; box-shadow: 0 4px 10px rgba(9,80,246,0.35);"></div>
            <div style="position: relative; width: 12px; height: 12px; background: #FFEC01; border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -7px; left: 12px; width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 7px solid #0950F6;"></div>
          </div>
        `,
        iconSize: [34, 42],
        iconAnchor: [17, 40],
        popupAnchor: [0, -38],
      });

      const mOrigen = L.marker(origCoord, { icon: origenIcon })
        .bindPopup(`<strong>Retiro:</strong><br/>${origen.address}`);
      const mDestino = L.marker(destCoord, { icon: destinoIcon })
        .bindPopup(`<strong>Entrega:</strong><br/>${destino.address}`);

      markersLayer.addLayer(mOrigen);
      markersLayer.addLayer(mDestino);

      // Trazo de ruta directo o visual
      const polyline = L.polyline([origCoord, destCoord], {
        color: '#0950F6',
        weight: 4,
        opacity: 0.8,
        dashArray: '8, 8',
      });
      routeLayer.addLayer(polyline);

      // Fit bounds
      const bounds = L.latLngBounds([origCoord, destCoord]);
      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 15,
      });
    }

    updateMarkers();
  }, [mapLoaded, origen, destino]);

  return (
    <div className="double-bezel-outer h-full">
      <div className="double-bezel-inner p-4 sm:p-5 bg-white h-full flex flex-col justify-between">
        {/* Header Map */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-blue-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-500">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-lg uppercase tracking-tight text-brand-blue-500">
                Trazado de Ruta
              </h3>
              <p className="font-sans text-[11px] text-brand-blue-400">
                Mar del Plata y perímetro urbano
              </p>
            </div>
          </div>

          {distanceKm !== null && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-brand-blue-500 text-white font-mono text-xs font-bold shadow-xs">
              <Navigation className="w-3.5 h-3.5 text-brand-yellow-500" />
              <span>{distanceKm} km estimados</span>
            </div>
          )}
        </div>

        {/* Map Canvas Container */}
        <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-xl overflow-hidden border border-brand-blue-200">
          <div ref={mapContainerRef} className="w-full h-full z-0" />

          {/* Map legend floating badge */}
          <div className="absolute bottom-3 left-3 z-[1000] bg-white/95 backdrop-blur-xs p-2.5 rounded-lg border border-brand-blue-200 shadow-md text-[11px] space-y-1.5 font-sans">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-yellow-500 border border-brand-blue-500 inline-block" />
              <span className="text-brand-blue-500 font-semibold">Origen (Retiro)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-blue-500 border border-white inline-block" />
              <span className="text-brand-blue-500 font-semibold">Destino (Entrega)</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-3 pt-3 border-t border-brand-blue-100 flex items-center justify-between text-[11px] text-brand-blue-400 font-sans">
          <span>Mapa interactivo con capas abiertas de Mar del Plata</span>
          <span className="font-semibold text-brand-blue-500">Flota Local Envíos DosRuedas</span>
        </div>
      </div>
    </div>
  );
}
