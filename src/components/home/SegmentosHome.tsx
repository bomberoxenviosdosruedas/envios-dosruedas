import Link from 'next/link';
import { User, ShoppingBag, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { Badge } from '@/components/ui/Badge';

const segmentos = [
  {
    title: 'Particulares',
    subtitle: 'Soluciones Rápidas del Día',
    desc: 'Trámites urgentes, llaves olvidadas, compras de farmacia y encomiendas personales en toda la ciudad.',
    icon: User,
    points: [
      'Cadete a domicilio en franja de 3 hs',
      'Seguimiento directo vía WhatsApp',
      'Pago en efectivo o transferencia',
    ],
    ctaText: 'Pedir Envío Particular',
    ctaHref: '/cotizar',
    badge: 'Urgencias y Trámites',
  },
  {
    title: 'Comercios & Tiendas',
    subtitle: 'Ventas Online y Redes',
    desc: 'Envíos en el día para tiendas de Instagram, Tiendanube y Mercado Envíos Flex con cobro contra reembolso.',
    icon: ShoppingBag,
    points: [
      'Tarifas planas preferenciales',
      'Cobranza en efectivo y liquidación 24 hs',
      'Depósito y stock en Friuli 1972',
    ],
    ctaText: 'Conocer Plan Emprendedor',
    ctaHref: '/servicios/plan-emprendedores',
    badge: 'Más Elegido por E-commerce',
    featured: true,
  },
  {
    title: 'Empresas & Estudios',
    subtitle: 'Cuenta Corriente Corporativa',
    desc: 'Cadetería programada, remitos firmados, documentación bancaria y facturación unificada fin de mes.',
    icon: Building2,
    points: [
      'Factura mensual y detalle de viajes',
      'Prioridad de asignación de flota',
      'Atención personalizada con ejecutivo',
    ],
    ctaText: 'Abrir Cuenta Corriente',
    ctaHref: '/servicios/empresas-cuenta-corriente',
    badge: 'B2B y Profesionales',
  },
];

export default function SegmentosHome() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-blue-50/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-subheading text-sm uppercase tracking-wider text-brand-blue-400 font-bold">
            Adaptados a tu Necesidad
          </span>
          <h2 className="font-display text-3xl sm:text-5xl uppercase text-brand-blue-500 leading-tight">
            ¿Quiénes eligen Envíos DosRuedas?
          </h2>
          <p className="font-sans text-brand-blue-400 text-lg leading-relaxed">
            Una flota propia, tres soluciones diseñadas a medida para cada tipo de despacho en Mar del Plata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {segmentos.map((seg) => {
            const Icon = seg.icon;
            return (
              <DoubleBezelCard
                key={seg.title}
                outerClassName={seg.featured ? 'ring-2 ring-brand-yellow-500 shadow-md' : ''}
                innerClassName="flex flex-col justify-between h-full space-y-6"
              >
                <div>
                  {/* Header de la tarjeta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant={seg.featured ? 'urgent' : 'neutral'} size="sm">
                      {seg.badge}
                    </Badge>
                  </div>

                  <h3 className="font-display text-2xl uppercase text-brand-blue-500 mb-1">
                    {seg.title}
                  </h3>
                  <p className="font-subheading text-sm font-bold uppercase tracking-wide text-brand-blue-400 mb-3">
                    {seg.subtitle}
                  </p>
                  <p className="font-sans text-brand-blue-400 text-sm leading-relaxed mb-6">
                    {seg.desc}
                  </p>

                  {/* Puntos destacados */}
                  <ul className="space-y-2.5 pt-2 border-t border-brand-blue-50">
                    {seg.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs font-sans text-brand-blue-500">
                        <CheckCircle2 className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón CTA con Nested Pill */}
                <CTANestedPill
                  href={seg.ctaHref}
                  variant={seg.featured ? 'primary' : 'outline'}
                  size="default"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {seg.ctaText}
                </CTANestedPill>
              </DoubleBezelCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
