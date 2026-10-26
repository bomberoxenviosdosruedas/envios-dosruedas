import React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { HeroProceduralBackground } from '@/components/ui/HeroProceduralBackground';
import { Knockout } from '@/components/ui/Knockout';
import { Badge } from '@/components/ui/Badge';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';

interface ServiceHeroProps {
  title: string;
  knockoutText?: string;
  subtitle: string;
  badge: string;
  icon: LucideIcon;
  whatsappMessage: string;
  showQuoteButton?: boolean;
  variant?: 'express' | 'lowcost' | 'flex' | '3pl' | 'default';
  tone?: 'blue' | 'yellow';
  summaryMetrics?: { label: string; value: string; desc?: string }[];
}

export default function ServiceHero({
  title,
  knockoutText,
  subtitle,
  badge,
  icon: Icon,
  whatsappMessage,
  showQuoteButton = true,
  variant = 'default',
  tone = 'blue',
  summaryMetrics = [
    { label: 'Base Operativa', value: 'Friuli 1972', desc: 'Mar del Plata' },
    { label: 'Flota', value: '100% Propia', desc: 'Sin intermediarios' },
    { label: 'Confirmación', value: 'Inmediata', desc: 'Vía WhatsApp' },
  ],
}: ServiceHeroProps) {
  const whatsappUrl = `https://wa.me/5492236602699?text=${encodeURIComponent(whatsappMessage)}`;
  const isYellow = tone === 'yellow';

  return (
    <section
      className={`relative isolate flex min-h-[75dvh] lg:min-h-[85dvh] w-full flex-col justify-center overflow-hidden border-b-4 ${
        isYellow
          ? 'bg-brand-yellow-500 text-brand-blue-500 border-brand-blue-500'
          : 'bg-brand-blue-500 text-white border-brand-yellow-500'
      }`}
    >
      {/* Background procedural topology */}
      <HeroProceduralBackground variant={variant} tone={tone} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT 7 */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Badge
                variant={isYellow ? 'primary' : 'accent'}
                size="lg"
                className="-rotate-1"
                icon={<Icon className="h-4 w-4" aria-hidden="true" />}
              >
                {badge}
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-balance">
              <span className="block">{title}</span>
              {knockoutText && (
                <Knockout tone={isYellow ? 'blue' : 'yellow'}>{knockoutText}</Knockout>
              )}
            </h1>

            <p
              className={`text-base sm:text-lg font-sans max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light ${
                isYellow ? 'text-brand-blue-500/90' : 'text-white/90'
              }`}
            >
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
              {showQuoteButton && (
                <CTANestedPill
                  href="/cotizar"
                  variant={isYellow ? 'blue' : 'primary'}
                  size="large"
                  icon={<Calculator className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Cotizá este servicio
                </CTANestedPill>
              )}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-11 items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80 ${
                  isYellow
                    ? 'text-brand-blue-500 decoration-brand-blue-500'
                    : 'text-white decoration-brand-yellow-500 hover:text-brand-yellow-500'
                }`}
              >
                <FaWhatsapp className="h-5 w-5 shrink-0 text-[#25D366]" aria-hidden="true" />
                Consultá por WhatsApp
              </a>
            </div>

            {/* Chips de métricas */}
            <ul className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              {summaryMetrics.map((chip) => (
                <li
                  key={chip.label}
                  className={`p-3 rounded-xl border text-center ${
                    isYellow
                      ? 'bg-white/50 border-brand-blue-500/20 text-brand-blue-500'
                      : 'bg-white/10 border-white/15 text-white'
                  }`}
                >
                  <span className="block font-mono text-base sm:text-xl font-bold tabular-nums">
                    {chip.value}
                  </span>
                  <span className="block font-subheading text-2xs uppercase tracking-wider opacity-80 mt-0.5">
                    {chip.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT 5 — Visual Card */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
            <DoubleBezelCard
              className="w-full max-w-md shadow-2xl"
              innerClassName="p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-brand-blue-100 pb-4">
                <span className="font-subheading text-xs font-bold uppercase tracking-wider text-brand-blue-500">
                  Resumen Operativo
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-2xs font-bold bg-green-50 text-green-700 border border-green-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  Activo Hoy
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg uppercase text-brand-blue-500">
                      Cobertura Inmediata
                    </h4>
                    <p className="font-sans text-xs text-brand-blue-400">
                      Entregas en todo el ejido urbano de Mar del Plata y localidades aledañas.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 text-xs font-sans text-brand-blue-500 space-y-1">
                  <span className="font-bold uppercase tracking-wider block">Garantía de Entrega</span>
                  <p className="text-brand-blue-400">
                    Cadetes propios con remito digital, seguimiento en tiempo real y aviso de entrega al instante.
                  </p>
                </div>
              </div>
            </DoubleBezelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
