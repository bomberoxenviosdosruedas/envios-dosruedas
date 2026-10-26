import { NextRequest, NextResponse } from 'next/server';

interface PlaceSuggestion {
  placeId: string;
  description: string;
  mainText: string;
  secondaryText: string;
  lat: number;
  lng: number;
}

// Puntos de referencia y barrios oficiales de Mar del Plata para fallback y sugerencias rápidas
const LOCAL_MDP_PLACES: PlaceSuggestion[] = [
  {
    placeId: 'base-central',
    description: 'Friuli 1972, Peralta Ramos Oeste, Mar del Plata',
    mainText: 'Friuli 1972 (Base Operativa Envíos DosRuedas)',
    secondaryText: 'Peralta Ramos Oeste, Mar del Plata',
    lat: -38.0315,
    lng: -57.5682,
  },
  {
    placeId: 'centro-san-martin',
    description: 'San Martín y San Luis, Centro, Mar del Plata',
    mainText: 'San Martín y San Luis (Pleno Centro)',
    secondaryText: 'Centro, Mar del Plata',
    lat: -38.0016,
    lng: -57.5463,
  },
  {
    placeId: 'guemes-comercial',
    description: 'Güemes y Rawson, Zona Comercial Güemes, Mar del Plata',
    mainText: 'Calle Güemes y Rawson',
    secondaryText: 'Zona Comercial Güemes, Mar del Plata',
    lat: -38.0125,
    lng: -57.5412,
  },
  {
    placeId: 'shopping-los-gallegos',
    description: 'Rivadavia 3050, Los Gallegos Shopping, Mar del Plata',
    mainText: 'Los Gallegos Shopping (Rivadavia 3050)',
    secondaryText: 'Centro, Mar del Plata',
    lat: -38.0008,
    lng: -57.5502,
  },
  {
    placeId: 'puerto-banquina',
    description: 'Banquina de Pescadores, Puerto, Mar del Plata',
    mainText: 'Puerto de Mar del Plata',
    secondaryText: 'Zona Puerto, Mar del Plata',
    lat: -38.0468,
    lng: -57.5358,
  },
  {
    placeId: 'plaza-mitre',
    description: 'Plaza Mitre, Av. Colón e H. Yrigoyen, Mar del Plata',
    mainText: 'Plaza Mitre',
    secondaryText: 'Av. Colón e Hipólito Yrigoyen, Mar del Plata',
    lat: -38.0039,
    lng: -57.5542,
  },
  {
    placeId: 'constitucion',
    description: 'Av. Constitución y Tejedor, Mar del Plata',
    mainText: 'Av. Constitución y Tejedor',
    secondaryText: 'Zona Norte, Mar del Plata',
    lat: -37.9654,
    lng: -57.5583,
  },
  {
    placeId: 'la-perla',
    description: 'Plaza España, La Perla, Mar del Plata',
    mainText: 'La Perla / Plaza España',
    secondaryText: 'Costanera Norte, Mar del Plata',
    lat: -37.9912,
    lng: -57.5427,
  },
  {
    placeId: 'playa-grande',
    description: 'Playa Grande, Mar del Plata',
    mainText: 'Playa Grande (Alem y Formosa)',
    secondaryText: 'Zona Sur, Mar del Plata',
    lat: -38.0261,
    lng: -57.5325,
  },
  {
    placeId: 'los-troncos',
    description: 'Barrio Los Troncos, Urquiza y Quintana, Mar del Plata',
    mainText: 'Barrio Los Troncos',
    secondaryText: 'Mar del Plata',
    lat: -38.0211,
    lng: -57.5489,
  },
  {
    placeId: 'punta-mogotes',
    description: 'Av. de los Trabajadores 2500, Punta Mogotes, Mar del Plata',
    mainText: 'Punta Mogotes (Balnearios)',
    secondaryText: 'Zona Costera Sur, Mar del Plata',
    lat: -38.0722,
    lng: -57.5486,
  },
  {
    placeId: 'juan-b-justo',
    description: 'Av. Juan B. Justo e Independencia, Mar del Plata',
    mainText: 'Av. Juan B. Justo e Independencia',
    secondaryText: 'Avenida del Pulóver, Mar del Plata',
    lat: -38.0215,
    lng: -57.5612,
  },
];

export async function GET(req: NextRequest) {
  // Verificación de cabecera de seguridad
  const secFetchSite = req.headers.get('sec-fetch-site');
  if (secFetchSite === 'cross-site') {
    return NextResponse.json({ error: 'Acceso no permitido' }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const input = searchParams.get('input')?.trim() || '';

  if (!input || input.length < 2) {
    return NextResponse.json({ suggestions: [] });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (apiKey) {
    try {
      // Google Places Autocomplete API New (o Legacy con location & radius)
      const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
        input
      )}&location=-38.0055,-57.5426&radius=30000&strictbounds=true&components=country:ar&language=es&key=${apiKey}`;

      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data.status === 'OK' && Array.isArray(data.predictions)) {
          const suggestions = data.predictions.map((p: any) => ({
            placeId: p.place_id,
            description: p.description,
            mainText: p.structured_formatting?.main_text || p.description,
            secondaryText: p.structured_formatting?.secondary_text || 'Mar del Plata, Argentina',
          }));
          return NextResponse.json({ suggestions });
        }
      }
    } catch (err) {
      console.warn('Google Places Autocomplete failed, falling back to local dataset:', err);
    }
  }

  // Fallback con filtro inteligente local
  const lower = input.toLowerCase();
  const matched = LOCAL_MDP_PLACES.filter(
    (p) =>
      p.mainText.toLowerCase().includes(lower) ||
      p.secondaryText.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower)
  );

  return NextResponse.json({ suggestions: matched });
}
