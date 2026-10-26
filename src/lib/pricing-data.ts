export type ServiceType = 'LOW_COST' | 'EXPRESS';

export interface PriceRangeItem {
  id: number;
  serviceType: ServiceType;
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  descripcion: string;
}

export const OFFICIAL_PRICE_RANGES: PriceRangeItem[] = [
  // LOW_COST: Reparto en el día, corte 13:00 hs
  {
    id: 1,
    serviceType: 'LOW_COST',
    distanciaMinKm: 0.0,
    distanciaMaxKm: 3.0,
    precioRango: 3000.0,
    descripcion: 'LOW_COST: 0 a 3 km ($3.000)',
  },
  {
    id: 2,
    serviceType: 'LOW_COST',
    distanciaMinKm: 3.0,
    distanciaMaxKm: 5.0,
    precioRango: 4000.0,
    descripcion: 'LOW_COST: 3 a 5 km ($4.000)',
  },
  {
    id: 3,
    serviceType: 'LOW_COST',
    distanciaMinKm: 5.0,
    distanciaMaxKm: 7.0,
    precioRango: 5300.0,
    descripcion: 'LOW_COST: 5 a 7 km ($5.300)',
  },
  {
    id: 4,
    serviceType: 'LOW_COST',
    distanciaMinKm: 7.0,
    distanciaMaxKm: 10.0,
    precioRango: 7000.0,
    descripcion: 'LOW_COST: 7 a 10 km ($7.000)',
  },
  {
    id: 5,
    serviceType: 'LOW_COST',
    distanciaMinKm: 10.0,
    distanciaMaxKm: 9999.0,
    precioRango: 700.0,
    descripcion: 'LOW_COST: Kilómetro lineal total (+$700/km)',
  },

  // EXPRESS: Franja de 3 hs con 2 hs de anticipación, corte 15:00 hs
  {
    id: 6,
    serviceType: 'EXPRESS',
    distanciaMinKm: 0.0,
    distanciaMaxKm: 3.0,
    precioRango: 3700.0,
    descripcion: 'EXPRESS: 0 a 3 km ($3.700)',
  },
  {
    id: 7,
    serviceType: 'EXPRESS',
    distanciaMinKm: 3.0,
    distanciaMaxKm: 5.0,
    precioRango: 4600.0,
    descripcion: 'EXPRESS: 3 a 5 km ($4.600)',
  },
  {
    id: 8,
    serviceType: 'EXPRESS',
    distanciaMinKm: 5.0,
    distanciaMaxKm: 7.0,
    precioRango: 6100.0,
    descripcion: 'EXPRESS: 5 a 7 km ($6.100)',
  },
  {
    id: 9,
    serviceType: 'EXPRESS',
    distanciaMinKm: 7.0,
    distanciaMaxKm: 10.0,
    precioRango: 8200.0,
    descripcion: 'EXPRESS: 7 a 10 km ($8.200)',
  },
  {
    id: 10,
    serviceType: 'EXPRESS',
    distanciaMinKm: 10.0,
    distanciaMaxKm: 9999.0,
    precioRango: 1000.0,
    descripcion: 'EXPRESS: Kilómetro lineal total (+$1.000/km)',
  },
];
