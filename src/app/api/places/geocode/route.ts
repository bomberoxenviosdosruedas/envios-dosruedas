import { NextRequest, NextResponse } from 'next/server';

const LOCAL_COORDINATES: Record<string, { lat: number; lng: number; address: string }> = {
  'base-central': {
    lat: -38.0315,
    lng: -57.5682,
    address: 'Friuli 1972, Peralta Ramos Oeste, Mar del Plata',
  },
  'centro-san-martin': {
    lat: -38.0016,
    lng: -57.5463,
    address: 'San Martín y San Luis, Centro, Mar del Plata',
  },
  'guemes-comercial': {
    lat: -38.0125,
    lng: -57.5412,
    address: 'Güemes y Rawson, Mar del Plata',
  },
  'shopping-los-gallegos': {
    lat: -38.0008,
    lng: -57.5502,
    address: 'Rivadavia 3050, Los Gallegos Shopping, Mar del Plata',
  },
  'puerto-banquina': {
    lat: -38.0468,
    lng: -57.5358,
    address: 'Banquina de Pescadores, Puerto, Mar del Plata',
  },
  'plaza-mitre': {
    lat: -38.0039,
    lng: -57.5542,
    address: 'Plaza Mitre, Av. Colón e H. Yrigoyen, Mar del Plata',
  },
  'constitucion': {
    lat: -37.9654,
    lng: -57.5583,
    address: 'Av. Constitución y Tejedor, Mar del Plata',
  },
  'la-perla': {
    lat: -37.9912,
    lng: -57.5427,
    address: 'Plaza España, La Perla, Mar del Plata',
  },
  'playa-grande': {
    lat: -38.0261,
    lng: -57.5325,
    address: 'Playa Grande, Mar del Plata',
  },
  'los-troncos': {
    lat: -38.0211,
    lng: -57.5489,
    address: 'Barrio Los Troncos, Urquiza y Quintana, Mar del Plata',
  },
  'punta-mogotes': {
    lat: -38.0722,
    lng: -57.5486,
    address: 'Av. de los Trabajadores 2500, Punta Mogotes, Mar del Plata',
  },
  'juan-b-justo': {
    lat: -38.0215,
    lng: -57.5612,
    address: 'Av. Juan B. Justo e Independencia, Mar del Plata',
  },
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const placeId = searchParams.get('placeId');
  const address = searchParams.get('address');

  if (placeId && LOCAL_COORDINATES[placeId]) {
    return NextResponse.json(LOCAL_COORDINATES[placeId]);
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (apiKey) {
    try {
      if (placeId) {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
          placeId
        )}&fields=geometry,formatted_address&key=${apiKey}`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data.status === 'OK' && data.result?.geometry?.location) {
            return NextResponse.json({
              lat: data.result.geometry.location.lat,
              lng: data.result.geometry.location.lng,
              address: data.result.formatted_address || address || '',
            });
          }
        }
      } else if (address) {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address + ', Mar del Plata, Argentina'
        )}&key=${apiKey}`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data.status === 'OK' && data.results?.[0]?.geometry?.location) {
            return NextResponse.json({
              lat: data.results[0].geometry.location.lat,
              lng: data.results[0].geometry.location.lng,
              address: data.results[0].formatted_address,
            });
          }
        }
      }
    } catch (err) {
      console.warn('Geocoding error:', err);
    }
  }

  // Fallback por defecto en Mar del Plata
  return NextResponse.json({
    lat: -38.0055,
    lng: -57.5426,
    address: address || 'Mar del Plata, Buenos Aires',
  });
}
