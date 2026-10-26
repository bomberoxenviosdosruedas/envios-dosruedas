import React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowRight, MessageCircle, Calculator } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  badge: string;
  icon: LucideIcon;
  whatsappMessage: string;
  showQuoteButton?: boolean;
}

export default function ServiceHero({
  title,
  subtitle,
  badge,
  icon: Icon,
  whatsappMessage,
  showQuoteButton = true,
}: ServiceHeroProps) {
  const whatsappUrl = `https://wa.me/5492236602699?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="bg-brand-blue-500 text-white pt-14 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-brand-yellow-500">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-yellow-500 flex items-center justify-center border border-white/20">
            <Icon className="w-5 h-5" />
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-300 text-xs font-semibold tracking-wider uppercase border border-brand-yellow-500/30">
            {badge}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-4 leading-none">
          {title}
        </h1>

        <p className="font-sans text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed font-normal mb-8">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {showQuoteButton && (
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-base tracking-wider uppercase border-2 border-brand-yellow-500 hover:bg-brand-yellow-400 active:scale-[0.98] transition-all shadow-md font-bold"
            >
              <Calculator className="w-4 h-4 text-brand-blue-500" />
              <span>Calcular Tarifa Online</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white font-sans text-sm font-bold uppercase tracking-wider border border-white/30 hover:bg-white/20 active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
