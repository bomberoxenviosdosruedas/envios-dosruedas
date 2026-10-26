export interface PriceTier {
  minKm: number;
  maxKm: number;
  price: number;
}

export const EXPRESS_TIERS: readonly PriceTier[] = [
  { minKm: 0, maxKm: 3, price: 3700 },
  { minKm: 3, maxKm: 5, price: 4600 },
  { minKm: 5, maxKm: 7, price: 6100 },
  { minKm: 7, maxKm: 10, price: 8200 },
];
export const EXPRESS_PRICE_PER_KM = 1000;

export const LOW_COST_TIERS: readonly PriceTier[] = [
  { minKm: 0, maxKm: 3, price: 3000 },
  { minKm: 3, maxKm: 5, price: 4000 },
  { minKm: 5, maxKm: 7, price: 5300 },
  { minKm: 7, maxKm: 10, price: 7000 },
];
export const LOW_COST_PRICE_PER_KM = 700;

export function calculateExpressPrice(distanceKm: number): number | 'consultar' {
  if (distanceKm > 20) return 'consultar';
  const tier = EXPRESS_TIERS.find((t) => distanceKm <= t.maxKm);
  return tier ? tier.price : Math.round(distanceKm * EXPRESS_PRICE_PER_KM);
}

export function calculateLowCostPrice(distanceKm: number): number | 'consultar' {
  if (distanceKm > 20) return 'consultar';
  const tier = LOW_COST_TIERS.find((t) => distanceKm <= t.maxKm);
  return tier ? tier.price : Math.round(distanceKm * LOW_COST_PRICE_PER_KM);
}

/**
 * Cálculo geodésico Haversine con factor de tortuosidad urbana (1.32x)
 * para estimar distancia en calle real cuando no hay conexión a Google Maps API.
 */
export function calculateFallbackDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radio de la Tierra en km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const straightKm = R * c;
  const urbanTortuosity = 1.32; // Factor de trama cuadricular y diagonales de MDP
  return Math.round(straightKm * urbanTortuosity * 10) / 10;
}
