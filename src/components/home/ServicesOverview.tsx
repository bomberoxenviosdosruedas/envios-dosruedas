import Link from 'next/link';
import { Zap, Truck, Sparkles, Clock, Calculator, ArrowRight, Check } from 'lucide-react';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

const mainServices = [
  {
    id: 'express',
    name: 'Envíos Express',
    subtitle: 'Franja de 3 Horas',
    tagline: 'Prioridad máxima para urgencias y trámites',
    price: '$3.700',
    priceNote: 'Tarifa inicial hasta 3 km vial',
    corte: '15:00 hs',
    window: '3 hs',
    badge: 'Máxima Velocidad',
    badgeClass: 'bg-brand-blue-500 text-white',
    icon: Zap,
    features: [
      'Asignación inmediata de moto exclusiva',
      'Despacho punto a punto sin escalas intermedias',
      'Seguimiento directo vía WhatsApp con el cadete',
      'Corte de recepción: 15:00 hs',
    ],
    ctaHref: '/servicios/envios-express',
    quoteHref: '/cotizar?service=EXPRESS',
  },
  {
    id: 'lowcost',
    name: 'Reparto LowCost',
    subtitle: 'En el Día hasta 19:00 hs',
    tagline: 'El precio más bajo de Mar del Plata para tus ventas',
    price: '$3.000',
    priceNote: 'Tarifa inicial hasta 3 km vial',
    corte: '13:00 hs',
    window: 'Mismo Día',
    badge: 'Opción Más Económica',
    badgeClass: 'bg-brand-yellow-500 text-brand-blue-500 font-bold',
    icon: Truck,
    features: [
      'Ruteo inteligente optimizado por zonas',
      'Entregas programadas en el día hasta las 19:00 hs',
      'Acepta cobro contra reembolso de tus productos',
      'Corte de recepción: 13:00 hs',
    ],
    ctaHref: '/servicios/envios-lowcost',
    quoteHref: '/cotizar?service=LOW_COST',
    featured: true,
  },
  {
    id: 'flex',
    name: 'Mercado Envíos Flex',
    subtitle: 'Métricas Verdes Aseguradas',
    tagline: 'Logística oficial para vendedores de Mercado Libre',
    price: 'Tarifas ML',
    priceNote: 'Nivel 1 LowCost · Nivel 2 $6.500 · Nivel 3 $4.500',
    corte: '15:00 hs',
    window: 'Hasta 20:00 hs',
    badge: 'E-commerce Flex',
    badgeClass: 'bg-brand-blue-500 text-white',
    icon: Sparkles,
    features: [
      'Retiro en tu depósito o domicilio vendedor',
      'Escaneo y confirmación de entrega en la app de ML',
      'Protección total de tu reputación verde',
      'Entregas hasta las 20:00 hs el mismo día',
    ],
    ctaHref: '/servicios/enviosflex',
    quoteHref: '/cotizar',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Título de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-subheading text-sm uppercase tracking-wider text-brand-blue-400 font-bold">
            Catálogo Principal de Mensajería
          </span>
          <h2 className="font-display text-3xl sm:text-5xl uppercase text-brand-blue-500 leading-tight">
            Nuestros Servicios Principales
          </h2>
          <p className="font-sans text-brand-blue-400 text-lg leading-relaxed">
            Tarifas transparentes medidas por distancia vial real. Seleccioná el formato de entrega que mejor responde a tus tiempos.
          </p>
        </div>

        {/* Grilla Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {mainServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <DoubleBezelCard
                key={srv.id}
                outerClassName={srv.featured ? 'ring-2 ring-brand-yellow-500 shadow-md' : ''}
                innerClassName="flex flex-col justify-between h-full p-6 md:p-8 space-y-6"
              >
                {/* Encabezado y Badges */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`font-subheading text-xs uppercase tracking-wider px-3 py-1 rounded-full ${srv.badgeClass}`}
                    >
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl uppercase text-brand-blue-500 mb-1">
                    {srv.name}
                  </h3>
                  <p className="font-subheading text-base font-bold uppercase tracking-wide text-brand-blue-400 mb-4">
                    {srv.subtitle}
                  </p>

                  {/* Caja de Precio e Info de Corte */}
                  <div className="bg-brand-blue-50/70 rounded-2xl p-4 border border-brand-blue-100/60 mb-6 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-sans text-brand-blue-400">Tarifa base</span>
                      <div className="text-right">
                        <span className="font-mono text-3xl font-bold text-brand-blue-500">
                          {srv.price}
                        </span>
                      </div>
                    </div>
                    <p className="font-sans text-xs text-brand-blue-400 border-t border-brand-blue-100/40 pt-2">
                      {srv.priceNote}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-brand-blue-500 font-semibold pt-1">
                      <Clock className="w-3.5 h-3.5 text-brand-yellow-500 shrink-0" />
                      <span>Horario de corte: {srv.corte}</span>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-brand-blue-400 leading-relaxed mb-6">
                    {srv.tagline}
                  </p>

                  {/* Lista de Features */}
                  <ul className="space-y-3 border-t border-brand-blue-50 pt-4">
                    {srv.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs font-sans text-brand-blue-500">
                        <Check className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Acciones */}
                <div className="space-y-2.5 pt-4">
                  <CTANestedPill
                    href={srv.quoteHref}
                    variant={srv.featured ? 'primary' : 'outline'}
                    size="default"
                    className="w-full"
                    icon={<Calculator className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    Cotizar Este Servicio
                  </CTANestedPill>
                  <Link
                    href={srv.ctaHref}
                    className="w-full text-center py-2 text-xs font-subheading uppercase font-bold text-brand-blue-400 hover:text-brand-blue-500 flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Ver detalles y radios de entrega</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </DoubleBezelCard>
            );
          })}
        </div>

        {/* Link al Catálogo Completo */}
        <div className="text-center mt-12">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 font-subheading text-lg uppercase font-bold text-brand-blue-500 hover:text-brand-blue-400 transition-colors border-b-2 border-brand-yellow-500 pb-1"
          >
            Conocé nuestros 7 servicios de logística y fulfillment en Friuli 1972 →
          </Link>
        </div>
      </div>
    </section>
  );
}
