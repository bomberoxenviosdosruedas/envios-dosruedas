'use server';

import { cache } from 'react';
import { z } from 'zod';
import {
  calculateExpressPrice,
  calculateLowCostPrice,
  calculateFallbackDistance,
} from '@/lib/pricing';

const quoteSchema = z.object({
  origenLat: z.number().finite(),
  origenLng: z.number().finite(),
  destinoLat: z.number().finite(),
  destinoLng: z.number().finite(),
});

export const fetchRouteDistance = cache(
  async (oLat: number, oLng: number, dLat: number, dLng: number): Promise<number> => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    if (apiKey) {
      try {
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${oLat},${oLng}&destination=${dLat},${dLng}&mode=driving&key=${apiKey}`;
        const res = await fetch(url, { next: { revalidate: 3600 } });
        if (res.ok) {
          const data = await res.json();
          if (data.status === 'OK' && data.routes?.[0]?.legs?.[0]?.distance?.value) {
            return Math.round((data.routes[0].legs[0].distance.value / 1000) * 10) / 10;
          }
        }
      } catch (err) {
        console.warn('Google Maps Directions API error, using urban fallback:', err);
      }
    }

    // Fallback geodésico con tortuosidad urbana de Mar del Plata
    return calculateFallbackDistance(oLat, oLng, dLat, dLng);
  }
);

export interface QuoteCalculationResult {
  success: boolean;
  distanceKm: number;
  expressPrice: number | 'consultar';
  lowCostPrice: number | 'consultar';
  error: string | null;
}

export async function calculateDualQuoteAction(params: {
  origenLat: number;
  origenLng: number;
  destinoLat: number;
  destinoLng: number;
}): Promise<QuoteCalculationResult> {
  const parseResult = quoteSchema.safeParse(params);
  if (!parseResult.success) {
    return {
      success: false,
      distanceKm: 0,
      expressPrice: 0,
      lowCostPrice: 0,
      error: 'Coordenadas de origen o destino no válidas.',
    };
  }

  const { origenLat, origenLng, destinoLat, destinoLng } = parseResult.data;

  try {
    const distanceKm = await fetchRouteDistance(origenLat, origenLng, destinoLat, destinoLng);
    const expressPrice = calculateExpressPrice(distanceKm);
    const lowCostPrice = calculateLowCostPrice(distanceKm);

    return {
      success: true,
      distanceKm,
      expressPrice,
      lowCostPrice,
      error: null,
    };
  } catch (err) {
    console.error('Error calculando cotización dual:', err);
    return {
      success: false,
      distanceKm: 0,
      expressPrice: 0,
      lowCostPrice: 0,
      error: 'No se pudo calcular la ruta vial. Por favor intentá nuevamente.',
    };
  }
}
