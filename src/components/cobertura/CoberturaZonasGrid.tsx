import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Clock, Calculator, ShieldCheck } from 'lucide-react';

export interface ZonaInfo {
  id: string;
  number: string;
  name: string;
  barrios: string;
  tiempo: string;
  status: string;
  tarifaRef: string;
  highlight?: boolean;
}

const ZONAS: ZonaInfo[] = [
  {
    id: 'z1',
    number: '01',
    name: 'Zona 1: Centro y Macrocentro',
    barrios: 'San Martín, Peatonal, Güemes comercial, Plaza Mitre, La Perla, Nueva Terminal Ferroautomotora, Terminal Vieja (Paseo Aldrey) y Microcentro.',
    tiempo: 'Salidas continuas cada 30-45 minutos',
    status: 'Alta Frecuencia',
    tarifaRef: 'Tarifa mínima desde $3.000 (LowCost) / $3.700 (Express)',
  },
  {
    id: 'z2',
    number: '02',
    name: 'Zona 2: Puerto y Sur Urbano',
    barrios: 'Puerto Comercial e Industrial, Playa Grande, Alem, Bosque Peralta Ramos, Alfar, Punta Mogotes hasta Faro de la Memoria.',
    tiempo: 'Rondas diarias continuas de mañana y tarde',
    status: 'Despacho Diario',
    tarifaRef: 'Desde $4.000 a $6.100 según km vial',
  },
  {
    id: 'z3',
    number: '03',
    name: 'Zona 3: Norte y Constitución',
    barrios: 'Parque Luro, Av. Constitución, Estrada, Aeropuerto Astor Piazzolla, Estación Camet, Barrio El Grosellar y Montemar.',
    tiempo: 'Rondas diarias matutinas y vespertinas',
    status: 'Despacho Diario',
    tarifaRef: 'Desde $4.600 a $6.100 según km vial',
  },
  {
    id: 'z4',
    number: '04',
    name: 'Zona 4: Oeste Urbano',
    barrios: 'Los Galpones, Regional, Libertad, Av. Colón al fondo, Autódromo, Barrio Centenario, Las Lilas y Coronel Dorrego.',
    tiempo: 'Rondas programadas en el día',
    status: 'Despacho Diario',
    tarifaRef: 'Desde $4.000 a $5.300 según km vial',
  },
  {
    id: 'z5',
    number: '05',
    name: 'Zona 5: Periferia y Destinos Especiales',
    barrios: 'Batán centro y zona rural, Sierra de los Padres, Camet Norte, Santa Clara del Mar, Chapadmalal y Acantilados extendido.',
    tiempo: 'Horarios pactados con antelación previa',
    status: 'Tarifa por Km ($1.000/km)',
    tarifaRef: 'Cálculo lineal de ruta vial ($1.000/km)',
    highlight: true,
  },
];

export default function CoberturaZonasGrid() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-brand-blue-100">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
            Detalle de los 5 Radios Zonales
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-blue-400 mt-0.5">
            Barrios alcanzados, frecuencias de reparto y valores de referencia oficiales 2026
          </p>
        </div>

        <Link
          href="/cotizar"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-sans text-xs font-bold uppercase tracking-wider hover:bg-brand-yellow-400 transition-all shadow-xs"
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>Cotizar mi viaje exacto</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ZONAS.map((z) => (
          <div
            key={z.id}
            className={`double-bezel-outer h-full ${
              z.highlight ? 'ring-2 ring-brand-yellow-500' : ''
            }`}
          >
            <div className="double-bezel-inner p-6 sm:p-7 bg-white h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base font-bold text-brand-blue-500 bg-brand-blue-50 w-8 h-8 rounded-lg flex items-center justify-center border border-brand-blue-100">
                      {z.number}
                    </span>
                    <span className="font-display text-lg uppercase tracking-tight text-brand-blue-500">
                      {z.name}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-brand-blue-400 block mb-1">
                    Barrios y Puntos de Referencia:
                  </span>
                  <p className="font-sans text-xs text-brand-blue-500/80 leading-relaxed">
                    {z.barrios}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 text-xs space-y-1 mb-4">
                  <div className="flex items-center gap-2 text-brand-blue-500">
                    <Clock className="w-3.5 h-3.5 text-brand-yellow-500 shrink-0" />
                    <span className="font-semibold">{z.tiempo}</span>
                  </div>
                  <div className="text-[11px] text-brand-blue-400 font-mono pl-5">
                    {z.tarifaRef}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-brand-blue-100 flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-brand-blue-500 bg-brand-yellow-500/20 px-2.5 py-1 rounded-md border border-brand-yellow-500/30">
                  {z.status}
                </span>

                <Link
                  href="/cotizar"
                  className="font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500 hover:text-brand-blue-600 inline-flex items-center gap-1"
                >
                  <span>Calcular</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
