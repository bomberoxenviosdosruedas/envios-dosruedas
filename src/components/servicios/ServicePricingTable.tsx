import React from 'react';
import Link from 'next/link';
import { Tag, ArrowRight, Calculator } from 'lucide-react';

interface PricingRow {
  range: string;
  price: string;
  note?: string;
}

interface ServicePricingTableProps {
  title?: string;
  rows: PricingRow[];
  extraNote?: string;
  showQuoteCta?: boolean;
}

export default function ServicePricingTable({
  title = 'Tabla Oficial de Tarifas 2026',
  rows,
  extraNote,
  showQuoteCta = true,
}: ServicePricingTableProps) {
  return (
    <div className="double-bezel-outer">
      <div className="double-bezel-inner p-6 sm:p-8 bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-brand-blue-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-yellow-500/20 text-brand-blue-500 flex items-center justify-center font-bold">
              <Tag className="w-5 h-5 text-brand-blue-500" />
            </div>
            <div>
              <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                {title}
              </h3>
              <p className="font-sans text-xs text-brand-blue-400 mt-0.5">
                Valores transparentes sin recargos imprevistos
              </p>
            </div>
          </div>

          {showQuoteCta && (
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-blue-50 text-brand-blue-500 hover:bg-brand-blue-100 border border-brand-blue-200 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Cotizar con dirección exacta</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-sm">
            <thead>
              <tr className="border-b border-brand-blue-100 text-[11px] font-bold uppercase tracking-wider text-brand-blue-400">
                <th className="py-3 px-4">Distancia / Zona</th>
                <th className="py-3 px-4">Tarifa Final</th>
                <th className="py-3 px-4">Modalidad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-blue-50">
              {rows.map((r, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-brand-blue-50/40 transition-colors group"
                >
                  <td className="py-3.5 px-4 font-semibold text-brand-blue-500">
                    {r.range}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-base text-brand-blue-500 group-hover:text-brand-blue-600">
                    {r.price}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-brand-blue-400">
                    {r.note || 'Despacho urbano estándar'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {extraNote && (
          <p className="mt-4 pt-4 border-t border-brand-blue-100 font-sans text-xs text-brand-blue-400 leading-relaxed">
            {extraNote}
          </p>
        )}
      </div>
    </div>
  );
}
