'use client';

import { useState, useCallback } from 'react';
import { calculateDualQuoteAction } from '@/actions/quote';

export interface LocationPoint {
  address: string;
  lat: number;
  lng: number;
  placeId?: string;
}

export function useCotizadorUnified() {
  const [origen, setOrigenState] = useState<LocationPoint>({
    address: 'Friuli 1972, Mar del Plata (Base Central)',
    lat: -38.0315,
    lng: -57.5682,
    placeId: 'base-central',
  });

  const [destino, setDestinoState] = useState<LocationPoint>({
    address: 'San Martín y San Luis, Centro, Mar del Plata',
    lat: -38.0016,
    lng: -57.5463,
    placeId: 'centro-san-martin',
  });

  const [clienteNombre, setClienteNombre] = useState('');
  const [clienteTelefono, setClienteTelefono] = useState('');
  const [paqueteDetalle, setPaqueteDetalle] = useState('');

  const [isCalculating, setIsCalculating] = useState(false);
  const [distanceKm, setDistanceKm] = useState<number | null>(4.2);
  const [expressPrice, setExpressPrice] = useState<number | 'consultar' | null>(4600);
  const [lowCostPrice, setLowCostPrice] = useState<number | 'consultar' | null>(4000);
  const [error, setError] = useState<string | null>(null);

  const calculate = useCallback(
    async (orig: LocationPoint = origen, dest: LocationPoint = destino) => {
      if (!orig.lat || !orig.lng || !dest.lat || !dest.lng) {
        setError('Por favor seleccioná un punto de retiro y entrega válidos.');
        return;
      }

      setIsCalculating(true);
      setError(null);

      try {
        const result = await calculateDualQuoteAction({
          origenLat: orig.lat,
          origenLng: orig.lng,
          destinoLat: dest.lat,
          destinoLng: dest.lng,
        });

        if (result.success) {
          setDistanceKm(result.distanceKm);
          setExpressPrice(result.expressPrice);
          setLowCostPrice(result.lowCostPrice);
        } else {
          setError(result.error || 'No se pudo cotizar la ruta solicitada.');
        }
      } catch (err) {
        console.error('Calculation hook error:', err);
        setError('Ocurrió un error al calcular la tarifa. Por favor reintentá.');
      } finally {
        setIsCalculating(false);
      }
    },
    [origen, destino]
  );

  const setOrigen = (point: LocationPoint) => {
    setOrigenState(point);
    calculate(point, destino);
  };

  const setDestino = (point: LocationPoint) => {
    setDestinoState(point);
    calculate(origen, point);
  };

  const swapPoints = () => {
    const temp = origen;
    setOrigenState(destino);
    setDestinoState(temp);
    calculate(destino, temp);
  };

  const getWhatsAppUrl = (service: 'EXPRESS' | 'LOW_COST') => {
    const isExpress = service === 'EXPRESS';
    const serviceName = isExpress ? 'EXPRESS (Franja 3 hs)' : 'LOWCOST (En el día)';
    const priceFormatted = isExpress
      ? expressPrice === 'consultar'
        ? 'A consultar (+20 km)'
        : `$${expressPrice?.toLocaleString('es-AR')}`
      : lowCostPrice === 'consultar'
      ? 'A consultar (+20 km)'
      : `$${lowCostPrice?.toLocaleString('es-AR')}`;

    const text = encodeURIComponent(
      `Hola Envíos DosRuedas! 🛵 Cotizo un envío ${serviceName} desde la web:
• Origen (Retiro): ${origen.address}
• Destino (Entrega): ${destino.address}
• Distancia vial estimada: ${distanceKm ?? 'N/A'} km
• Tarifa estimada: ${priceFormatted}
${clienteNombre ? `• Cliente/Comercio: ${clienteNombre}` : ''}
${clienteTelefono ? `• Teléfono de contacto: ${clienteTelefono}` : ''}
${paqueteDetalle ? `• Detalle del paquete: ${paqueteDetalle}` : ''}

¿Tienen cadete disponible para coordinar? Gracias!`
    );

    return `https://wa.me/5492236602699?text=${text}`;
  };

  return {
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
    calculate,
    getWhatsAppUrl,
  };
}
